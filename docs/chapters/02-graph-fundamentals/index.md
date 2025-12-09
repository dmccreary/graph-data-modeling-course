---
title: Graph Fundamentals
description: Core building blocks of graph databases including nodes, edges, properties, paths, and quality measures
generated_by: claude skill chapter-content-generator
date: 2025-12-09 14:30:00
version: 0.03
---

# Graph Fundamentals

## Summary

This chapter covers the core building blocks of graph databases: nodes, edges, properties, and paths. We explore data types, dependencies, and graph quality measures that form the foundation for all subsequent modeling work.

## Concepts Covered

1. Nodes
2. Edges
3. Properties
4. Simple Data Types
5. Complex Data Types
6. Paths
7. Dependencies
8. Graph Quality
9. Quality Measures
10. Graph Constraints
11. Quality Assertions
12. Quality Scores
13. Quality Dashboards
14. Graph Query Language

## Learning Objectives

By the end of this chapter, students will be able to:

- Define nodes, edges, and properties in a graph database
- Distinguish between simple and complex data types
- Explain how paths represent connections through a graph
- Describe dependency relationships and their importance
- Apply graph quality measures and constraints to validate models
- Use basic graph query language concepts

## Introduction: Why Graph Fundamentals Matter

Welcome to the playground where data gets connected! If you've ever wondered why your social media feed knows exactly what to show you, or how Netflix somehow recommends that perfect show at 2 AM, you're about to discover the secret sauce. Graph databases power these experiences by treating relationships as first-class citizens, not afterthoughts crammed into join tables.

Think of this chapter as learning the alphabet before writing poetry. Sure, you could memorize Shakespeare without understanding letters, but that would be both impressive and slightly terrifying. Similarly, mastering graph fundamentals will transform you from someone who uses graph databases to someone who thinks in graphs—and that distinction matters more than you might expect.

The concepts we'll explore here aren't just academic exercises. Every node you create, every edge you draw, and every property you define shapes how efficiently your queries run and how naturally your data model reflects reality. Get these fundamentals right, and the rest of graph modeling flows like a well-designed API. Get them wrong, and you'll be refactoring at 3 AM while questioning your career choices.

## Nodes: The Nouns of Your Data Universe

Let's start with the most fundamental building block: the **node**. In the simplest terms, a node represents a "thing" in your data model—a person, place, concept, event, or any entity you want to track. If you've taken a relational database course, you can think of nodes as somewhat analogous to rows in a table, but with superpowers.

Consider a social network. Every user is a node. Every post is a node. Every comment, every photo, every group—all nodes. The beauty of this approach is its intuitive nature: you model data the way you naturally think about it, not the way some normalization rule demands.

Here's what makes nodes special:

- **Identity**: Every node has a unique identifier, allowing you to reference it precisely
- **Labels**: Nodes can have one or more labels that categorize what type of entity they represent
- **Properties**: Nodes store attributes as key-value pairs (more on this soon!)
- **Relationships**: Nodes connect to other nodes through edges

| Aspect | Relational Row | Graph Node |
|--------|---------------|------------|
| Identity | Primary key | Internal node ID |
| Type | Table name | One or more labels |
| Attributes | Columns | Properties (flexible) |
| Connections | Foreign keys + joins | Direct edges |

The flexibility of labels deserves special attention. Unlike relational tables where a row belongs to exactly one table, a node can wear multiple hats. A person node could simultaneously be labeled as `:Student`, `:Employee`, and `:Volunteer`. This multi-label capability mirrors real life, where people rarely fit into single categories.

#### Diagram: Node Anatomy

<details markdown="1">
    <summary>Node Anatomy Diagram</summary>
    Type: diagram

    Purpose: Illustrate the components of a graph node including ID, labels, and properties

    Bloom Taxonomy: Understand (L2)
    Learning Objective: Students will be able to identify and explain the three main components of a graph node

    Components to show:
    - Central circle representing a node
    - Internal node ID indicator (small badge showing "id:42")
    - Label badges showing multiple labels (":Person", ":Student")
    - Property panel showing key-value pairs:
        - name: "Alice Chen"
        - age: 21
        - gpa: 3.85
        - enrolled: true
    - Visual distinction between system-managed (ID) and user-defined (labels, properties) elements

    Style: Clean, modern diagram with rounded elements
    Color scheme:
    - Node circle: Soft blue
    - Labels: Purple badges
    - Properties: Green panel
    - ID: Gray badge

    Implementation: SVG or p5.js static diagram
</details>

## Edges: The Verbs That Connect Your World

If nodes are the nouns, then **edges** (also called relationships) are the verbs. They describe how things connect, interact, and relate to each other. And here's where graph databases truly shine—while relational databases treat relationships as second-class citizens requiring expensive join operations, graph databases make them first-class citizens with their own identity, properties, and efficient traversal.

Every edge has three essential characteristics:

1. **Direction**: Edges go from a source node to a target node (though you can traverse them in either direction)
2. **Type**: A label that describes the nature of the relationship (e.g., KNOWS, PURCHASED, MANAGES)
3. **Properties**: Optional attributes that provide context about the relationship

Consider modeling a course registration system. A student doesn't just "connect" to a course—they ENROLLED_IN the course, possibly with properties like enrollment_date, section_number, and grade. The edge isn't just a dumb pointer; it carries semantic meaning and contextual data.

```
(alice:Student)-[:ENROLLED_IN {semester: "Fall 2024", grade: "A"}]->(cs101:Course)
```

This compact notation tells a story: Alice, who is a student, enrolled in CS101 during Fall 2024 and earned an A. The relationship itself holds data that would require an entire junction table in a relational system.

!!! tip "Edge Direction Best Practice"
    Choose edge directions that read naturally as sentences. "Alice ENROLLED_IN CS101" flows better than "CS101 HAS_STUDENT Alice." While you can traverse edges in either direction, consistent naming conventions make your queries more intuitive.

#### Diagram: Edge Types and Properties

<details markdown="1">
    <summary>Edge Types and Properties Visualization</summary>
    Type: graph-model

    Purpose: Show different types of edges with their properties connecting various nodes

    Bloom Taxonomy: Understand (L2)
    Learning Objective: Students will understand how edges carry type information and properties

    Node types:
    1. Person nodes (circles, blue)
       - Alice, Bob, Charlie
    2. Course nodes (squares, green)
       - CS101, MATH201
    3. Company nodes (hexagons, orange)
       - TechCorp

    Edge types with properties:
    1. ENROLLED_IN (solid arrow, purple)
       - From Person to Course
       - Properties: semester, grade
    2. KNOWS (dashed arrow, gray)
       - From Person to Person
       - Properties: since, how_met
    3. WORKS_AT (solid arrow, orange)
       - From Person to Company
       - Properties: start_date, role, salary

    Sample connections:
    - Alice -[ENROLLED_IN]-> CS101
    - Alice -[KNOWS {since: 2022}]-> Bob
    - Bob -[WORKS_AT {role: "Engineer"}]-> TechCorp
    - Charlie -[ENROLLED_IN]-> MATH201

    Layout: Force-directed with clear spacing

    Interactive features:
    - Hover over edge to see all properties
    - Click edge to highlight connected nodes

    Implementation: vis-network JavaScript library
    Canvas size: 700x500px
</details>

## Properties: Adding Richness to Your Model

**Properties** transform nodes and edges from abstract identifiers into meaningful entities with real-world attributes. A property is simply a key-value pair that stores information about a node or edge. Think of them as the adjectives and adverbs that bring your data model to life.

Properties on nodes might include:

- A Person's name, email, and date of birth
- A Product's SKU, price, and inventory count
- A Location's coordinates, address, and timezone

Properties on edges provide relationship context:

- When did Alice start following Bob? (followed_since)
- How strong is the connection between two concepts? (weight)
- What was the transaction amount? (amount)

Unlike relational databases where you must define columns upfront, graph databases typically allow schema-flexible properties. You can add a new property to one node without affecting others of the same type. This flexibility proves invaluable during iterative development and when modeling heterogeneous real-world data.

| Property Location | Use Case Example | Why It Matters |
|------------------|------------------|----------------|
| Node property | Person.email | Core entity attributes |
| Edge property | PURCHASED.timestamp | Relationship context |
| Both | quantity | Could describe product stock or purchase amount |

However, with great flexibility comes great responsibility. Just because you *can* store anything as a property doesn't mean you *should*. Properties work best for atomic values that describe a single entity. When you find yourself cramming complex data into a property (like a JSON blob of related items), that's usually a signal to create additional nodes and edges instead.

## Simple Data Types

When defining properties, you'll work with data types that should feel familiar from your programming experience. **Simple data types** are the atomic building blocks—values that can't be broken down further without losing meaning.

The most common simple data types include:

- **String**: Text values like names, descriptions, and identifiers ("Alice", "Introduction to Graphs")
- **Integer**: Whole numbers for counts, IDs, and discrete values (42, -7, 0)
- **Float/Double**: Decimal numbers for measurements, percentages, and calculations (3.14159, 98.6)
- **Boolean**: True/false values for binary states (is_active: true, is_verified: false)
- **Date/DateTime**: Temporal values with varying precision (2024-01-15, 2024-01-15T14:30:00Z)

These types directly correspond to how graph databases store and index data internally. Using appropriate types isn't just about semantics—it affects query performance, storage efficiency, and the operations you can perform. Storing an age as an integer enables mathematical comparisons (age > 21), while storing it as a string would require string comparison semantics (which would incorrectly sort "9" after "10").

#### Diagram: Simple Data Types Reference

<details markdown="1">
    <summary>Simple Data Types Quick Reference</summary>
    Type: infographic

    Purpose: Provide a visual reference card for simple data types and their use cases

    Bloom Taxonomy: Remember (L1)
    Learning Objective: Students will recall the five primary simple data types and when to use each

    Layout: Grid of 5 cards, each showing a data type

    Card content for each type:
    1. String
       - Icon: "Aa" text symbol
       - Color: Blue
       - Examples: "Alice", "CS-101", "New York"
       - Use when: Names, identifiers, text descriptions
       - Operations: contains, starts_with, regex

    2. Integer
       - Icon: "123" number symbol
       - Color: Green
       - Examples: 42, -7, 1000000
       - Use when: Counts, IDs, discrete values
       - Operations: =, <, >, +, -, *, /

    3. Float
       - Icon: "3.14" decimal symbol
       - Color: Orange
       - Examples: 3.14159, 98.6, 0.001
       - Use when: Measurements, percentages, coordinates
       - Operations: =, <, >, arithmetic, rounding

    4. Boolean
       - Icon: Toggle switch
       - Color: Purple
       - Examples: true, false
       - Use when: Binary states, flags
       - Operations: AND, OR, NOT

    5. DateTime
       - Icon: Calendar with clock
       - Color: Teal
       - Examples: 2024-01-15, 14:30:00
       - Use when: Timestamps, scheduling, history
       - Operations: before, after, duration

    Interactive elements:
    - Hover over card to see extended examples
    - Click to expand with common pitfalls

    Implementation: HTML/CSS cards with JavaScript interactions
</details>

## Complex Data Types

Real-world data doesn't always fit neatly into simple scalar values. **Complex data types** handle structured, multi-valued, or nested information within a single property. While different graph databases support varying sets of complex types, the most common include:

- **Lists/Arrays**: Ordered collections of values (tags: ["graph", "database", "AI"])
- **Maps/Objects**: Key-value collections for nested data (address: {street: "123 Main", city: "Seattle"})
- **Points/Spatial**: Geographic coordinates (location: point({latitude: 47.6, longitude: -122.3}))
- **Durations**: Time intervals (subscription_length: duration("P1Y6M"))

Lists prove particularly useful for multi-valued attributes without creating separate nodes. A book might have multiple authors stored as a list, or a product might have several tags. However, when you need to store properties about each item in the list (like each author's contribution percentage), you should model those items as separate nodes with their own edges.

Maps enable hierarchical property storage but should be used judiciously. If you find yourself frequently querying into map properties, consider whether that nested structure should actually be a separate node. The rule of thumb: use maps for rarely-queried supplementary data, not for core attributes you'll search or aggregate.

Spatial types deserve special mention for any application involving location data. Rather than storing latitude and longitude as separate float properties, dedicated point types enable powerful geospatial queries like "find all coffee shops within 5 kilometers" using built-in distance functions.

```
// Example of complex types in action
(product:Product {
    name: "Graph Database Handbook",
    tags: ["database", "graph", "tutorial"],
    dimensions: {height: 24, width: 16, depth: 3},
    warehouse_location: point({latitude: 47.6, longitude: -122.3})
})
```

## Paths: Following the Connections

A **path** represents a sequence of nodes connected by edges, telling the story of how entities relate across multiple hops. Paths answer questions like "How is Alice connected to Charlie?" or "What's the shortest route from Seattle to Boston?" Understanding paths is crucial because most real-world graph queries involve traversing connections rather than looking up isolated nodes.

Every path consists of alternating nodes and edges:

```
(start_node)-[edge1]->(node2)-[edge2]->(node3)...-[edgeN]->(end_node)
```

Paths have several important characteristics:

- **Length**: The number of edges (hops) in the path
- **Direction**: Whether traversal follows or opposes edge direction
- **Weight**: For weighted graphs, the sum of edge weights along the path
- **Uniqueness**: Whether nodes or edges can repeat

Consider a "six degrees of separation" query in a social network. You're looking for paths between two people where the length is at most 6. The database traverses KNOWS edges, building paths of connected people until it either finds your target or exhausts possibilities within the length limit.

#### Diagram: Path Traversal MicroSim

<details markdown="1">
    <summary>Interactive Path Explorer MicroSim</summary>
    Type: microsim

    Purpose: Let students visualize and explore different paths between nodes

    Bloom Taxonomy: Apply (L3)
    Learning Objective: Students will trace paths through a graph and understand path length, direction, and multiplicity

    Canvas layout:
    - Main area (80%): Graph visualization
    - Control panel (20%): Right sidebar

    Visual elements:
    - 8-10 nodes arranged in a network pattern
    - Multiple edges creating various path options
    - Color coding:
        - Unvisited nodes: Gray
        - Start node: Green
        - End node: Red
        - Current path: Yellow highlight
        - Visited nodes: Light blue

    Sample graph structure:
    - Alice -> Bob -> Charlie -> Diana
    - Alice -> Eve -> Charlie
    - Bob -> Frank -> Diana
    - Creates multiple path options

    Interactive controls:
    - Dropdown: Select start node
    - Dropdown: Select end node
    - Slider: Maximum path length (1-6)
    - Button: "Find All Paths"
    - Button: "Find Shortest Path"
    - Checkbox: "Show path lengths"
    - Display: List of found paths with lengths

    Behavior:
    - Clicking "Find All Paths" animates discovery of each valid path
    - Paths highlight sequentially with brief pauses
    - Path list updates in real-time
    - Shortest path highlighted in gold when requested

    Default parameters:
    - Start: Alice
    - End: Diana
    - Max length: 4

    Implementation: p5.js with custom graph traversal animation
</details>

Path finding algorithms power countless applications: GPS navigation, social network recommendations, fraud detection patterns, and supply chain optimization. The efficiency of path operations is one of the primary reasons organizations choose graph databases—while relational databases struggle with multi-hop queries due to repeated joins, graph databases traverse paths in near-constant time per hop.

## Dependencies: Modeling Prerequisites and Requirements

**Dependencies** represent a special category of relationships where one entity relies on, requires, or must precede another. You've already encountered dependencies in your academic career: you couldn't take Data Structures without first passing Introduction to Programming. Graph databases excel at modeling these prerequisite chains because dependency traversal is essentially path finding.

Common dependency patterns include:

- **Learning dependencies**: Concept A must be understood before Concept B
- **Software dependencies**: Library X requires Library Y to function
- **Task dependencies**: Task 1 must complete before Task 2 can start
- **Data dependencies**: Report B uses data transformed by Process A

Dependency graphs enable powerful analyses:

1. **Dependency chains**: What's the longest chain of prerequisites?
2. **Impact analysis**: If Concept X changes, what else is affected?
3. **Critical path**: What sequence determines minimum completion time?
4. **Cycle detection**: Are there any circular dependencies (which indicate problems)?

| Dependency Type | Example | Typical Query |
|----------------|---------|---------------|
| Learning | Calculus → Linear Algebra | "What must I learn first?" |
| Software | pandas → numpy | "What packages need installation?" |
| Task | Design → Build → Test | "What's blocking this task?" |
| Data | Raw → Cleaned → Analyzed | "Where did this value come from?" |

!!! warning "Circular Dependencies"
    Circular dependencies (A depends on B, B depends on C, C depends on A) often indicate modeling problems. While graphs can represent cycles, many dependency scenarios shouldn't have them. Consider adding validation to catch unintended cycles in your dependency graphs.

#### Diagram: Dependency Chain Visualization

<details markdown="1">
    <summary>Learning Dependency Graph</summary>
    Type: graph-model

    Purpose: Show how learning concepts form dependency chains in this course

    Bloom Taxonomy: Analyze (L4)
    Learning Objective: Students will analyze dependency relationships and identify learning prerequisites

    Node types:
    1. Foundation concepts (circles, dark blue)
       - Nodes, Edges, Properties
    2. Intermediate concepts (circles, medium blue)
       - Simple Data Types, Complex Data Types, Paths
    3. Advanced concepts (circles, light blue)
       - Dependencies, Graph Quality, Constraints

    Edge type:
    - DEPENDS_ON (arrows pointing to prerequisite)
    - Color: Gray with arrowheads

    Dependency structure:
    - Simple Data Types -> Properties
    - Complex Data Types -> Properties
    - Edges -> Nodes
    - Properties -> Nodes
    - Paths -> Edges
    - Dependencies -> Paths
    - Graph Quality -> Properties
    - Quality Measures -> Graph Quality
    - Graph Constraints -> Quality Measures

    Layout: Hierarchical (prerequisites at bottom, advanced at top)

    Interactive features:
    - Click node to highlight all its prerequisites
    - Double-click to show what depends on this concept
    - Hover for concept description tooltip

    Visual styling:
    - Node size based on number of dependents
    - Highlighted path when node selected
    - Dimmed nodes not in current dependency chain

    Implementation: vis-network with hierarchical layout
    Canvas size: 800x600px
</details>

## Graph Quality: Building Models That Last

Creating a graph database is easy. Creating a *good* graph database takes thought and discipline. **Graph quality** encompasses the practices, metrics, and standards that ensure your graph model is accurate, consistent, and fit for purpose. Just as code quality matters for maintainable software, data quality matters for trustworthy insights.

Graph quality has multiple dimensions:

- **Completeness**: Does the graph capture all relevant entities and relationships?
- **Accuracy**: Do property values correctly reflect real-world facts?
- **Consistency**: Are similar entities modeled the same way throughout?
- **Timeliness**: Is the data current enough for your use case?
- **Validity**: Do values conform to expected formats and constraints?

Poor quality manifests in frustrating ways: queries returning unexpected results, duplicate nodes representing the same entity, missing relationships that cause incomplete traversals, and outdated information leading to wrong decisions. The cost of fixing quality issues grows exponentially over time—catching a modeling mistake during design costs minutes, while fixing it after millions of records exist costs days or weeks.

Quality isn't just about data—it's about the model itself. A technically accurate graph built on a poorly designed schema will still produce confusion. If your node labels are inconsistent (:Customer vs :Customers vs :Client), if your edge types are unclear (:RELATED vs :CONNECTED vs :LINKED), or if your property names vary (:birth_date vs :birthDate vs :dob), you're creating technical debt that compounds with every query written against the graph.

## Quality Measures

You can't improve what you don't measure. **Quality measures** are specific metrics that quantify different aspects of graph quality, providing objective baselines and tracking improvement over time. Effective measures are SMART: Specific, Measurable, Achievable, Relevant, and Time-bound.

Common graph quality measures include:

1. **Completeness Rate**: Percentage of expected nodes/edges actually present
   - Formula: (actual_entities / expected_entities) × 100
   - Example: 95% of products have supplier relationships defined

2. **Property Fill Rate**: Percentage of nodes with required properties populated
   - Formula: (nodes_with_property / total_nodes) × 100
   - Example: 87% of Person nodes have email addresses

3. **Duplicate Rate**: Percentage of entities that have unintended duplicates
   - Formula: (duplicate_count / total_entities) × 100
   - Example: 2.3% of customers appear multiple times

4. **Orphan Rate**: Percentage of nodes with no relationships
   - Formula: (orphan_nodes / total_nodes) × 100
   - Example: 0.5% of products connect to nothing

5. **Freshness Score**: How recently data was updated relative to requirements
   - Formula: (current_time - last_update) compared to threshold
   - Example: 99% of prices updated within 24 hours

#### Diagram: Quality Metrics Dashboard

<details markdown="1">
    <summary>Graph Quality Metrics Overview Chart</summary>
    Type: chart

    Purpose: Visualize multiple quality metrics to identify areas needing attention

    Bloom Taxonomy: Evaluate (L5)
    Learning Objective: Students will evaluate graph quality by interpreting metric visualizations

    Chart type: Combination (bar chart with threshold lines)

    X-axis: Quality metric names
    Y-axis: Percentage (0-100%)

    Data series:
    1. Current Values (blue bars):
       - Completeness: 94%
       - Property Fill Rate: 87%
       - Accuracy Score: 96%
       - Freshness: 91%
       - Duplicate-Free Rate: 97%

    2. Target Threshold (horizontal red dashed line at 90%)

    3. Warning Threshold (horizontal yellow dashed line at 80%)

    Annotations:
    - Green checkmark above bars meeting target
    - Yellow warning icon on bars between warning and target
    - Red X on bars below warning threshold

    Title: "Graph Quality Scorecard - November 2024"

    Legend: Position top-right
    - Current Value
    - Target (90%)
    - Warning (80%)

    Color scheme:
    - Bars above 90%: Green
    - Bars 80-90%: Yellow
    - Bars below 80%: Red

    Implementation: Chart.js with annotation plugin
</details>

## Graph Constraints

**Graph constraints** are rules that your graph must satisfy to maintain integrity and consistency. They're the guardrails that prevent bad data from entering your system in the first place—much more efficient than finding and fixing problems later. If quality measures tell you how healthy your graph is, constraints help keep it healthy.

Types of graph constraints include:

- **Uniqueness constraints**: A property value must be unique across all nodes of a type
  - Example: Each Person node must have a unique email address

- **Existence constraints**: Required properties must be present
  - Example: Every Order node must have an order_date property

- **Type constraints**: Properties must match specified data types
  - Example: The price property must be a positive number

- **Relationship constraints**: Rules about how nodes can connect
  - Example: A Course can only have one PRIMARY_INSTRUCTOR edge

- **Cardinality constraints**: Limits on relationship counts
  - Example: A Student can enroll in at most 7 courses per semester

```
// Example constraint definitions (Cypher-style syntax)
CREATE CONSTRAINT unique_email FOR (p:Person) REQUIRE p.email IS UNIQUE
CREATE CONSTRAINT require_order_date FOR (o:Order) REQUIRE o.order_date IS NOT NULL
CREATE CONSTRAINT valid_price FOR (p:Product) REQUIRE p.price > 0
```

Constraints serve multiple purposes beyond data integrity. They document your model's rules in executable form, provide helpful error messages when violations occur, and can improve query performance by enabling optimizer assumptions. When an index backs a uniqueness constraint, property lookups become blazingly fast.

!!! note "Schema-Free Doesn't Mean Constraint-Free"
    Graph databases are often called "schema-free" because you don't predefine table structures. However, this flexibility doesn't mean "anything goes." Successful graph deployments implement constraints progressively, starting with critical uniqueness requirements and adding more as the model matures.

## Quality Assertions

While constraints prevent invalid data from entering the graph, **quality assertions** validate that existing data meets business expectations. Think of assertions as health checks that run periodically or on-demand to verify your graph's state. They don't block writes but instead flag issues for review.

Quality assertions answer questions like:

- Are all customer emails in valid format?
- Does every product have at least one category?
- Are order dates always before shipping dates?
- Do all manager relationships form valid hierarchies (no cycles)?

Assertions differ from constraints in key ways:

| Aspect | Constraints | Assertions |
|--------|------------|------------|
| Timing | Enforced on write | Checked on demand |
| Failure handling | Rejects the operation | Logs warning/creates task |
| Flexibility | Binary pass/fail | Can report severity levels |
| Performance impact | Every write operation | Only when run |
| Fixing violations | Prevent entry | Requires cleanup process |

A typical assertion workflow involves:

1. Define assertion rules in a configuration or code
2. Schedule regular assertion checks (daily, hourly, after imports)
3. Collect violation reports with node/edge identifiers
4. Prioritize fixes based on business impact
5. Track assertion pass rates over time

```
// Example assertion (pseudocode)
ASSERTION "Valid Email Format"
FOR EACH node IN (SELECT * FROM Person)
WHERE node.email NOT MATCHES '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
REPORT AS WARNING WITH node.id, node.name, node.email
```

#### Diagram: Assertion Workflow

<details markdown="1">
    <summary>Quality Assertion Pipeline</summary>
    Type: workflow

    Purpose: Show the flow from assertion definition through violation resolution

    Bloom Taxonomy: Apply (L3)
    Learning Objective: Students will apply the assertion workflow to identify and resolve data quality issues

    Visual style: Horizontal flowchart with swimlanes

    Swimlanes:
    1. Data Team (top)
    2. Automated System (middle)
    3. Review Queue (bottom)

    Steps:
    1. Start: "Define Assertion Rule"
       Hover: "Data team specifies business rules in assertion DSL"
       Swimlane: Data Team

    2. Process: "Schedule Check"
       Hover: "Configure timing: on-demand, scheduled, or triggered"
       Swimlane: Automated System

    3. Process: "Execute Against Graph"
       Hover: "System runs assertion query against all applicable nodes"
       Swimlane: Automated System

    4. Decision: "Violations Found?"
       Hover: "Assertion returns list of non-compliant entities"
       Swimlane: Automated System

    5a. Process: "Log Success" (No violations)
        Hover: "Record clean run in audit log"
        Swimlane: Automated System
        Connects to: End

    5b. Process: "Generate Report" (Violations found)
        Hover: "Create detailed report with entity IDs and violation details"
        Swimlane: Automated System

    6. Process: "Create Review Tasks"
       Hover: "Each violation becomes a work item with priority"
       Swimlane: Review Queue

    7. Process: "Fix Data Issues"
       Hover: "Team addresses issues: correct data, merge duplicates, etc."
       Swimlane: Data Team

    8. Process: "Verify Fix"
       Hover: "Re-run assertion on fixed entities to confirm resolution"
       Swimlane: Automated System

    9. End: "Update Metrics"
       Hover: "Track assertion pass rate trend over time"

    Color coding:
    - Blue: Definition/setup steps
    - Yellow: Decision points
    - Green: Success path
    - Orange: Remediation path

    Implementation: Mermaid flowchart or HTML/CSS/JS
</details>

## Quality Scores

Individual metrics are useful, but **quality scores** aggregate multiple measures into composite indicators that provide at-a-glance health status. Just as a credit score summarizes creditworthiness from multiple factors, a graph quality score summarizes data health from multiple metrics.

Building effective quality scores involves:

1. **Selecting relevant metrics**: Not every metric matters equally for your use case
2. **Assigning weights**: Critical dimensions should impact the score more
3. **Normalizing values**: Convert different units to comparable scales
4. **Applying thresholds**: Define what constitutes "good," "acceptable," and "poor"
5. **Computing aggregate**: Usually weighted average, but could be minimum or other function

Example quality score calculation:

```
Overall Quality Score = (
    Completeness × 0.25 +
    Accuracy × 0.30 +
    Freshness × 0.20 +
    Consistency × 0.15 +
    Validity × 0.10
)

With current values:
= (94 × 0.25) + (96 × 0.30) + (91 × 0.20) + (88 × 0.15) + (97 × 0.10)
= 23.5 + 28.8 + 18.2 + 13.2 + 9.7
= 93.4 / 100
```

Quality scores work best when they're:

- **Actionable**: A dropping score should indicate where to focus
- **Stable**: Small fluctuations shouldn't cause alarm
- **Comparable**: Scores across time periods or graph sections should mean the same thing
- **Transparent**: Team members should understand what drives the score

Different stakeholders may need different scores. A technical operations team might care about completeness and freshness, while a compliance team focuses on accuracy and validity. Creating role-specific scores ensures each audience sees relevant information without drowning in irrelevant metrics.

## Quality Dashboards

**Quality dashboards** bring together scores, metrics, assertions, and trends into visual interfaces that make graph health visible to all stakeholders. A well-designed dashboard transforms abstract numbers into actionable insights, highlighting problems before they cascade and celebrating improvements.

Essential dashboard elements include:

- **Score summary cards**: Big numbers showing current quality scores
- **Trend charts**: How have metrics changed over days/weeks/months?
- **Violation alerts**: Recent assertion failures requiring attention
- **Drill-down capability**: Click on any metric to see underlying details
- **Comparison views**: This week vs. last week, this segment vs. that segment

#### Diagram: Interactive Quality Dashboard MicroSim

<details markdown="1">
    <summary>Graph Quality Dashboard Prototype</summary>
    Type: microsim

    Purpose: Demonstrate an interactive quality monitoring dashboard

    Bloom Taxonomy: Evaluate (L5)
    Learning Objective: Students will evaluate graph quality status by interpreting dashboard visualizations and identifying areas requiring intervention

    Canvas layout (1000x700px):
    - Header bar (100% width, 60px): Title and date range selector
    - Score cards row (100% width, 120px): 5 metric summary cards
    - Main area split:
        - Left (60%): Trend chart
        - Right (40%): Violation list

    Visual elements:

    Header:
    - Title: "Graph Quality Dashboard"
    - Date selector: "Last 7 days" dropdown

    Score cards (5 across):
    1. Overall Score: 93.4 (green)
    2. Completeness: 94% (green)
    3. Accuracy: 96% (green)
    4. Freshness: 91% (green)
    5. Consistency: 88% (yellow warning)

    Trend chart:
    - Line chart showing 7-day trend
    - Multiple lines for each metric
    - X-axis: dates
    - Y-axis: percentage
    - Legend for each metric

    Violation list:
    - Scrollable list of recent violations
    - Each item shows: timestamp, assertion name, severity, count
    - Example violations:
        - "Missing email (3 records)" - Medium
        - "Invalid phone format (12 records)" - Low
        - "Duplicate customer (1 record)" - High

    Interactive controls:
    - Dropdown: Time period (7d, 30d, 90d)
    - Checkboxes: Toggle metric visibility on chart
    - Click score card: Filter violations to that category
    - Hover trend line: Show exact values

    Default view:
    - Last 7 days
    - All metrics visible
    - Sorted by severity (high first)

    Behavior:
    - Cards pulse briefly if value changed since last refresh
    - Violations clickable to show affected records
    - Chart supports zoom/pan

    Implementation: p5.js with Chart.js integration for trend chart
</details>

Dashboard design principles to follow:

- **Information hierarchy**: Most important info should be most prominent
- **Appropriate defaults**: Show the most commonly needed view first
- **Progressive disclosure**: Summary first, details on demand
- **Consistent updates**: Refresh frequently enough to be useful, not so often it's distracting
- **Mobile consideration**: Key metrics should be visible on smaller screens

Dashboards aren't just for monitoring—they drive behavior. When quality scores are visible and tied to team goals, data quality becomes everyone's responsibility rather than an afterthought. Public dashboards create accountability and shared ownership.

## Graph Query Language

All the beautiful structure we've discussed would be useless without a way to access it. **Graph Query Languages (GQL)** provide the syntax and semantics for creating, reading, updating, and deleting graph data. While different graph databases have historically used different query languages, the industry is converging toward ISO GQL as a standard.

The most widely-used graph query languages today include:

- **Cypher**: Originally developed by Neo4j, now the basis for ISO GQL
- **Gremlin**: Apache TinkerPop's traversal language
- **SPARQL**: W3C standard for RDF graphs
- **GSQL**: TigerGraph's SQL-like graph language

Regardless of specific syntax, graph queries share common patterns:

**Pattern Matching**: Finding nodes and edges that match a template
```cypher
// Find all students enrolled in CS courses
MATCH (s:Student)-[:ENROLLED_IN]->(c:Course)
WHERE c.department = 'Computer Science'
RETURN s.name, c.title
```

**Path Traversal**: Following relationships across multiple hops
```cypher
// Find friends-of-friends
MATCH (me:Person {name: 'Alice'})-[:KNOWS*2]->(foaf:Person)
RETURN DISTINCT foaf.name
```

**Aggregation**: Summarizing data across matched patterns
```cypher
// Count enrollments per course
MATCH (s:Student)-[:ENROLLED_IN]->(c:Course)
RETURN c.title, count(s) as enrollment_count
ORDER BY enrollment_count DESC
```

**Mutation**: Creating, updating, or deleting data
```cypher
// Create a new enrollment
MATCH (s:Student {id: 'S123'}), (c:Course {code: 'CS101'})
CREATE (s)-[:ENROLLED_IN {semester: 'Spring 2025'}]->(c)
```

!!! tip "Learning Query Languages"
    Start with pattern matching—it's the heart of graph querying. Once you can express "find nodes that look like THIS connected to nodes that look like THAT," the rest follows naturally. Most graph databases provide interactive query builders that help visualize what your patterns match.

#### Diagram: Query Pattern Visualization

<details markdown="1">
    <summary>Interactive Query Pattern Builder</summary>
    Type: microsim

    Purpose: Visualize how query patterns match against graph data

    Bloom Taxonomy: Apply (L3)
    Learning Objective: Students will construct graph query patterns and observe which subgraphs they match

    Canvas layout (900x600px):
    - Left panel (40%): Pattern builder
    - Right panel (60%): Graph visualization with matches highlighted

    Left panel elements:
    - Node selector buttons (add Person, Course, Company)
    - Edge type dropdown (ENROLLED_IN, WORKS_AT, KNOWS)
    - Property filter inputs (key, operator, value)
    - Query display showing constructed pattern
    - "Run Query" button

    Right panel elements:
    - Sample graph with 15-20 nodes
    - Multiple node types (Person, Course, Company)
    - Various relationships between nodes
    - Matching subgraphs highlighted in yellow
    - Non-matching nodes dimmed

    Sample graph data:
    - 8 Person nodes (students and employees)
    - 4 Course nodes
    - 3 Company nodes
    - Mix of ENROLLED_IN, WORKS_AT, KNOWS edges

    Interactive flow:
    1. User clicks node type to add to pattern
    2. User connects nodes with edge type
    3. User optionally adds property filters
    4. Pattern updates in query display area
    5. Click "Run Query" to highlight matches
    6. Count of matches shown

    Example patterns to try:
    - (p:Person) - all persons
    - (p:Person)-[:ENROLLED_IN]->(c:Course) - enrolled students
    - (p:Person)-[:KNOWS]->(:Person)-[:WORKS_AT]->(c:Company) - knows someone at company

    Default state:
    - Empty pattern
    - Full graph visible, nothing highlighted

    Implementation: p5.js with drag-and-drop pattern building
</details>

## Bringing It All Together

Congratulations! You've just completed a whirlwind tour of graph fundamentals—the building blocks that make everything else in graph data modeling possible. Let's recap what you've learned:

- **Nodes** are the things in your data universe, identified by unique IDs and categorized by labels
- **Edges** are the relationships connecting nodes, carrying their own type and properties
- **Properties** add richness to both nodes and edges through key-value attributes
- **Data types** (simple and complex) determine what kinds of values properties can hold
- **Paths** trace routes through connected nodes, enabling powerful traversal queries
- **Dependencies** model prerequisite relationships essential for many real-world scenarios
- **Quality** encompasses the measures, constraints, assertions, and dashboards that keep your graph healthy
- **Query languages** provide the syntax to interact with all of the above

These concepts aren't isolated—they interweave constantly. Your nodes need well-typed properties. Your edges create the paths you'll traverse. Your quality measures validate the constraints you've defined. And your query language brings it all together into useful applications.

As you move forward in this course, every chapter will build on these fundamentals. When we discuss customer modeling, you'll create customer nodes with properties and relationship edges. When we explore temporal modeling, you'll work with datetime properties and time-based paths. When we tackle fraud detection, you'll use path queries to identify suspicious patterns.

??? question "Quick Knowledge Check - What would you model as nodes vs. edges?"
    Consider a library system with books, authors, members, and loans.

    **Answer:**
    - **Nodes:** Book, Author, Member, Library Branch
    - **Edges:** WROTE (Author→Book), BORROWED (Member→Book), LOCATED_AT (Book→Branch)
    - **Properties on nodes:** book.title, author.name, member.join_date
    - **Properties on edges:** borrowed.date, borrowed.due_date, wrote.contribution_role

    Notice how the BORROWED edge carries temporal properties that are specific to that relationship instance, not to the book or member themselves.

## References

For deeper exploration of graph fundamentals, consider these resources:

1. **Graph Databases** by Ian Robinson, Jim Webber, and Emil Eifrem - The classic introduction to graph database concepts
2. **ISO/IEC 39075:2024** - The official GQL standard specification
3. **Neo4j Graph Academy** - Free interactive courses on Cypher and graph modeling
4. **The Practitioner's Guide to Graph Data** by Denise Gosnell and Matthias Broecheler - Applied graph modeling patterns

## Summary

This chapter established the foundational vocabulary and concepts for graph data modeling. We explored nodes as entities, edges as relationships, and properties as attributes. We distinguished between simple atomic data types and complex structured types. We traced paths through connected nodes and examined dependency relationships.

On the quality front, we learned that good graphs don't happen by accident—they require deliberate measurement, constraints, assertions, and monitoring. Quality dashboards make graph health visible and actionable.

Finally, we introduced graph query languages as the tool for interacting with all these structures, setting the stage for the hands-on modeling work in chapters to come.

The fundamentals you've learned here will serve you throughout this course and your career in data modeling. Whether you're building a social network, a fraud detection system, or a knowledge graph for AI applications, you'll always come back to nodes, edges, properties, and paths.

Now let's put these concepts to work!
