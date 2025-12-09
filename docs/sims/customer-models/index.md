# Customer Entity Types

This interactive visualization demonstrates the different types of entities that can represent "customers" in a graph data model and the relationships between them.

## About This MicroSim

<iframe src="./main.html" width="100%" height="600px" scrolling="no"></iframe>

In graph data modeling for business applications, the concept of a "customer" isn't always straightforward. Depending on your business context, a customer might be:

- **An Individual** - A single person (B2C scenarios)
- **A Household** - A family or group sharing an address (utilities, streaming services)
- **A Corporate Entity** - A business (B2B scenarios)
- **An Organization** - A non-profit, government agency, or institution

Understanding these entity types and their relationships is fundamental to designing effective customer data models.


## Learning Objectives

By interacting with this visualization, students will be able to:

1. **Identify** the four main customer entity types used in graph data models
2. **Distinguish** between different entity types based on their properties and business context
3. **Explain** the relationships that connect these entities (MEMBER_OF, EMPLOYED_BY, etc.)
4. **Recognize** when to use each entity type in real-world modeling scenarios

## How to Use

1. **Click on any node** to see detailed information about that entity type, including:
   - Typical properties stored on that node type
   - Business contexts where this entity type is commonly used

2. **Observe the relationships** (edges) between nodes:
   - Solid lines indicate direct relationships
   - Dashed lines indicate hierarchical or partnership relationships
   - Arrow directions show the relationship direction

3. **Notice the visual encoding**:
   - **Circles** = Individual (most granular)
   - **Rounded rectangles** = Household (family aggregation)
   - **Sharp rectangles** = Corporate (business entity)
   - **Hexagons** = Organization (institutional entity)

## Entity Types Explained

### Individual (Blue Circle)
The most granular customer type - a single person. Properties typically include personal identifiers (name, email, DOB), contact information, and loyalty/membership data.

**Use in:** Retail, subscriptions, personal services, any B2C application.

### Household (Green Rectangle)
A group of individuals sharing a residence. Useful for modeling shared accounts, family plans, and address-based services.

**Use in:** Utilities, insurance, streaming services, grocery delivery, telecommunications.

### Corporate (Orange Rectangle)
A business entity that purchases products or services. May have complex hierarchies (parent/subsidiary relationships).

**Use in:** B2B sales, enterprise software, wholesale distribution, business services.

### Organization (Purple Hexagon)
Non-profit, government, or institutional entities with unique compliance requirements and purchasing processes.

**Use in:** Government contracts, educational institutions, healthcare, NGOs.

## Relationship Types

| Relationship | From | To | Description |
|-------------|------|-----|-------------|
| `MEMBER_OF` | Individual | Household | Person belongs to a family unit |
| `EMPLOYED_BY` | Individual | Corporate | Person works for a company |
| `AFFILIATED_WITH` | Individual | Organization | Person connected to an institution |
| `SUBSIDIARY_OF` | Corporate | Corporate | Company owned by parent company |
| `PARTNERED_WITH` | Organization | Organization | Institutions collaborate |

## Key Modeling Insights

1. **Start with Individuals** - They're the most granular and can always be aggregated up
2. **Model the relationships** - The connections between entities often hold more value than the entities themselves
3. **Consider traversal patterns** - How will you query this data? Design relationships accordingly
4. **Handle multiple roles** - One individual might be both a household member AND an employee

## Source Code

- [main.html](./main.html) - HTML structure
- [style.css](./style.css) - Styling
- [customer-models.js](./customer-models.js) - vis-network implementation
