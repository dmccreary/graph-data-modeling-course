---
title: Modeling Customers
description: Comprehensive guide to modeling customers in graph databases including individuals, households, corporations, and behavior tracking
generated_by: claude skill chapter-content-generator
date: 2025-12-09 15:00:00
version: 0.03
---

# Modeling Customers

## Summary

This chapter explores how to model customers in a graph database, covering individual customers, households, families, corporate entities, and organizations. We address challenges like license modeling, abuse detection, and tracking customer behavior across multiple touchpoints.

## Concepts Covered

1. Customer Definition
2. Individual Customers
3. Customer Locations
4. Customer Addresses
5. Household Modeling
6. Family Relationships
7. Corporate Customers
8. Organization Customers
9. License Modeling
10. Abuse Detection
11. IP Address Tracking

## Learning Objectives

By the end of this chapter, students will be able to:

- Design a comprehensive customer node with appropriate properties
- Model relationships between individuals, households, and families
- Distinguish between individual and corporate customer models
- Implement license tracking and abuse detection patterns
- Connect customer entities to locations and addresses

## Introduction: The Customer at the Center

If there's one thing every business agrees on, it's that customers matter. But here's the dirty little secret that keeps data architects up at night: *nobody actually agrees on what a "customer" is*. Is it the person who clicks "Buy Now"? The credit card that pays? The household that shares a Netflix account? The corporation that signs a million-dollar contract? The answer, frustratingly and wonderfully, is "yes to all of the above."

This chapter tackles one of the most common—and most deceptively complex—modeling challenges you'll face in your career. Customer data isn't just important; it's the gravitational center around which most business systems orbit. Get your customer model right, and queries about lifetime value, churn prediction, and personalization become elegant traversals. Get it wrong, and you'll spend your days writing SQL joins that make grown engineers weep.

The good news? Graph databases are spectacularly well-suited for customer modeling. Unlike relational systems that force you to pick one "customer" table and awkwardly shoehorn everyone into it, graphs let you model the rich, messy reality of how customers actually exist: as individuals who belong to households, who work at companies, who have multiple addresses, who share accounts with family members, and who occasionally try to game your licensing system.

Let's dive in and build customer models that actually reflect how the real world works.

## Customer Definition: What Exactly Is a Customer?

Before we start creating nodes and edges, we need to answer a surprisingly philosophical question: **what is a customer?** This isn't academic navel-gazing—your answer shapes every modeling decision that follows.

A **customer** is any entity that has a business relationship with your organization. That relationship might involve:

- Purchasing products or services
- Subscribing to offerings
- Using licensed software
- Receiving communications
- Being tracked for potential future business

The challenge is that "entity" can mean wildly different things:

| Entity Type | Examples | Key Characteristics |
|-------------|----------|---------------------|
| Individual | Person buying shoes online | Single human, personal details |
| Household | Family sharing streaming service | Multiple people, shared billing |
| Corporate | Company purchasing software licenses | Legal entity, multiple contacts |
| Organization | Non-profit receiving donations | May have complex hierarchy |

Most businesses need to model *all* of these, often with the same person appearing in multiple contexts. Alice might be an individual customer who buys books, part of the Chen household that subscribes to music streaming, *and* the procurement manager at TechCorp who purchases enterprise software.

!!! tip "The Golden Rule of Customer Modeling"
    Model customers at the level of granularity that matches your business decisions. If you bill households, model households. If you personalize for individuals, model individuals. If you do both, model both—and connect them with edges.

#### Diagram: Customer Entity Types

<details markdown="1">
    <summary>Customer Entity Hierarchy</summary>
    Type: diagram

    Purpose: Show the different types of entities that can be "customers" and their relationships

    Bloom Taxonomy: Understand (L2)
    Learning Objective: Students will identify and distinguish between different customer entity types

    Components to show:
    - Four main entity types as distinct shapes:
        - Individual (circle, blue)
        - Household (rounded rectangle, green)
        - Corporate (rectangle, orange)
        - Organization (hexagon, purple)
    - Connecting lines showing possible relationships:
        - Individual MEMBER_OF Household
        - Individual EMPLOYED_BY Corporate
        - Individual AFFILIATED_WITH Organization
        - Corporate SUBSIDIARY_OF Corporate
        - Organization PARTNERED_WITH Organization

    Visual hierarchy:
    - Individual at center (most granular)
    - Household, Corporate, Organization surrounding (aggregations)
    - Arrows indicating direction of relationship

    Labels for each entity type showing:
    - Typical properties
    - Business context

    Style: Modern infographic with clear iconography
    Color scheme:
    - Individual: Blue (#4A90D9)
    - Household: Green (#7CB342)
    - Corporate: Orange (#FF9800)
    - Organization: Purple (#9C27B0)

    Implementation: SVG or HTML/CSS diagram
</details>

## Individual Customers: The Person Behind the Purchase

The most fundamental customer type is the **individual customer**—a single human being who interacts with your business. This seems straightforward until you realize how much complexity hides behind "a person."

An individual customer node typically includes:

**Identity Properties:**

- `customer_id`: Your internal unique identifier
- `email`: Primary contact (often used as login)
- `phone`: Contact number(s)
- `name`: Full name or name components (first, last, middle)

**Demographic Properties:**

- `date_of_birth`: For age-related personalization or compliance
- `gender`: If relevant and ethically collected
- `preferred_language`: For communications

**Business Properties:**

- `customer_since`: When the relationship began
- `status`: Active, inactive, churned, etc.
- `tier`: Loyalty program level
- `lifetime_value`: Calculated total spending

**Consent Properties:**

- `marketing_consent`: Can you send promotions?
- `data_sharing_consent`: Can you share with partners?
- `consent_date`: When consent was given

```
// Individual customer node example
(alice:Customer:Individual {
    customer_id: "CUST-2024-001",
    email: "alice.chen@email.com",
    first_name: "Alice",
    last_name: "Chen",
    date_of_birth: date("1995-03-15"),
    customer_since: date("2020-06-01"),
    status: "active",
    tier: "gold",
    lifetime_value: 4523.87,
    marketing_consent: true,
    preferred_language: "en-US"
})
```

Notice the dual labels: `:Customer` (the general category) and `:Individual` (the specific type). This pattern lets you query all customers regardless of type, or filter to just individuals when needed.

#### Diagram: Individual Customer Node

<details markdown="1">
    <summary>Individual Customer Node Structure</summary>
    Type: diagram

    Purpose: Visualize the anatomy of an individual customer node with property groups

    Bloom Taxonomy: Remember (L1)
    Learning Objective: Students will recall the standard property groups for individual customer nodes

    Components:
    - Central node labeled "Customer:Individual"
    - Four property group panels radiating out:
        1. Identity (top): customer_id, email, phone, name fields
        2. Demographics (right): date_of_birth, gender, language
        3. Business (bottom): customer_since, status, tier, LTV
        4. Consent (left): marketing, data_sharing, consent_date

    - Color coding for property groups:
        - Identity: Blue
        - Demographics: Green
        - Business: Orange
        - Consent: Purple

    - Icons for each group (person, calendar, briefcase, shield)

    Style: Clean node diagram with grouped properties

    Implementation: SVG or p5.js static diagram
</details>

### Handling Multiple Identities

Real customers are messy. The same person might:

- Have three email addresses (personal, work, spam-catcher)
- Use different names (legal name vs. nickname)
- Have multiple phone numbers
- Appear in your system from different acquisition channels

You have two modeling choices:

**Option 1: Properties as Lists**
```
(alice:Customer:Individual {
    emails: ["alice@personal.com", "achen@work.com"],
    phones: ["+1-555-0101", "+1-555-0102"]
})
```

**Option 2: Separate Identity Nodes**
```
(alice:Customer:Individual)-[:HAS_EMAIL]->(e1:Email {address: "alice@personal.com", type: "personal"})
(alice)-[:HAS_EMAIL]->(e2:Email {address: "achen@work.com", type: "work"})
```

Option 2 is more verbose but enables richer querying: "Find all customers who have both a work and personal email" becomes a simple pattern match rather than list manipulation.

## Customer Locations: Where Customers Exist in Space

Customers don't float in a void—they exist in physical and virtual spaces. **Customer locations** capture the geographic dimension of customer data, enabling everything from shipping logistics to market analysis.

Location modeling involves several decisions:

**What geographic granularity do you need?**

- Country only (for compliance regions)
- State/Province (for tax calculations)
- City (for market analysis)
- Precise coordinates (for delivery optimization)

**How do locations relate to customers?**

- Billing location (where invoices go)
- Shipping location (where products go)
- Activity location (where they browse/purchase)
- Residence location (where they live)

A flexible approach uses **Location nodes** that can represent different granularities:

```
// Location nodes at different levels
(usa:Location:Country {name: "United States", iso_code: "US"})
(wa:Location:State {name: "Washington", iso_code: "US-WA"})
(seattle:Location:City {name: "Seattle", population: 750000})
(coord:Location:Point {latitude: 47.6062, longitude: -122.3321})

// Hierarchy relationships
(seattle)-[:LOCATED_IN]->(wa)
(wa)-[:LOCATED_IN]->(usa)
(coord)-[:WITHIN]->(seattle)
```

Connecting customers to locations:

```
(alice:Customer:Individual)-[:RESIDES_IN {since: date("2018-01-01")}]->(seattle)
(alice)-[:PURCHASES_FROM]->(coord)
```

| Relationship Type | Meaning | Typical Properties |
|------------------|---------|-------------------|
| RESIDES_IN | Customer's home location | since, is_primary |
| WORKS_IN | Employment location | company, role |
| PURCHASES_FROM | Where transactions occur | frequency, last_purchase |
| SHIPS_TO | Delivery destination | is_default, delivery_instructions |

#### Diagram: Location Hierarchy

<details markdown="1">
    <summary>Geographic Location Hierarchy</summary>
    Type: graph-model

    Purpose: Show how location nodes connect hierarchically and to customers

    Bloom Taxonomy: Understand (L2)
    Learning Objective: Students will understand how to model geographic hierarchies in a graph

    Node types:
    1. Country (large hexagon, dark blue)
       - United States
    2. State (medium pentagon, medium blue)
       - Washington, California
    3. City (small square, light blue)
       - Seattle, San Francisco
    4. Customer (circle, green)
       - Alice, Bob

    Edge types:
    1. LOCATED_IN (dashed arrow, gray)
       - City -> State -> Country
    2. RESIDES_IN (solid arrow, green)
       - Customer -> City
    3. PURCHASES_FROM (dotted arrow, orange)
       - Customer -> City

    Sample structure:
    - USA (Country)
      ├── Washington (State)
      │   └── Seattle (City)
      │       └── Alice RESIDES_IN
      └── California (State)
          └── San Francisco (City)
              └── Bob RESIDES_IN

    Layout: Hierarchical tree with customers as leaves

    Interactive features:
    - Click location to see all customers
    - Hover for population/customer count

    Implementation: vis-network with hierarchical layout
    Canvas size: 700x500px
</details>

## Customer Addresses: The Street-Level View

While locations capture geographic areas, **addresses** provide the precise street-level detail needed for physical mail, deliveries, and legal documentation. Addresses deserve their own nodes because:

1. Multiple customers may share an address (household members)
2. One customer may have multiple addresses (home, work, vacation)
3. Address validation and standardization is a distinct concern
4. Addresses change independently of customers

A well-designed address node includes:

```
(addr:Address {
    address_id: "ADDR-001",
    line1: "123 Main Street",
    line2: "Apartment 4B",
    city: "Seattle",
    state: "WA",
    postal_code: "98101",
    country: "US",

    // Standardized components
    street_number: "123",
    street_name: "Main",
    street_type: "Street",
    unit_type: "Apartment",
    unit_number: "4B",

    // Validation status
    is_validated: true,
    validation_date: date("2024-01-15"),
    validation_source: "USPS",

    // Geocoding
    latitude: 47.6062,
    longitude: -122.3321
})
```

Connecting addresses to customers with context:

```
(alice)-[:HAS_ADDRESS {type: "billing", is_primary: true}]->(addr1)
(alice)-[:HAS_ADDRESS {type: "shipping", is_primary: true}]->(addr2)
(alice)-[:HAS_ADDRESS {type: "shipping", is_primary: false, label: "Work"}]->(addr3)
```

!!! warning "Address Validation Matters"
    Invalid addresses cost real money—failed deliveries, returned mail, wasted marketing spend. Always track validation status and consider integrating with address validation services like USPS, Google, or specialized providers.

### Shared Addresses

When multiple customers share an address, the graph naturally represents this:

```
(alice)-[:HAS_ADDRESS]->(home:Address {line1: "123 Main St"})
(bob)-[:HAS_ADDRESS]->(home)
(carol)-[:HAS_ADDRESS]->(home)
```

This pattern immediately enables queries like "Who else lives at this address?" and "Find all customers at addresses with 3+ residents"—queries that would require self-joins and grouping in a relational system.

## Household Modeling: Customers as Collectives

Many business relationships exist not with individuals but with **households**—groups of people who share living arrangements, subscriptions, or purchasing decisions. Streaming services, utilities, insurance companies, and grocery delivery all think in terms of households.

A household node aggregates individuals:

```
(chen_household:Customer:Household {
    household_id: "HH-2024-001",
    name: "Chen Household",
    created_date: date("2020-06-01"),
    size: 4,
    type: "family",
    combined_ltv: 12500.00,
    subscription_tier: "premium_family"
})
```

Connecting individuals to households:

```
(alice)-[:MEMBER_OF {role: "account_owner", since: date("2020-06-01")}]->(chen_household)
(bob)-[:MEMBER_OF {role: "member", since: date("2020-06-15")}]->(chen_household)
(charlie)-[:MEMBER_OF {role: "member", since: date("2021-01-01")}]->(chen_household)
(diana)-[:MEMBER_OF {role: "member", since: date("2022-09-01")}]->(chen_household)
```

The `role` property on the MEMBER_OF edge is crucial for understanding household dynamics:

| Role | Description | Business Implications |
|------|-------------|----------------------|
| account_owner | Primary responsible party | Receives bills, makes decisions |
| member | Regular household member | Can use services |
| authorized_user | Non-resident with access | May have spending limits |
| dependent | Child or elder dependent | Age restrictions may apply |

#### Diagram: Household Structure MicroSim

<details markdown="1">
    <summary>Interactive Household Builder</summary>
    Type: microsim

    Purpose: Let students experiment with building household structures and exploring relationships

    Bloom Taxonomy: Apply (L3)
    Learning Objective: Students will construct household models with appropriate membership relationships

    Canvas layout:
    - Left panel (40%): Individual customer palette
    - Center (40%): Household visualization
    - Right panel (20%): Relationship properties

    Visual elements:
    - Draggable individual nodes (circles with names)
    - Household container (large rounded rectangle)
    - Connection lines showing membership
    - Role badges on connections

    Pre-populated individuals:
    - Alice (adult)
    - Bob (adult)
    - Charlie (teen)
    - Diana (child)
    - Grandma Rose (senior)

    Interactive controls:
    - Drag individuals into household
    - Click connection to set role (dropdown)
    - Button: "Add New Individual"
    - Button: "Create Second Household"
    - Display: Household statistics (size, combined LTV)

    Behavior:
    - Dropping individual into household creates MEMBER_OF edge
    - Role defaults to "member", click to change
    - Same individual can belong to multiple households
    - Household stats update in real-time

    Default scenario:
    - Empty household ready for building
    - All individuals available in palette

    Implementation: p5.js with drag-and-drop functionality
</details>

### Household vs. Address

A common question: "Why have both Household and Address? Isn't a household just 'people at an address'?"

Not quite! Consider these scenarios:

- **College student**: Lives at dorm address but belongs to parents' household for billing
- **Divorced parents**: Two addresses, one household for shared custody
- **Vacation home**: Same household, multiple addresses
- **Multi-generational**: One address, potentially multiple distinct households

Model both, and connect them:

```
(chen_household)-[:PRIMARY_ADDRESS]->(addr:Address)
(chen_household)-[:VACATION_ADDRESS]->(cabin:Address)
```

## Family Relationships: Blood, Law, and Choice

Within and across households, **family relationships** add another dimension to customer modeling. Understanding that Alice and Bob are married, that Charlie is their child, and that Rose is Alice's mother enables powerful personalization and analysis.

Family relationships are modeled as edges between individual customers:

```
(alice)-[:MARRIED_TO {since: date("2015-06-20")}]->(bob)
(alice)-[:PARENT_OF]->(charlie)
(bob)-[:PARENT_OF]->(charlie)
(alice)-[:CHILD_OF]->(rose)
```

Common family relationship types:

| Relationship | Direction | Properties |
|--------------|-----------|------------|
| MARRIED_TO | Bidirectional | since, anniversary |
| PARENT_OF | Parent → Child | biological, adopted |
| CHILD_OF | Child → Parent | |
| SIBLING_OF | Bidirectional | full, half, step |
| GRANDPARENT_OF | Grandparent → Grandchild | |
| GUARDIAN_OF | Guardian → Ward | legal_since |

!!! note "Relationship Direction Convention"
    While family relationships are often conceptually bidirectional, pick a consistent direction for edges. "Alice PARENT_OF Charlie" is cleaner than maintaining both PARENT_OF and CHILD_OF edges. Queries can traverse in either direction anyway.

### Family Relationships Enable Powerful Queries

Once you have family relationships, you can answer questions that would be nightmarish in relational systems:

**"Find all grandchildren of customer X":**
```cypher
MATCH (grandparent:Customer {customer_id: "X"})
      -[:PARENT_OF]->(:Customer)
      -[:PARENT_OF]->(grandchild:Customer)
RETURN grandchild
```

**"Find customers whose spouse also shops with us":**
```cypher
MATCH (c1:Customer)-[:MARRIED_TO]->(c2:Customer)
WHERE c1.status = 'active' AND c2.status = 'active'
RETURN c1, c2
```

**"Calculate combined family lifetime value":**
```cypher
MATCH (c:Customer)-[:PARENT_OF|MARRIED_TO*1..2]-(family:Customer)
WHERE c.customer_id = "ALICE-001"
RETURN sum(family.lifetime_value) as family_ltv
```

#### Diagram: Family Relationship Graph

<details markdown="1">
    <summary>Extended Family Network Visualization</summary>
    Type: graph-model

    Purpose: Show how family relationships create rich networks across multiple households

    Bloom Taxonomy: Analyze (L4)
    Learning Objective: Students will analyze complex family structures and their representation in graph form

    Node types:
    1. Individual customers (circles)
       - Different colors for different generations
       - Blue: Grandparents
       - Green: Parents
       - Orange: Children

    Edge types:
    1. MARRIED_TO (solid red line, no arrow)
    2. PARENT_OF (solid blue arrow)
    3. SIBLING_OF (dashed green line)
    4. MEMBER_OF (dotted gray arrow to household)

    Sample family structure:
    - Grandparents: Rose (widowed)
    - Parents: Alice + Bob (married), David + Eva (married)
    - Alice is Rose's daughter, David is Rose's son
    - Children: Charlie (Alice+Bob's), Frank (David+Eva's)
    - Charlie and Frank are cousins

    Households shown:
    - Chen Household (Alice, Bob, Charlie)
    - Smith Household (David, Eva, Frank)
    - Rose's Household (Rose alone)

    Layout: Family tree style with generations in rows

    Interactive features:
    - Click person to highlight all their relationships
    - Hover to see relationship path to selected person
    - Toggle to show/hide household memberships

    Implementation: vis-network with custom layout
    Canvas size: 900x600px
</details>

## Corporate Customers: When Your Customer Is a Business

Not all customers are people. **Corporate customers** are legal business entities—companies, LLCs, partnerships—that purchase from your organization. B2B (business-to-business) scenarios often involve corporate customers, and they have fundamentally different modeling needs.

A corporate customer node includes:

```
(techcorp:Customer:Corporate {
    customer_id: "CORP-2024-001",
    legal_name: "TechCorp Industries, LLC",
    dba_name: "TechCorp",
    tax_id: "12-3456789",
    duns_number: "123456789",

    // Business classification
    industry: "Technology",
    naics_code: "541511",
    company_size: "enterprise",
    employee_count: 5000,
    annual_revenue: 500000000,

    // Relationship status
    customer_since: date("2019-01-01"),
    account_tier: "strategic",
    contract_value: 2500000,
    renewal_date: date("2025-01-01")
})
```

Corporate customers connect to individual contacts:

```
(alice)-[:CONTACT_FOR {role: "primary", department: "Procurement"}]->(techcorp)
(bob)-[:CONTACT_FOR {role: "technical", department: "IT"}]->(techcorp)
(carol)-[:CONTACT_FOR {role: "executive", department: "C-Suite"}]->(techcorp)
```

| Contact Role | Description | Typical Interactions |
|--------------|-------------|---------------------|
| primary | Main point of contact | Orders, renewals, issues |
| billing | Handles payments | Invoices, payment terms |
| technical | Technical decisions | Implementation, support |
| executive | Strategic sponsor | Escalations, expansions |
| legal | Contract matters | Agreements, compliance |

### Corporate Hierarchies

Large corporations have complex structures: parent companies, subsidiaries, divisions, departments. Graphs handle this naturally:

```
(megacorp:Customer:Corporate {legal_name: "MegaCorp Global"})
(techcorp)-[:SUBSIDIARY_OF {ownership_percent: 100}]->(megacorp)
(datacorp)-[:SUBSIDIARY_OF {ownership_percent: 51}]->(megacorp)
(techcorp_west)-[:DIVISION_OF]->(techcorp)
(techcorp_east)-[:DIVISION_OF]->(techcorp)
```

This hierarchy enables queries like:

- "What's our total revenue from MegaCorp and all its subsidiaries?"
- "If MegaCorp's primary contact changes, which subsidiaries need notification?"
- "Which divisions of TechCorp haven't renewed their licenses?"

#### Diagram: Corporate Structure

<details markdown="1">
    <summary>Corporate Hierarchy with Contacts</summary>
    Type: graph-model

    Purpose: Visualize corporate ownership structure and contact relationships

    Bloom Taxonomy: Understand (L2)
    Learning Objective: Students will understand how to model corporate hierarchies and contact roles

    Node types:
    1. Parent Corporation (large rectangle, dark blue)
       - MegaCorp Global
    2. Subsidiary (medium rectangle, medium blue)
       - TechCorp Industries
       - DataCorp Analytics
    3. Division (small rectangle, light blue)
       - TechCorp West
       - TechCorp East
    4. Contact (circle, green)
       - Alice, Bob, Carol

    Edge types:
    1. SUBSIDIARY_OF (solid arrow, black)
       - Properties: ownership_percent
    2. DIVISION_OF (dashed arrow, gray)
    3. CONTACT_FOR (solid arrow, green)
       - Properties: role

    Layout: Hierarchical with corporate structure at top, contacts at bottom

    Sample data:
    - MegaCorp owns TechCorp (100%) and DataCorp (51%)
    - TechCorp has West and East divisions
    - Alice is primary contact for TechCorp
    - Bob is technical contact for TechCorp West

    Interactive features:
    - Click corporation to see all contacts
    - Hover contact to see all corporations they represent
    - Expand/collapse hierarchy levels

    Implementation: vis-network with hierarchical layout
    Canvas size: 800x600px
</details>

## Organization Customers: Beyond Corporations

**Organization customers** encompass entities that don't fit the corporate mold: non-profits, government agencies, educational institutions, associations, and other structured groups. They share some characteristics with corporations but have distinct modeling needs.

```
(university:Customer:Organization {
    customer_id: "ORG-2024-001",
    name: "State University",
    type: "educational",
    subtype: "public_university",
    tax_status: "501c3",

    // Organization specifics
    student_count: 45000,
    faculty_count: 3000,
    founded_year: 1891,
    accreditation: ["AACSB", "ABET"],

    // Relationship
    customer_since: date("2010-01-01"),
    discount_tier: "education",
    annual_spend: 150000
})
```

Organization types and their characteristics:

| Type | Examples | Key Considerations |
|------|----------|-------------------|
| Educational | Universities, schools | Academic calendars, student pricing |
| Government | Agencies, municipalities | Procurement rules, fiscal years |
| Non-profit | Charities, foundations | Tax exemptions, donation tracking |
| Association | Professional groups | Membership-based, chapters |
| Healthcare | Hospitals, clinics | HIPAA compliance, complex billing |

Organizations often have internal hierarchies:

```
(state_u:Organization)-[:HAS_COLLEGE]->(engineering:Organization:College)
(engineering)-[:HAS_DEPARTMENT]->(cs:Organization:Department)
(cs)-[:EMPLOYS]->(prof_smith:Customer:Individual)
```

## License Modeling: Who Can Use What

**License modeling** tracks the agreements that permit customers to use your products or services. In a world of SaaS subscriptions, per-seat pricing, and complex entitlements, license graphs are essential for compliance, billing, and access control.

A license node represents a specific grant of usage rights:

```
(lic:License {
    license_id: "LIC-2024-001",
    product: "DataViz Pro",
    edition: "Enterprise",

    // Terms
    license_type: "subscription",
    seat_count: 50,
    start_date: date("2024-01-01"),
    end_date: date("2025-01-01"),

    // Status
    status: "active",
    seats_used: 43,
    last_compliance_check: datetime("2024-03-15T10:30:00"),

    // Pricing
    annual_value: 25000,
    price_per_seat: 500
})
```

License relationships connect customers, users, and products:

```
// Corporate customer owns the license
(techcorp)-[:HOLDS_LICENSE {contract_id: "CTR-001"}]->(lic)

// Individual users are assigned to the license
(alice)-[:ASSIGNED_TO {assigned_date: date("2024-01-05"), assigned_by: "admin"}]->(lic)
(bob)-[:ASSIGNED_TO]->(lic)

// License covers a product
(lic)-[:GRANTS_ACCESS_TO]->(product:Product {name: "DataViz Pro"})
```

#### Diagram: License Assignment Model

<details markdown="1">
    <summary>License Relationship Diagram</summary>
    Type: graph-model

    Purpose: Show the relationships between corporate customers, licenses, and individual users

    Bloom Taxonomy: Understand (L2)
    Learning Objective: Students will understand the tripartite relationship between license holders, licenses, and users

    Node types:
    1. Corporate Customer (rectangle, orange)
       - TechCorp
    2. License (diamond, gold)
       - Enterprise License (50 seats)
    3. Individual User (circle, blue)
       - Alice, Bob, Carol, David (4 users shown)
    4. Product (hexagon, purple)
       - DataViz Pro

    Edge types:
    1. HOLDS_LICENSE (solid arrow, orange)
       - Corporate -> License
       - Properties: contract_id, signed_date
    2. ASSIGNED_TO (solid arrow, blue)
       - Individual -> License
       - Properties: assigned_date
    3. GRANTS_ACCESS_TO (dashed arrow, purple)
       - License -> Product

    Visual indicators:
    - License node shows "43/50 seats used"
    - Progress bar within license node
    - Assigned users grouped visually

    Layout: Hierarchical with license in center

    Implementation: vis-network with custom shapes
    Canvas size: 700x500px
</details>

### License Compliance Patterns

Graphs excel at answering license compliance questions:

**"Are we over our seat count?"**
```cypher
MATCH (c:Corporate)-[:HOLDS_LICENSE]->(lic:License)
MATCH (u:Individual)-[:ASSIGNED_TO]->(lic)
WITH lic, count(u) as used_seats
WHERE used_seats > lic.seat_count
RETURN lic.license_id, lic.seat_count, used_seats
```

**"Who hasn't used their assigned license in 90 days?"**
```cypher
MATCH (u:Individual)-[:ASSIGNED_TO]->(lic:License)
WHERE NOT exists((u)-[:USED {date: > date() - duration('P90D')}]->(lic))
RETURN u.name, lic.product
```

**"What products can this user access?"**
```cypher
MATCH (u:Individual {email: "alice@techcorp.com"})
      -[:ASSIGNED_TO]->(lic:License)
      -[:GRANTS_ACCESS_TO]->(p:Product)
WHERE lic.status = 'active' AND date() < lic.end_date
RETURN p.name
```

## Abuse Detection: When Customers Behave Badly

Not all customer behavior is legitimate. **Abuse detection** uses graph patterns to identify customers engaging in fraud, policy violations, or system gaming. Graphs are particularly powerful here because abuse often involves relationships that relational queries struggle to express.

Common abuse patterns to detect:

**Account Sharing Abuse:**
```cypher
// Find licenses being used from too many IP addresses
MATCH (u:Individual)-[:ASSIGNED_TO]->(lic:License)
MATCH (u)-[:ACCESSED_FROM]->(ip:IPAddress)
WITH u, lic, count(DISTINCT ip) as ip_count
WHERE ip_count > 10  // Threshold for suspicion
RETURN u.email, lic.license_id, ip_count
```

**Trial Abuse (Multiple Accounts):**
```cypher
// Find individuals with multiple "trial" accounts sharing identifiers
MATCH (c1:Customer)-[:HAS_EMAIL]->(e:Email)<-[:HAS_EMAIL]-(c2:Customer)
WHERE c1 <> c2
  AND c1.account_type = 'trial'
  AND c2.account_type = 'trial'
RETURN c1, c2, e.address
```

**Fake Household Abuse:**
```cypher
// Find "households" where members have no shared addresses
MATCH (h:Household)<-[:MEMBER_OF]-(m:Individual)
MATCH (m)-[:HAS_ADDRESS]->(a:Address)
WITH h, collect(DISTINCT a) as addresses
WHERE size(addresses) > 3  // Each "member" at different address
RETURN h.household_id, size(addresses) as unique_addresses
```

#### Diagram: Abuse Detection Patterns

<details markdown="1">
    <summary>Abuse Pattern Visualization</summary>
    Type: diagram

    Purpose: Illustrate common abuse patterns and how they appear in graph structure

    Bloom Taxonomy: Analyze (L4)
    Learning Objective: Students will analyze graph patterns to identify potential customer abuse

    Three pattern panels:

    Panel 1: Account Sharing
    - One user node connected to many IP address nodes (suspicious)
    - Compare to normal: one user, 2-3 IPs
    - Red highlighting on suspicious pattern

    Panel 2: Trial Abuse
    - Multiple customer nodes sharing email/device nodes
    - Star pattern with shared identifier at center
    - Each customer has "trial" badge

    Panel 3: Fake Household
    - Household node with member connections
    - Each member connected to different address
    - No shared addresses between members
    - Contrast with legitimate household (shared address)

    Color scheme:
    - Normal patterns: Green/blue
    - Suspicious patterns: Red/orange
    - Shared identifiers: Yellow highlight

    Style: Side-by-side comparison of normal vs. suspicious

    Implementation: SVG or HTML/CSS diagram
</details>

### Building an Abuse Score

Rather than binary "abuser/not abuser" classifications, consider computing an **abuse risk score** based on multiple signals:

```
Abuse Risk Score = (
    ip_diversity_score × 0.25 +
    login_velocity_score × 0.20 +
    sharing_indicator_score × 0.25 +
    payment_risk_score × 0.15 +
    behavioral_anomaly_score × 0.15
)
```

Store this on the customer node and update it periodically:

```cypher
MATCH (c:Customer)
SET c.abuse_risk_score = calculateAbuseRisk(c),
    c.last_risk_assessment = datetime()
```

## IP Address Tracking: The Digital Fingerprint

**IP address tracking** connects customers to their digital footprint, enabling location inference, device tracking, and security analysis. IP addresses are first-class entities in a customer graph.

```
(ip:IPAddress {
    address: "203.0.113.42",
    version: "IPv4",

    // Geolocation (from IP database)
    country: "US",
    region: "Washington",
    city: "Seattle",
    postal_code: "98101",
    latitude: 47.6062,
    longitude: -122.3321,

    // Network info
    isp: "Comcast",
    organization: "Comcast Cable",
    asn: 7922,
    connection_type: "Cable/DSL",

    // Risk indicators
    is_vpn: false,
    is_proxy: false,
    is_tor: false,
    is_datacenter: false,
    threat_score: 0.12
})
```

Connecting customers to IP addresses:

```
(alice)-[:ACCESSED_FROM {
    first_seen: datetime("2024-01-15T10:30:00"),
    last_seen: datetime("2024-03-20T14:45:00"),
    access_count: 47,
    device_type: "desktop"
}]->(ip)
```

IP tracking enables valuable queries:

**"Find all customers who've accessed from this IP":**
```cypher
MATCH (c:Customer)-[:ACCESSED_FROM]->(ip:IPAddress {address: "203.0.113.42"})
RETURN c.email, c.customer_id
```

**"Has this customer ever used a VPN?":**
```cypher
MATCH (c:Customer {customer_id: "CUST-001"})-[:ACCESSED_FROM]->(ip:IPAddress)
WHERE ip.is_vpn = true
RETURN ip.address, ip.first_seen
```

**"Find customers accessing from multiple countries in one day":**
```cypher
MATCH (c:Customer)-[r:ACCESSED_FROM]->(ip:IPAddress)
WHERE date(r.last_seen) = date()
WITH c, collect(DISTINCT ip.country) as countries
WHERE size(countries) > 2
RETURN c.email, countries
```

#### Diagram: IP Tracking MicroSim

<details markdown="1">
    <summary>Customer IP Activity Visualizer</summary>
    Type: microsim

    Purpose: Visualize customer access patterns across IP addresses and detect anomalies

    Bloom Taxonomy: Evaluate (L5)
    Learning Objective: Students will evaluate IP access patterns to identify normal vs. suspicious behavior

    Canvas layout:
    - Left panel (30%): Customer selector and info
    - Center (50%): World map with IP locations
    - Right panel (20%): Activity timeline and risk indicators

    Visual elements:
    - World map with plotted IP locations
    - Lines connecting customer to IP locations
    - Color-coded risk indicators (green=safe, yellow=moderate, red=high)
    - Timeline of access events below map

    Interactive controls:
    - Dropdown: Select customer
    - Date range slider
    - Checkboxes: Filter by VPN, Proxy, Datacenter
    - Toggle: Show travel path animation

    Sample data:
    - Customer Alice: Seattle (home), Portland (travel), VPN (flagged)
    - Customer Bob: NYC only (clean pattern)
    - Customer Charlie: 10 countries in 1 day (highly suspicious)

    Risk calculation displayed:
    - IP diversity score
    - Geographic velocity check
    - VPN/Proxy usage percentage
    - Overall risk assessment

    Behavior:
    - Selecting customer shows their IP footprint
    - Hovering IP shows access details
    - Risk score updates based on filters
    - Anomalies highlighted with pulsing effect

    Implementation: p5.js with map visualization (Leaflet or similar)
</details>

### IP Address as Shared Entity

Multiple customers may share IP addresses legitimately (same office, same coffee shop) or suspiciously (credential sharing). The graph makes this visible:

```cypher
// Find IP addresses used by multiple customers
MATCH (c:Customer)-[:ACCESSED_FROM]->(ip:IPAddress)
WITH ip, collect(c) as customers
WHERE size(customers) > 1
RETURN ip.address, [c IN customers | c.email] as shared_by
```

This query immediately reveals potential account sharing or legitimate shared environments—context that would require multiple subqueries and joins in a relational system.

## Bringing It All Together: The Complete Customer Graph

Let's see how all these pieces combine into a comprehensive customer model:

```cypher
// Create the household
CREATE (hh:Customer:Household {household_id: "HH-001", name: "Chen Household"})

// Create individual customers
CREATE (alice:Customer:Individual {
    customer_id: "CUST-001",
    email: "alice@email.com",
    first_name: "Alice",
    last_name: "Chen"
})
CREATE (bob:Customer:Individual {
    customer_id: "CUST-002",
    email: "bob@email.com",
    first_name: "Bob",
    last_name: "Chen"
})

// Create corporate customer and connect Alice
CREATE (techcorp:Customer:Corporate {
    customer_id: "CORP-001",
    legal_name: "TechCorp Industries"
})

// Create address
CREATE (home:Address {
    address_id: "ADDR-001",
    line1: "123 Main Street",
    city: "Seattle"
})

// Build relationships
CREATE (alice)-[:MEMBER_OF {role: "account_owner"}]->(hh)
CREATE (bob)-[:MEMBER_OF {role: "member"}]->(hh)
CREATE (alice)-[:MARRIED_TO]->(bob)
CREATE (alice)-[:HAS_ADDRESS {type: "home"}]->(home)
CREATE (bob)-[:HAS_ADDRESS {type: "home"}]->(home)
CREATE (hh)-[:PRIMARY_ADDRESS]->(home)
CREATE (alice)-[:CONTACT_FOR {role: "procurement"}]->(techcorp)

// Create license
CREATE (lic:License {license_id: "LIC-001", seat_count: 50})
CREATE (techcorp)-[:HOLDS_LICENSE]->(lic)
CREATE (alice)-[:ASSIGNED_TO]->(lic)

// Track IP access
CREATE (ip:IPAddress {address: "203.0.113.42"})
CREATE (alice)-[:ACCESSED_FROM {last_seen: datetime()}]->(ip)
```

This connected structure enables queries that span all aspects of customer data:

**"What's the total value of Alice's household plus her employer?"**
```cypher
MATCH (alice:Customer {email: "alice@email.com"})
OPTIONAL MATCH (alice)-[:MEMBER_OF]->(hh:Household)
OPTIONAL MATCH (alice)-[:CONTACT_FOR]->(corp:Corporate)
RETURN
    alice.lifetime_value as individual,
    hh.combined_ltv as household,
    corp.contract_value as corporate,
    coalesce(alice.lifetime_value, 0) +
    coalesce(hh.combined_ltv, 0) +
    coalesce(corp.contract_value, 0) as total_relationship_value
```

## Summary

This chapter explored the rich complexity of customer modeling in graph databases. We learned that "customer" is not a single concept but a family of related entity types:

- **Individual customers** represent single humans with identity, demographic, and consent properties
- **Customer locations** and **addresses** place customers in geographic context at different granularities
- **Households** aggregate individuals who share billing, subscriptions, or living arrangements
- **Family relationships** capture the blood, legal, and chosen bonds between individuals
- **Corporate customers** model business entities with complex hierarchies and multiple contacts
- **Organization customers** extend corporate concepts to non-profits, government, and educational institutions
- **License modeling** tracks usage rights and assignments across the customer graph
- **Abuse detection** leverages graph patterns to identify fraud, sharing violations, and policy abuse
- **IP address tracking** connects customers to their digital footprint for security and personalization

The power of graph modeling for customers lies in representing these entities *and their connections* naturally. Where relational databases would require dozens of tables, junction tables, and complex joins, graphs model the messy reality of customer relationships directly.

As you continue through this course, you'll see these customer models connect to products, transactions, time, and space—building toward the comprehensive data models that power modern businesses.

??? question "Quick Knowledge Check - Design a Customer Model"
    You're building a graph for a gym/fitness club. Design nodes and edges for:
    - Individual members
    - Family memberships
    - Corporate wellness program memberships
    - Member check-ins at different gym locations

    **Answer:**

    **Nodes:**
    - `:Customer:Individual` - Individual gym members
    - `:Customer:Household:FamilyMembership` - Family membership package
    - `:Customer:Corporate` - Companies with wellness programs
    - `:Location:Gym` - Physical gym locations
    - `:CheckIn` - Individual check-in events (optional, could be edge)

    **Edges:**
    - `(individual)-[:MEMBER_OF {role: "primary"|"family_member"}]->(familyMembership)`
    - `(individual)-[:ENROLLED_VIA]->(corporate)` - Corporate wellness enrollment
    - `(individual)-[:CHECKED_IN_AT {timestamp, duration}]->(location)`
    - `(familyMembership)-[:HAS_HOME_GYM]->(location)`
    - `(corporate)-[:PARTNER_AGREEMENT {discount_rate}]->(gym_chain)`

    **Key insight:** An individual can be both in a family membership AND enrolled through a corporate wellness program—the graph handles this naturally!

## References

1. **Master Data Management and Data Governance** by Alex Berson and Larry Dubov - Comprehensive coverage of customer data integration
2. **Customer Data Platforms** by Martin Kihn and Christopher O'Hara - Modern approaches to customer data unification
3. **Graph-Powered Machine Learning** by Alessandro Negro - Using graphs for customer analytics
4. **GDPR and Customer Data** - European Union regulations affecting customer data modeling
