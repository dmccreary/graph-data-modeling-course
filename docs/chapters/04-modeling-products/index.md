---
title: Modeling Products
description: Learn how to model products in graph databases including taxonomies, embeddings, reviews, and fraud detection
generated_by: claude skill chapter-content-generator
date: 2025-12-09 14:30:00
version: 0.03
---

# Modeling Products

## Summary

This chapter covers how to model products in a graph database, including product taxonomies, groupings, classifications, product reviews and product review fraud
detection. We explore how to use embeddings and vector stores for product similarity and recommendation systems.
We will also explore how product reviews and customer sentiment are critical
in modeling products and recommending products.  We also take
a look at how product reviews can negatively impact sales and how
graph databases can be used to detect fake and fraudulent product reviews.

## Concepts Covered

1. Product Lists
2. Product Groupings
3. Product Taxonomies
4. Multiple Taxonomies
5. Classification Tools
6. Product Similarity
7. Product Embeddings
8. Product Metadata
9. Product Reviews
10. Review Sentiment
11. Fake Reviews
12. Review Fraud Detection

## Learning Objectives

By the end of this chapter, students will be able to:

- Design product nodes with appropriate properties and metadata
- Create hierarchical product taxonomies using graph relationships
- Implement multiple overlapping classification systems
- Use embeddings to calculate product similarity
- Model customer generated product reviews
- Model customer review credibility
- Build recommendation systems based on product relationships

---

## Introduction: Why Products Are the Heart of E-Commerce Graphs

Imagine you're browsing Amazon, looking for a new laptop. Within seconds, the site shows you not just laptops, but also laptop bags, wireless mice, USB-C hubs, and that ergonomic keyboard you didn't know you needed. How does Amazon know? The answer lies in one of the most sophisticated product graphs ever built—a network containing **over 100 billion nodes** that models every product, category, review, and relationship in their ecosystem.

Here's a number that should make you sit up straight: **35% of Amazon's revenue comes from or is influenced by their recommendation engine**. In 2021, Amazon's annual revenue hit approximately $469.8 billion. Do the math, and you'll find that their product graph drives somewhere between **$150 to $170 billion in sales annually**. That's not a typo—world-class product modeling isn't just a nice academic exercise; it's worth more than the GDP of many countries.

The good news? The same techniques that power Amazon's recommendation engine are accessible to you. By the end of this chapter, you'll understand how to model products, create taxonomies, calculate similarity, handle reviews, and even detect when someone's trying to game the system with fake reviews.

Let's dive in!

## Product Lists: The Foundation of Product Modeling

Before we can build sophisticated product graphs, we need to understand the humble **product list**—the starting point for any product data model. A product list is simply a collection of product nodes, each representing a distinct item available for sale or consideration.

### What Makes a Product Node?

Every product in your graph needs a node. But what properties should that node have? Here's a typical structure:

| Property | Type | Description | Example |
|----------|------|-------------|---------|
| product_id | String | Unique identifier | "PROD-123456" |
| name | String | Product display name | "Wireless Gaming Mouse" |
| description | Text | Detailed product info | "Ergonomic design with..." |
| price | Decimal | Current selling price | 49.99 |
| sku | String | Stock keeping unit | "WGM-BLK-001" |
| upc | String | Universal product code | "012345678901" |
| brand | String | Manufacturer brand | "TechPro" |
| weight | Decimal | Shipping weight (kg) | 0.15 |
| created_date | DateTime | When added to catalog | 2024-01-15 |

!!! tip "Pro Tip: SKU vs UPC"
    **SKU (Stock Keeping Unit)** is internal to your organization—you define it. **UPC (Universal Product Code)** is the barcode standard used across retailers. A single product might have different SKUs at Walmart vs Target, but the UPC stays the same. Graph databases excel at linking these identifiers together!

### Creating Your First Product Nodes

When building a product list, start simple. Create nodes for each product and establish the basic properties. As your graph matures, you'll add relationships to connect products to categories, reviews, and other products.

Here's a conceptual view of what your initial product nodes might look like:

- **Node Label:** `Product`
- **Required Properties:** product_id, name, price
- **Optional Properties:** description, brand, weight, dimensions

The beauty of graph databases is their schema flexibility—you can add new properties anytime without restructuring your entire database. Got a new product category that needs a "battery_life" property? Just add it to those nodes. No migrations required.

#### Diagram: Basic Product Node Structure

<details markdown="1">
<summary>Basic Product Node Structure</summary>
Type: graph-model

Purpose: Illustrate the basic structure of a Product node with its essential properties and initial relationships

Bloom Taxonomy: Remember (L1)

Learning Objective: Students will be able to recall the essential properties that define a product node in a graph database

Node types:
1. Product (green rounded rectangle)
   - Properties shown: product_id, name, price, sku, brand
   - Example: "Wireless Gaming Mouse"

2. Property Box (light blue rectangles)
   - Individual boxes for each property
   - Connected to product node with thin lines

Visual layout:
- Central Product node with property boxes radiating outward
- Properties grouped logically (identifiers on left, descriptive on right, numeric on bottom)

Color scheme:
- Product node: Forest green (#228B22)
- Property boxes: Light sky blue (#87CEEB)
- Connecting lines: Gray (#808080)

Implementation: vis-network with hierarchical layout
Canvas size: 600x400px
</details>

## Product Groupings: Organizing Products into Collections

Once you have individual products, the next logical step is grouping them. **Product groupings** allow you to organize products into collections that make sense for browsing, marketing, and analysis.

### Types of Product Groupings

Product groupings come in several flavors:

1. **Brand Collections** - All products from a single manufacturer
2. **Seasonal Collections** - Holiday specials, summer items, back-to-school
3. **Price Tiers** - Budget, mid-range, premium
4. **Bundle Groups** - Products frequently purchased together
5. **Promotional Groups** - Flash sales, clearance, featured items

### Modeling Groupings as Nodes vs Properties

Here's where graph modeling gets interesting. You have two choices for representing groupings:

**Option A: Grouping as a Node**
```
(Product)-[:BELONGS_TO]->(ProductGroup)
```

**Option B: Grouping as a Property**
```
(Product {group: "Summer Collection"})
```

Which should you choose? Consider this comparison:

| Consideration | Node Approach | Property Approach |
|--------------|---------------|-------------------|
| Multiple groups per product | ✅ Easy | ❌ Requires arrays |
| Group metadata (dates, manager) | ✅ Yes | ❌ No |
| Query performance | Slightly slower | Faster for simple queries |
| Flexibility | Very high | Limited |
| Best for | Complex grouping hierarchies | Simple, static groups |

For most e-commerce applications, the node approach wins because products typically belong to multiple overlapping groups, and those groups have their own properties (like start/end dates for promotions).

#### Diagram: Product Grouping Relationships

<details markdown="1">
<summary>Product Grouping Relationships</summary>
Type: graph-model

Purpose: Demonstrate how products connect to multiple grouping nodes simultaneously

Bloom Taxonomy: Understand (L2)

Learning Objective: Students will be able to explain how product groupings work as nodes and how a single product can belong to multiple groups

Node types:
1. Product (green circles)
   - 4 sample products: "Laptop", "Laptop Bag", "USB Mouse", "Webcam"

2. ProductGroup (orange rounded rectangles)
   - "Electronics" (brand collection)
   - "Work From Home Bundle" (bundle group)
   - "Back to School" (seasonal)
   - "Premium Tech" (price tier)

Edge types:
- BELONGS_TO (solid blue arrows from products to groups)
- Products connect to multiple groups showing overlap

Sample data showing one product (Laptop) belonging to:
- Electronics
- Work From Home Bundle
- Back to School
- Premium Tech

Layout: Bipartite-style with products on left, groups on right

Interactive features:
- Hover over product: highlight all its groups
- Hover over group: highlight all products in that group

Color scheme:
- Products: Green (#32CD32)
- Groups: Orange (#FFA500)
- Edges: Blue (#4169E1)

Implementation: vis-network with physics enabled
Canvas size: 700x500px
</details>

## Product Taxonomies: Building Hierarchical Classification Systems

Now we're getting to the really powerful stuff. A **product taxonomy** is a hierarchical classification system that organizes products into categories and subcategories. Think of it as a family tree for your products.

### The Power of Hierarchical Classification

Taxonomies enable:

- **Navigation**: Customers can browse from "Electronics" → "Computers" → "Laptops" → "Gaming Laptops"
- **Inheritance**: Properties defined at higher levels cascade down
- **Aggregation**: "How many products do we have in Electronics?" becomes a simple graph query
- **Recommendations**: "You're looking at Gaming Laptops? Here are Gaming Keyboards from the sibling category"

### Modeling Taxonomies with Graph Relationships

The most natural way to model a taxonomy is with `PARENT_OF` or `CHILD_OF` relationships:

```
(Electronics)-[:PARENT_OF]->(Computers)
(Computers)-[:PARENT_OF]->(Laptops)
(Laptops)-[:PARENT_OF]->(Gaming Laptops)
(Gaming Laptop XYZ)-[:IN_CATEGORY]->(Gaming Laptops)
```

This creates a tree structure that's incredibly efficient to traverse. Want all products in "Electronics"? Start at the Electronics node and traverse down through all descendants.

### Taxonomy Depth Considerations

How deep should your taxonomy go? Here's a guideline:

| Depth Level | Example | Use Case |
|-------------|---------|----------|
| Level 1 | Electronics | Broad navigation |
| Level 2 | Computers | Department pages |
| Level 3 | Laptops | Category pages |
| Level 4 | Gaming Laptops | Subcategory pages |
| Level 5 | 15-inch Gaming Laptops | Filter results |
| Level 6+ | Specific specs | Usually too deep |

!!! warning "Taxonomy Depth Trade-off"
    Deeper taxonomies provide more precise classification but require more maintenance and can confuse customers with too many choices. Most successful e-commerce sites stay between 3-5 levels deep.

#### Diagram: Product Taxonomy Tree

<details markdown="1">
<summary>Product Taxonomy Tree Structure</summary>
Type: graph-model

Purpose: Visualize a hierarchical product taxonomy showing the tree structure from broad categories to specific products

Bloom Taxonomy: Understand (L2)

Learning Objective: Students will be able to explain how hierarchical taxonomies organize products from general categories to specific items

Node types:
1. Category (gold rectangles)
   - Root: "All Products"
   - Level 1: "Electronics", "Clothing", "Home & Garden"
   - Level 2 (under Electronics): "Computers", "Audio", "Mobile"
   - Level 3 (under Computers): "Laptops", "Desktops", "Tablets"
   - Level 4 (under Laptops): "Gaming Laptops", "Business Laptops", "Ultrabooks"

2. Product (green circles at leaf positions)
   - 2-3 products under "Gaming Laptops"

Edge types:
- PARENT_OF (solid arrows pointing downward)
- IN_CATEGORY (dashed arrows from products to leaf categories)

Layout: Hierarchical tree with root at top

Visual styling:
- Category nodes increase in size at higher levels
- Edge labels show relationship type
- Depth levels distinguished by node color intensity

Color scheme:
- Categories: Gold gradient (darker at top, lighter at bottom)
- Products: Green (#32CD32)
- PARENT_OF edges: Black
- IN_CATEGORY edges: Blue dashed

Interactive features:
- Click category: expand/collapse children
- Hover: show count of descendant products

Implementation: vis-network with hierarchical layout, direction: UD (up-down)
Canvas size: 800x600px
</details>

## Multiple Taxonomies: When One Classification Isn't Enough

Here's where things get really interesting. In the real world, products don't fit neatly into a single hierarchy. A laptop might be classified by:

- **Product Type**: Electronics → Computers → Laptops
- **Brand**: Dell → XPS Series
- **Use Case**: Gaming → High-Performance
- **Price Point**: Premium ($1000+)
- **Customer Segment**: Students, Professionals, Gamers

Welcome to the world of **multiple taxonomies** (also called faceted classification).

### Why Multiple Taxonomies Matter

Consider a customer searching for a laptop:

- Customer A browses by brand (they're loyal to Apple)
- Customer B browses by price (budget is tight)
- Customer C browses by use case (needs it for video editing)

With multiple taxonomies, all three customers find what they need through different paths—and your recommendation engine understands that these paths converge on similar products.

### Implementing Multiple Taxonomies

The graph approach handles this elegantly. Create separate taxonomy trees for each classification scheme:

```
// Product Type Taxonomy
(ProductType:Root)-[:PARENT_OF]->(Electronics)-[:PARENT_OF]->(Laptops)

// Brand Taxonomy
(Brand:Root)-[:PARENT_OF]->(Dell)-[:PARENT_OF]->(XPS)

// Use Case Taxonomy
(UseCase:Root)-[:PARENT_OF]->(Gaming)-[:PARENT_OF]->(HighPerformance)

// Product connects to all relevant leaf nodes
(Dell XPS 15)-[:IN_CATEGORY]->(Laptops)
(Dell XPS 15)-[:IN_BRAND]->(XPS)
(Dell XPS 15)-[:FOR_USE_CASE]->(HighPerformance)
```

#### Diagram: Multiple Overlapping Taxonomies

<details markdown="1">
<summary>Multiple Overlapping Taxonomies</summary>
Type: graph-model

Purpose: Demonstrate how a single product can be classified in multiple independent taxonomy hierarchies simultaneously

Bloom Taxonomy: Analyze (L4)

Learning Objective: Students will be able to analyze how multiple classification systems can coexist and intersect at the product level

Node types:
1. Taxonomy Root (diamond shapes, different colors for each taxonomy)
   - "Product Type" (blue)
   - "Brand" (orange)
   - "Use Case" (purple)
   - "Price Tier" (green)

2. Category Nodes (circles, colored by taxonomy)
   - Product Type branch: Electronics → Computers → Laptops
   - Brand branch: Dell → XPS Series
   - Use Case branch: Creative Work → Video Editing
   - Price Tier branch: Premium → $1500+

3. Product Node (large central star shape)
   - "Dell XPS 15 Pro"

Edge types:
- PARENT_OF (within each taxonomy tree)
- IN_CATEGORY, IN_BRAND, FOR_USE_CASE, IN_PRICE_TIER (from product to leaf nodes)

Layout: Product in center with four taxonomy trees radiating outward in quadrants

Visual styling:
- Each taxonomy uses consistent color
- Edges from product to categories use respective taxonomy colors
- Product node is emphasized with larger size and distinct shape

Interactive features:
- Toggle individual taxonomies on/off
- Click product to highlight all its classifications
- Hover taxonomy root to highlight entire tree

Color scheme:
- Product Type: Blue (#4169E1)
- Brand: Orange (#FF8C00)
- Use Case: Purple (#9370DB)
- Price Tier: Green (#228B22)
- Product: Gold (#FFD700)

Implementation: vis-network with custom positioning
Canvas size: 800x700px
</details>

## Classification Tools: AI-Powered Product Categorization

Manually classifying thousands of products is tedious and error-prone. Enter **classification tools**—software that automatically assigns products to taxonomy categories.

### Traditional Rule-Based Classification

The simplest approach uses rules:

```
IF product.name CONTAINS "laptop"
   AND product.weight < 3kg
   THEN classify as "Laptops"

IF product.brand = "Apple"
   AND product.name CONTAINS "MacBook"
   THEN classify as "Apple/MacBook"
```

Rules work well for clear-cut cases but struggle with:

- New products that don't match existing patterns
- Ambiguous products (is a tablet with a keyboard a laptop?)
- Products described inconsistently

### Machine Learning Classification

Modern classification tools use ML models trained on existing product catalogs:

1. **Text Classification**: Analyze product names and descriptions
2. **Image Classification**: Analyze product photos
3. **Feature-Based Classification**: Use structured attributes (weight, dimensions, price)

The best systems combine all three approaches.

### Graph-Enhanced Classification

Here's where graph databases shine. By analyzing the structure of your existing product graph, you can improve classification accuracy:

- **Neighbor Analysis**: "Similar products are in this category, so this new product probably belongs there too"
- **Path Analysis**: "Products that share these attributes typically follow this taxonomy path"
- **Co-purchase Analysis**: "Products frequently bought together often share categories"

#### Diagram: AI Classification Pipeline

<details markdown="1">
<summary>AI Classification Pipeline</summary>
Type: workflow

Purpose: Illustrate the process of automatically classifying new products using AI and graph analysis

Bloom Taxonomy: Apply (L3)

Learning Objective: Students will be able to apply understanding of classification tools to describe how new products get automatically categorized

Visual style: Flowchart with rounded rectangles for processes and diamonds for decisions

Steps:
1. Start: "New Product Added"
   Hover text: "Product enters system with name, description, images, and attributes"

2. Process: "Text Analysis"
   Hover text: "NLP model analyzes product name and description for category signals"

3. Process: "Image Analysis"
   Hover text: "Computer vision model identifies product type from images"

4. Process: "Attribute Matching"
   Hover text: "Compare structured attributes (weight, size, price) with category norms"

5. Process: "Graph Neighbor Analysis"
   Hover text: "Find similar products in graph and check their categories"

6. Process: "Confidence Scoring"
   Hover text: "Combine all signals into category predictions with confidence scores"

7. Decision: "Confidence > 90%?"
   Hover text: "Check if AI is confident enough for auto-classification"

8a. Process: "Auto-Classify" (if yes)
    Hover text: "Automatically assign to predicted categories"

8b. Process: "Human Review Queue" (if no)
    Hover text: "Route to human reviewer for manual classification"

9. Process: "Update Product Graph"
   Hover text: "Add classification relationships to product node"

10. End: "Product Classified"
    Hover text: "Product is now searchable and navigable via taxonomy"

Color coding:
- AI processes: Blue
- Decision points: Yellow
- Human intervention: Orange
- Graph operations: Green

Swimlanes:
- AI System
- Graph Database
- Human Reviewer (for low-confidence cases)

Implementation: Mermaid flowchart or custom SVG
</details>

## Product Similarity: Finding Products That Go Together

"Customers who bought this also bought..." You've seen this recommendation hundreds of times. Behind it lies the concept of **product similarity**—determining how "alike" two products are.

### Types of Similarity

There are several ways to measure product similarity:

1. **Attribute Similarity**: Products share the same brand, category, or specifications
2. **Co-purchase Similarity**: Products are frequently bought together
3. **Co-view Similarity**: Products are frequently viewed in the same session
4. **Description Similarity**: Product descriptions use similar language
5. **Visual Similarity**: Products look alike in images

| Similarity Type | Best For | Graph Representation |
|----------------|----------|---------------------|
| Attribute | "More like this" | Shared category nodes |
| Co-purchase | "Frequently bought together" | Weighted PURCHASED_WITH edges |
| Co-view | "Others also viewed" | Weighted VIEWED_WITH edges |
| Description | "Similar items" | Embedding similarity |
| Visual | Fashion, furniture | Image embedding similarity |

### Calculating Similarity Scores

In a graph database, similarity can be calculated using:

**Path-based similarity**: How many hops apart are two products through shared categories?
```
(Product A)-[:IN_CATEGORY]->(Gaming Laptops)<-[:IN_CATEGORY]-(Product B)
// Distance = 2 hops = High similarity
```

**Jaccard Similarity**: What fraction of properties do two products share?
```
shared_categories / total_categories = similarity_score
```

**Weighted Co-occurrence**: How often are products interacted with together?
```
purchases_together / (purchases_A + purchases_B - purchases_together)
```

#### Diagram: Product Similarity MicroSim

<details markdown="1">
<summary>Product Similarity Explorer MicroSim</summary>
Type: microsim

Purpose: Allow students to explore how different similarity metrics produce different product recommendations

Bloom Taxonomy: Analyze (L4)

Learning Objective: Students will be able to analyze how different similarity metrics (attribute, co-purchase, co-view) produce different results for the same product

Canvas layout (800x600px):
- Left side (500x600): Product graph visualization
- Right side (300x600): Control panel and results

Visual elements:
- Central "selected product" node (large, gold)
- Surrounding product nodes (smaller, colored by similarity score)
- Edges showing relationships (different colors for different relationship types)
- Similarity scores displayed as node labels
- Heat map coloring (red = high similarity, blue = low similarity)

Interactive controls:
- Dropdown: Select a product as the "source"
- Radio buttons: Choose similarity metric
  - Attribute-based
  - Co-purchase
  - Co-view
  - Combined
- Slider: Number of similar products to show (5-20)
- Slider: Minimum similarity threshold (0.0-1.0)
- Checkbox: Show relationship edges
- Button: "Calculate Similarity"

Default parameters:
- Source product: First product in list
- Metric: Combined
- Show top: 10 products
- Threshold: 0.3
- Show edges: true

Behavior:
- When metric changes, recalculate and animate nodes moving to new positions
- Products fade in/out based on threshold
- Edge thickness indicates relationship strength
- Hover over product shows detailed similarity breakdown
- Click product to make it the new source

Sample data:
- 20 products across 3 categories (Electronics, Home, Sports)
- Pre-calculated similarity matrices for each metric
- Co-purchase data from simulated transactions

Implementation notes:
- Use p5.js for rendering
- Store similarity matrices as 2D arrays
- Use spring physics for natural node positioning
- Animate transitions with easing functions
</details>

## Product Embeddings: Vectors for Semantic Similarity

Here's where graph modeling meets modern AI. **Product embeddings** are vector representations of products that capture their semantic meaning in a high-dimensional space.

### What Are Embeddings?

An embedding is a list of numbers (typically 128-1024 values) that represents a product. Products with similar embeddings are semantically similar, even if they don't share explicit attributes.

```
"Sony WH-1000XM5 Headphones" → [0.23, -0.45, 0.87, ..., 0.12]
"Bose QuietComfort Ultra"    → [0.21, -0.47, 0.85, ..., 0.15]
// Very similar vectors = very similar products!

"Garden Hose"                → [-0.56, 0.34, -0.12, ..., 0.78]
// Very different vector = very different product
```

### Generating Product Embeddings

Embeddings can be generated from:

1. **Text Embeddings**: Run product descriptions through models like BERT, sentence-transformers, or OpenAI's embedding API
2. **Image Embeddings**: Run product images through CNN models like ResNet or CLIP
3. **Graph Embeddings**: Use Node2Vec or GraphSAGE to learn embeddings from the product graph structure
4. **Hybrid Embeddings**: Combine multiple sources for richer representations

### Storing Embeddings in Graph Databases

Modern graph databases support vector storage and similarity search:

```
// Store embedding as property
CREATE (p:Product {
  name: "Wireless Headphones",
  embedding: [0.23, -0.45, 0.87, ...]
})

// Find similar products using cosine similarity
MATCH (p:Product {name: "Wireless Headphones"})
CALL db.index.vector.queryNodes('product_embeddings', 10, p.embedding)
YIELD node, score
RETURN node.name, score
```

### The Power of Semantic Search

With embeddings, you can find products that are conceptually similar even without shared categories:

- Query: "something to listen to music while running"
- Results: Wireless earbuds, sport headphones, armband phone holders
- Why: The embedding model understands the semantic intent!

#### Diagram: Embedding Space Visualization

<details markdown="1">
<summary>Product Embedding Space Visualization</summary>
Type: chart

Purpose: Show how products cluster in embedding space based on semantic similarity

Bloom Taxonomy: Understand (L2)

Learning Objective: Students will be able to explain how embeddings map products into vector space where distance corresponds to semantic similarity

Chart type: 2D scatter plot (showing PCA/t-SNE reduced embeddings)

Data:
- 50 products from 5 categories
- Each point represents a product
- Position = 2D projection of embedding vector
- Color = product category
- Size = price (larger = more expensive)

Categories and colors:
- Headphones/Audio: Blue
- Laptops: Green
- Smartphones: Orange
- Smart Home: Purple
- Accessories: Gray

Key features to show:
- Clear clustering by category
- Some overlap between related categories (audio accessories near headphones)
- Outliers that don't fit neatly (hybrid products)

Annotations:
- Circles drawn around major clusters with labels
- Arrow showing "semantic distance" between two products
- Example of cross-category similarity (laptop bag near laptops)

Interactive features:
- Hover to see product name and details
- Click to highlight all products in same category
- Zoom and pan to explore clusters
- Toggle category visibility

Implementation: Plotly.js or Chart.js with scatter plot
Canvas size: 700x600px
</details>

## Product Metadata: Enriching Your Product Graph

**Product metadata** encompasses all the additional information that enriches your product nodes beyond basic attributes. Good metadata transforms a simple product listing into a powerful, queryable knowledge asset.

### Types of Product Metadata

- **Technical Specifications**: Dimensions, weight, materials, compatibility
- **Media Assets**: Image URLs, video links, 360° views, AR models
- **Compliance Data**: Certifications, safety ratings, country of origin
- **Inventory Data**: Stock levels, warehouse locations, restock dates
- **Marketing Data**: Keywords, search tags, promotional flags
- **Analytics Data**: View counts, conversion rates, return rates

### Metadata as Properties vs Separate Nodes

When should metadata be a property on the Product node vs a separate connected node?

| Store as Property | Store as Separate Node |
|-------------------|----------------------|
| Single values (weight, price) | Shared values (brand, manufacturer) |
| Product-specific data | Reusable across products |
| Rarely queried independently | Frequently filtered/aggregated |
| Simple types (string, number) | Complex structures with own attributes |

**Example**: Brand should be a node because thousands of products share the same brand, and you might want to store brand metadata (logo, description, country).

```
// Brand as separate node
(Product)-[:MADE_BY]->(Brand {name: "Apple", country: "USA", logo_url: "..."})

// vs Brand as property (less flexible)
(Product {brand: "Apple"})
```

### Building Rich Product Profiles

A well-modeled product in a graph might have connections to:

- Categories (multiple taxonomies)
- Brand/Manufacturer
- Suppliers
- Reviews
- Customers who purchased
- Related/similar products
- Price history
- Inventory locations

This network of relationships is what makes graph databases so powerful for e-commerce—you can traverse any path to answer complex questions.

## Product Reviews: The Voice of the Customer

We've modeled products beautifully, but we're missing something crucial: what do customers actually think? **Product reviews** add a critical dimension to your product graph.

### Modeling Reviews as Nodes

Reviews deserve their own nodes because they have:

- Their own properties (text, rating, date, helpful votes)
- Relationships to both products AND customers
- Potential for sentiment analysis and NLP

```
(Customer)-[:WROTE]->(Review)-[:REVIEWS]->(Product)
```

This structure enables powerful queries:

- "Find all 5-star reviews for this product"
- "Find customers who frequently write detailed reviews"
- "Find products with reviews mentioning 'battery life'"

### Review Properties

| Property | Type | Description |
|----------|------|-------------|
| review_id | String | Unique identifier |
| rating | Integer | Star rating (1-5) |
| title | String | Review headline |
| body | Text | Full review text |
| date | DateTime | When review was posted |
| helpful_votes | Integer | Upvotes from other customers |
| verified_purchase | Boolean | Customer actually bought it |
| images | Array | Customer-uploaded photos |

### The Customer-Review-Product Triangle

This three-way relationship unlocks insights:

- **For Products**: Aggregate ratings, identify common complaints
- **For Customers**: Understand preferences, build trust profiles
- **For Reviews**: Validate authenticity, surface helpful content

#### Diagram: Review Relationship Model

<details markdown="1">
<summary>Customer-Review-Product Relationship Model</summary>
Type: graph-model

Purpose: Illustrate the three-way relationship between customers, reviews, and products

Bloom Taxonomy: Understand (L2)

Learning Objective: Students will be able to explain how reviews connect customers and products and what properties each node type contains

Node types:
1. Customer (blue circles)
   - Properties: customer_id, name, member_since, review_count
   - 3 sample customers

2. Review (yellow stars)
   - Properties: rating, title, date, helpful_votes, verified_purchase
   - 5 sample reviews (mix of ratings)

3. Product (green rectangles)
   - Properties: name, average_rating, review_count
   - 2 sample products

Edge types:
1. WROTE (customer to review)
   - Solid blue arrow
   - Properties: none

2. REVIEWS (review to product)
   - Solid green arrow
   - Properties: none

3. PURCHASED (customer to product)
   - Dashed orange arrow
   - Properties: purchase_date, order_id

Sample data showing:
- One customer with 3 reviews across 2 products
- One product with reviews from multiple customers
- Mix of verified and unverified purchases

Layout: Three rows - customers top, reviews middle, products bottom

Visual styling:
- Review node size varies with rating (5-star = largest)
- Review color intensity varies with helpful_votes
- Verified purchase edge shown differently than unverified

Interactive features:
- Click customer: highlight all their reviews
- Click product: highlight all its reviews
- Click review: show full details panel

Color scheme:
- Customers: Blue (#4169E1)
- Reviews: Yellow (#FFD700) with rating-based intensity
- Products: Green (#228B22)
- WROTE edges: Blue
- REVIEWS edges: Green
- PURCHASED edges: Orange dashed

Implementation: vis-network
Canvas size: 700x500px
</details>

## Review Sentiment: Understanding What Customers Feel

A 4-star rating tells you something, but what exactly? **Sentiment analysis** digs deeper into review text to understand customer emotions and opinions.

### Beyond Star Ratings

Consider these two 3-star reviews:

> "The product works great for basic tasks, but I expected more features at this price point."

> "Arrived damaged but customer service sent a replacement immediately. Product itself is excellent."

Both are 3 stars, but the sentiment is quite different! The first suggests a mismatch between expectations and value. The second describes a great product with a shipping problem.

### Aspect-Based Sentiment

Modern sentiment analysis identifies sentiment for specific **aspects** of a product:

| Aspect | Sentiment | Confidence |
|--------|-----------|------------|
| Build Quality | Positive | 0.92 |
| Battery Life | Negative | 0.87 |
| Price/Value | Neutral | 0.65 |
| Customer Service | Positive | 0.94 |

### Storing Sentiment in Your Graph

You can store sentiment analysis results as:

1. **Review Properties**: Add sentiment_score, detected_aspects to Review nodes
2. **Separate Sentiment Nodes**: For complex multi-aspect analysis
3. **Product Aggregate Properties**: average_sentiment, top_complaints

```
(Review {
  rating: 4,
  body: "Great headphones but battery dies fast...",
  overall_sentiment: 0.6,
  aspects: ["sound_quality:positive", "battery:negative"]
})
```

### Using Sentiment for Recommendations

Sentiment data supercharges recommendations:

- "Show me products with positive battery life sentiment"
- "Find alternatives to products where customers complain about durability"
- "Recommend products where verified purchasers express satisfaction"

#### Diagram: Sentiment Analysis Dashboard

<details markdown="1">
<summary>Review Sentiment Analysis Dashboard</summary>
Type: infographic

Purpose: Visualize aggregated sentiment analysis results for a product's reviews

Bloom Taxonomy: Analyze (L4)

Learning Objective: Students will be able to analyze sentiment patterns across multiple product reviews to identify strengths and weaknesses

Layout: Dashboard with multiple components

Components:
1. Overall Sentiment Gauge (top left)
   - Semicircle gauge showing overall sentiment score (0-100)
   - Color gradient from red (negative) through yellow (neutral) to green (positive)
   - Current value highlighted with needle

2. Star Rating Distribution (top right)
   - Horizontal bar chart showing count of 1-5 star reviews
   - Bars colored by sentiment: even 4-star reviews can have negative sentiment

3. Aspect Sentiment Chart (middle)
   - Horizontal diverging bar chart
   - Aspects listed: Sound Quality, Comfort, Battery Life, Build Quality, Value
   - Bars extend left (negative) or right (positive)
   - Bar length indicates number of mentions
   - Bar color indicates sentiment strength

4. Sentiment Over Time (bottom left)
   - Line chart showing average sentiment by month
   - Useful for tracking if product quality changed

5. Word Cloud (bottom right)
   - Most common words from positive reviews in green
   - Most common words from negative reviews in red
   - Size indicates frequency

Interactive features:
- Click aspect bar to see example reviews mentioning that aspect
- Hover over timeline to see specific month's sentiment breakdown
- Click word in cloud to filter to reviews containing it

Sample data for "Wireless Gaming Headset":
- Overall sentiment: 72/100
- 450 total reviews
- Top positive aspects: Sound Quality, Comfort
- Top negative aspects: Battery Life, Microphone Quality

Color scheme:
- Positive: Green gradient (#228B22 to #90EE90)
- Negative: Red gradient (#DC143C to #FFA07A)
- Neutral: Yellow (#FFD700)
- Background: Light gray (#F5F5F5)

Implementation: Chart.js or D3.js for charts, HTML/CSS for layout
Canvas size: 900x700px
</details>

## Fake Reviews: The Dark Side of Social Proof

Here's an uncomfortable truth: **fake reviews are everywhere**. Studies suggest that 30-40% of online reviews may be fake or manipulated. For graph database practitioners, this presents both a challenge and an opportunity.

### Types of Fake Reviews

1. **Purchased Reviews**: Sellers pay for positive reviews
2. **Competitor Attacks**: Negative reviews to harm rival products
3. **Review Rings**: Networks of accounts that review each other's products
4. **Incentivized Reviews**: "Free product in exchange for review"
5. **Bot-Generated Reviews**: Automated posting of generic content

### Why Fake Reviews Matter for Product Graphs

Fake reviews corrupt your data:

- **Ratings become unreliable**: Average ratings no longer reflect true quality
- **Recommendations skew**: Systems recommend products with manipulated reviews
- **Customer trust erodes**: Users lose faith in your platform
- **Legal liability**: FTC and other regulators are cracking down

### Red Flags for Fake Reviews

Pattern | What It Suggests
--------|------------------
Many reviews posted in short timeframe | Review bombing campaign
Generic language, no specific details | Bot or template-generated
Reviewer has only reviewed one product | Created for single purpose
Reviewer posts many reviews same day | Professional reviewer or bot
Product has only 5-star OR 1-star reviews | Manipulation on both sides
Review sentiment doesn't match rating | Copy-pasted wrong text

!!! danger "The Fake Review Problem is Serious"
    Amazon removed over 200 million suspected fake reviews in 2022 alone. Platforms that don't address this problem lose customer trust—and potentially face legal action. Graph databases are uniquely suited to detect these patterns through relationship analysis.

## Review Fraud Detection: Graph Analytics to the Rescue

This is where graph databases demonstrate their superpower. **Review fraud detection** using graph analysis can identify patterns that traditional approaches miss.

### Why Graphs Excel at Fraud Detection

Fraud is fundamentally a network problem. Fraudsters don't operate in isolation—they form networks:

- Reviewers connected by IP addresses
- Accounts created around the same time
- Review patterns that coordinate across products
- Payment methods shared across accounts

Graph databases can traverse these hidden connections instantly.

### Graph-Based Fraud Signals

#### Signal 1: Reviewer Network Density

Legitimate reviewers have sparse connections. Fraudulent review rings have dense connections.

```
// Find reviewers who share IP addresses
MATCH (r1:Reviewer)-[:USES_IP]->(ip:IPAddress)<-[:USES_IP]-(r2:Reviewer)
WHERE r1 <> r2
RETURN r1, r2, ip, count(*) as shared_sessions
ORDER BY shared_sessions DESC
```

#### Signal 2: Temporal Patterns

Real reviews trickle in over time. Fake campaigns show bursts.

```
// Detect review bursts
MATCH (p:Product)<-[:REVIEWS]-(r:Review)
WITH p, date(r.date) as review_date, count(*) as daily_reviews
WHERE daily_reviews > 10
RETURN p.name, review_date, daily_reviews
```

#### Signal 3: Reviewer-Product Bipartite Analysis

When you project reviewers and products into a bipartite graph, fraud rings become visible as unusual clustering.

#### Signal 4: Account Characteristics

New accounts, single-product reviewers, and accounts with burst activity patterns are suspicious.

### Building a Fraud Score

Combine multiple signals into a composite fraud score:

| Signal | Weight | Description |
|--------|--------|-------------|
| Network Clustering | 0.25 | Shared IPs, devices, payment methods |
| Temporal Burst | 0.20 | Reviews in short time window |
| Account Age | 0.15 | New accounts are riskier |
| Review Diversity | 0.15 | Single-product reviewers suspicious |
| Linguistic Analysis | 0.15 | Generic/templated language |
| Rating Pattern | 0.10 | All 5-star or all 1-star is suspicious |

Products or reviewers with fraud scores above a threshold get flagged for human review.

#### Diagram: Review Fraud Detection Network

<details markdown="1">
<summary>Review Fraud Detection Network Visualization</summary>
Type: graph-model

Purpose: Visualize how graph analysis reveals hidden connections in a fraudulent review network

Bloom Taxonomy: Evaluate (L5)

Learning Objective: Students will be able to evaluate graph patterns to distinguish legitimate reviewer behavior from fraudulent review ring activity

Node types:
1. Reviewer (circles)
   - Legitimate reviewers: Blue, scattered
   - Suspicious reviewers: Red, clustered together
   - Properties: account_age, review_count, fraud_score

2. Product (squares)
   - Normal products: Green
   - Targeted products: Orange (receiving fake reviews)
   - Properties: review_count, avg_rating, fraud_flag

3. IP Address (small diamonds)
   - Gray color
   - Shown only when shared by multiple reviewers

4. Review (small dots on edges)
   - Color indicates rating (green=5, yellow=3, red=1)

Edge types:
1. WROTE_REVIEW (reviewer to product)
   - Line style indicates review authenticity confidence
   - Solid = likely legitimate
   - Dashed = suspicious

2. SHARES_IP (reviewer to IP to reviewer)
   - Red lines connecting suspicious reviewers
   - Show hidden network connections

Sample scenario showing:
- 20 legitimate reviewers with sparse connections
- 8 fraudulent reviewers in tight cluster
- 3 targeted products receiving coordinated reviews
- IP addresses revealing connections between fraud accounts
- Temporal annotations showing review burst timing

Layout: Force-directed with fraud cluster emphasized

Interactive features:
- Toggle to show/hide IP connections
- Slider to filter by fraud score threshold
- Click reviewer to highlight all their reviews
- Animation showing review timeline
- Compare "before detection" vs "after detection" views

Visual styling:
- Legitimate subgraph: Calm blues and greens
- Fraud subgraph: Angry reds and oranges
- Connection lines: Thickness indicates strength of fraud signal
- Cluster highlight: Red dashed boundary around fraud ring

Color scheme:
- Legitimate reviewers: Blue (#4169E1)
- Suspicious reviewers: Red (#DC143C)
- Normal products: Green (#228B22)
- Targeted products: Orange (#FF8C00)
- IP addresses: Gray (#808080)
- Fraud connections: Red (#FF0000)

Implementation: vis-network with custom clustering
Canvas size: 900x700px
</details>

#### Diagram: Fraud Detection MicroSim

<details markdown="1">
<summary>Review Fraud Detection MicroSim</summary>
Type: microsim

Purpose: Interactive simulation allowing students to adjust fraud detection parameters and see how different thresholds affect detection accuracy

Bloom Taxonomy: Evaluate (L5)

Learning Objective: Students will be able to evaluate trade-offs between fraud detection sensitivity and false positive rates

Canvas layout (900x600px):
- Left side (550x600): Network visualization of reviewers and products
- Right side (350x600): Control panel and metrics

Visual elements:
- Reviewer nodes colored on gradient from green (legitimate) to red (suspicious)
- Product nodes showing review count and fraud alert status
- Edges representing reviews, thickness = rating
- Real-time updating fraud scores
- Confusion matrix display

Interactive controls:
- Slider: Network clustering threshold (0.1-1.0)
- Slider: Temporal burst threshold (5-50 reviews/day)
- Slider: Account age minimum (0-365 days)
- Slider: Overall fraud score threshold (0.0-1.0)
- Dropdown: Visualization mode (full network, fraud only, legitimate only)
- Button: "Run Detection Algorithm"
- Button: "Reveal Ground Truth"
- Toggle: Show IP connections

Metrics display (updating in real-time):
- True Positives: Correctly identified fraud
- False Positives: Legitimate flagged as fraud
- True Negatives: Correctly identified legitimate
- False Negatives: Missed fraud
- Precision, Recall, F1 Score
- ROC curve mini-chart

Default parameters:
- Network clustering: 0.5
- Temporal burst: 15
- Account age: 30 days
- Fraud threshold: 0.6

Behavior:
- Adjusting sliders immediately recalculates fraud scores
- Nodes animate color change as scores update
- Ground truth revealed shows actual fraud vs legitimate
- Confusion matrix updates with each parameter change
- Students optimize parameters to maximize F1 score

Sample data:
- 100 reviewers (70 legitimate, 30 fraudulent)
- 25 products
- 500 reviews
- Pre-computed features for each reviewer
- Hidden "ground truth" labels for validation

Implementation notes:
- Use p5.js for rendering
- Pre-calculate all features for responsive interaction
- Store ground truth separately from displayed scores
- Animate transitions smoothly
- Track student's best F1 score achieved
</details>

## Putting It All Together: The Product Graph Ecosystem

We've covered a lot of ground. Let's step back and see how all these concepts interconnect to form a complete product graph ecosystem.

### The Complete Product Graph Schema

```
// Core entities
(:Product)
(:Category)
(:Brand)
(:Customer)
(:Review)
(:Reviewer)

// Product relationships
(Product)-[:IN_CATEGORY]->(Category)
(Product)-[:MADE_BY]->(Brand)
(Product)-[:SIMILAR_TO {score: 0.87}]->(Product)
(Product)-[:FREQUENTLY_BOUGHT_WITH]->(Product)

// Taxonomy relationships
(Category)-[:PARENT_OF]->(Category)
(Category)-[:IN_TAXONOMY]->(Taxonomy)

// Review relationships
(Customer)-[:WROTE]->(Review)-[:REVIEWS]->(Product)
(Customer)-[:PURCHASED]->(Product)

// Fraud detection relationships
(Reviewer)-[:USES_IP]->(IPAddress)
(Reviewer)-[:USES_DEVICE]->(Device)
(Review)-[:HAS_FRAUD_SCORE {score: 0.23}]->(Review)
```

### The Value Chain

Each concept we covered builds on the previous ones:

1. **Product Lists** → Basic nodes to work with
2. **Product Groupings** → Organize for browsing
3. **Taxonomies** → Enable navigation and inheritance
4. **Multiple Taxonomies** → Support diverse customer journeys
5. **Classification Tools** → Scale categorization
6. **Product Similarity** → Enable "more like this"
7. **Product Embeddings** → Semantic understanding
8. **Product Metadata** → Rich, queryable profiles
9. **Product Reviews** → Customer voice
10. **Review Sentiment** → Deep understanding
11. **Fake Reviews** → Threat awareness
12. **Fraud Detection** → Trust preservation

### Real-World Impact

Remember those Amazon numbers from the beginning? Now you understand HOW they achieve that:

- **100+ billion nodes**: Products, customers, reviews, categories, all connected
- **35% of revenue from recommendations**: Similarity, embeddings, co-purchase analysis
- **$150-170 billion annually**: The compound effect of getting product modeling right

Your product graph might start smaller, but the same principles apply. A well-modeled product graph is a strategic asset that:

- Increases average order value (better recommendations)
- Reduces returns (customers find what they actually need)
- Builds trust (authentic reviews, fraud detection)
- Enables AI (embeddings, semantic search, personalization)

## Key Takeaways

??? success "Chapter Summary - Click to Expand"

    **Product Foundations**

    - Product nodes need well-designed properties: IDs, names, prices, SKUs
    - Product groupings enable organization for browsing and marketing
    - Groupings work best as nodes (not properties) for flexibility

    **Taxonomies and Classification**

    - Hierarchical taxonomies enable navigation and inheritance
    - Multiple taxonomies support different customer browsing behaviors
    - AI classification tools scale categorization of large catalogs
    - Graph structure itself improves classification accuracy

    **Similarity and Recommendations**

    - Product similarity can be attribute-based, behavior-based, or semantic
    - Embeddings enable semantic similarity beyond explicit attributes
    - Vector storage in graph databases powers modern semantic search
    - The recommendation engine is worth billions to major retailers

    **Reviews and Trust**

    - Reviews connect customers and products in powerful three-way relationships
    - Sentiment analysis extracts meaning beyond star ratings
    - Fake reviews are a serious problem affecting 30-40% of online reviews
    - Graph analysis excels at detecting fraud through network patterns

    **Strategic Value**

    - Amazon's product graph contains 100+ billion nodes
    - 35% of Amazon's revenue ($150-170B) is driven by recommendations
    - World-class product modeling is a competitive advantage
    - Graph databases are uniquely suited for this domain

## Exercises

1. **Design a Product Schema**: Create a graph schema for an online bookstore including products, authors, categories, and reviews. What properties would each node type have?

2. **Multi-Taxonomy Challenge**: A single product "Wireless Charging Pad" could be classified in multiple ways. Design at least 4 different taxonomies and show how the product connects to each.

3. **Fraud Detection Query**: Write a pseudo-query to find reviewers who have left more than 10 reviews in a single day, all with 5-star ratings.

4. **Embedding Use Case**: Describe how you would use product embeddings to build a "visually similar products" feature for a furniture store.

5. **Business Case Analysis**: If a smaller e-commerce site has $10 million in annual revenue and implements a recommendation engine that influences 20% of sales with a 15% uplift, what's the annual revenue impact?

## What's Next?

Now that you understand product modeling, we're ready to tackle one of the most challenging aspects of any data model: **space and location**. In the next chapter, we'll explore how to model geographic data, calculate distances, and build location-aware applications using graph databases.

Get ready to put products on the map—literally!
