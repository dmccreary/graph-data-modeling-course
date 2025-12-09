---
title: Introduction to Graph Data Modeling
description: Why graph data modeling matters in the age of AI
generated_by: chapter-content-generator skill
date: 2025-12-09
version: 0.03
---

# Introduction to Graph Data Modeling

## Summary

This chapter introduces the fundamental concepts of graph data modeling and explains why it has become critical in the age of AI. We explore the emerging GraphRAG pattern, world models, and how graph databases serve as an organization's central nervous system for real-time responses to natural language queries. We explain that in the past, building high-quality graph data models was a slow and painful process requiring the close partnership of subject-matter experts and experienced graph data modelers. We show that generative AI and the GraphRAG pattern has accelerated this process, so novice users can now go from a collection of documents on the Intranet to a first draft of a knowledge graph that captures the essential knowledge about your organization.

However, these initial draft knowledge graphs still must be curated by experts. Without the knowledge you gain from this course, the enterprise knowledge graph can't continually evolve to meet new goals.

## Concepts Covered

1. Graph Data Model
2. World Models
3. GraphRAG Pattern
4. Vector Stores
5. Semantic Indexes
6. Real-Time Systems
7. Knowledge Triangle
8. Data Layer
9. Information Layer
10. Knowledge Layer
11. Sensor Data
12. Page Rank Algorithm
13. Relational Models
14. Analytical Models
15. Key-Value Stores
16. Document Models
17. ISO GQL Standard
18. Graph and LLM Integration

## Learning Objectives

By the end of this chapter, students will be able to:

- Define what a graph data model is and its core components
- Explain the GraphRAG pattern and its importance for AI applications
- Describe the Knowledge Triangle and its three layers
- Compare graph databases to other data models (relational, key-value, document)
- Understand how graphs integrate with large language models

## Why Should You Care About Graph Data Modeling?

Here's the deal: if you're reading this book, you're about to gain a superpower. Not the flying kind (sorry), but something arguably more useful in today's tech landscape—the ability to model the messy, interconnected reality of our world in a way that computers can actually understand and reason about.

Think about your social media feed for a moment. Why does Instagram seem to *know* that you'd love that cat video, or that LinkedIn article about graph databases (meta, right?)? The answer isn't magic—it's relationships. Everything in our digital world is connected, and the organizations that understand these connections win. Period.

**Graph data modeling** is the art and science of representing these connections in a structured way. And here's the exciting part: with the rise of AI, particularly large language models (LLMs), the demand for graph data models has absolutely exploded. We're living in what some call the "Golden Age of Graphs," and you've got a front-row seat.

## What is a Graph Data Model?

Let's start with the basics. A **graph data model** represents information as a network of entities (called **nodes**) connected by **relationships** (called **edges**). Both nodes and edges can have **properties**—attributes that describe them.

Here's a simple example to make this concrete:

| Component | Example | Description |
|-----------|---------|-------------|
| Node | `Person: "Alice"` | An entity representing a person |
| Node | `Company: "TechCorp"` | An entity representing a company |
| Edge | `WORKS_FOR` | A relationship connecting Alice to TechCorp |
| Property | `since: 2020` | An attribute on the WORKS_FOR relationship |

Unlike traditional databases that store data in rigid tables, graph databases store data the way you naturally think about it—as things and connections between things.

#### Diagram: Simple Social Graph Model

<details markdown="1">
    <summary>Simple Social Graph Model</summary>
    Type: graph-model

    Bloom Taxonomy Level: Remember (L1)

    Learning Objective: Help students visualize the basic components of a graph data model (nodes, edges, and properties) using a familiar social network context.

    Node types:
    1. Person (blue circles)
       - Properties: name, age, location
       - Examples: "Alice", "Bob", "Carol"

    2. Company (orange rectangles)
       - Properties: name, industry, founded_year
       - Examples: "TechCorp", "DataInc"

    3. Skill (green diamonds)
       - Properties: name, category
       - Examples: "Python", "Graph Modeling", "Machine Learning"

    Edge types:
    1. WORKS_FOR (solid blue arrows)
       - Properties: since, role
       - Direction: Person → Company

    2. KNOWS (dashed gray lines, bidirectional)
       - Properties: met_year, relationship_type
       - Direction: Person ↔ Person

    3. HAS_SKILL (dotted green arrows)
       - Properties: proficiency_level (1-5)
       - Direction: Person → Skill

    Sample graph:
    - Alice WORKS_FOR TechCorp (since: 2020, role: "Data Engineer")
    - Alice KNOWS Bob (met_year: 2019, relationship_type: "colleague")
    - Alice HAS_SKILL Python (proficiency_level: 4)
    - Alice HAS_SKILL Graph Modeling (proficiency_level: 5)
    - Bob WORKS_FOR DataInc (since: 2018, role: "Developer")
    - Bob HAS_SKILL Python (proficiency_level: 3)

    Layout: Force-directed with Person nodes in center
    Canvas size: 700x500px

    Interactive features:
    - Hover over nodes to see all properties
    - Hover over edges to see relationship properties
    - Click and drag to rearrange nodes
    - Zoom with mouse wheel

    Implementation: vis-network JavaScript library
</details>

## The Data Model Landscape: Know Your Options

Before diving deeper into graphs, let's put them in context. You've probably encountered other data models in your database courses. Here's how they compare:

### Relational Models

The trusty **relational model** has been the backbone of enterprise computing since the 1970s. Data lives in tables with rows and columns, and relationships are expressed through foreign keys. It's great for structured data with predictable access patterns.

But here's the catch: when you need to traverse relationships—like finding friends of friends of friends—relational databases start to sweat. Each "hop" requires a JOIN operation, and performance degrades exponentially with depth.

### Key-Value Stores

**Key-value stores** are the speed demons of the database world. Give them a key, get back a value—blazingly fast. Think Redis or Amazon DynamoDB. They're perfect for caching and simple lookups but struggle with complex queries across multiple entities.

### Document Models

**Document models** like MongoDB store data as JSON-like documents. They're flexible and developer-friendly, great for content management and applications with varied data structures. However, they're not optimized for traversing relationships between documents.

### Analytical Models

**Analytical models** (think data warehouses and OLAP cubes) are built for aggregating massive amounts of data for business intelligence. They excel at answering "how many" and "what's the total" but aren't designed for real-time relationship queries.

| Model Type | Best For | Relationship Handling | Example Use Case |
|------------|----------|----------------------|------------------|
| Relational | Structured transactions | JOINs (slow for deep traversal) | Banking systems |
| Key-Value | Simple lookups | None | Session caching |
| Document | Flexible content | Embedded or referenced | Content management |
| Analytical | Aggregations | Pre-computed | Business intelligence |
| **Graph** | Relationships | Native (fast!) | Social networks, fraud detection |

!!! tip "When to Choose Graphs"
    If your queries frequently use phrases like "connected to," "related through," "path between," or "degree of separation," you're probably looking at a graph problem.

## The Knowledge Triangle: From Data to Wisdom

Now let's talk about one of the most important frameworks in this course: the **Knowledge Triangle**. This concept helps us understand how raw data transforms into actionable knowledge.

#### Diagram: The Knowledge Triangle

<details markdown="1">
    <summary>The Knowledge Triangle</summary>
    Type: diagram

    Bloom Taxonomy Level: Understand (L2)

    Learning Objective: Help students understand the progression from raw data to knowledge and how each layer builds upon the previous one.

    Visual style: Triangle/pyramid diagram with three horizontal layers

    Layers (bottom to top):

    1. Data Layer (bottom, largest - blue)
       - Label: "DATA LAYER"
       - Description: "Raw facts and figures"
       - Examples on side: "Sensor readings, log files, transactions"
       - Icon: Binary digits (0s and 1s)
       - Width: 100% of triangle base

    2. Information Layer (middle - green)
       - Label: "INFORMATION LAYER"
       - Description: "Data in context with meaning"
       - Examples on side: "Customer profiles, product catalogs, event timelines"
       - Icon: Structured table/list
       - Width: 66% of base

    3. Knowledge Layer (top, smallest - gold)
       - Label: "KNOWLEDGE LAYER"
       - Description: "Information connected with relationships and rules"
       - Examples on side: "Knowledge graphs, ontologies, semantic networks"
       - Icon: Network/graph structure
       - Width: 33% of base

    Arrows:
    - Upward arrows on both sides showing progression
    - Left arrow labels: "Processing," "Context," "Relationships"
    - Right arrow labels: "Structure," "Meaning," "Wisdom"

    Color scheme: Blue (bottom) → Green (middle) → Gold (top)

    Annotations:
    - At bottom: "Volume: High, Value: Low"
    - At top: "Volume: Low, Value: High"

    Implementation: SVG or p5.js static diagram
    Canvas size: 700x500px
</details>

### The Data Layer

At the foundation, we have the **Data Layer**. This is where raw, unprocessed information lives—sensor readings streaming from IoT devices, log files from servers, transaction records from databases. It's like having a pile of LEGO bricks dumped on the floor: lots of potential, but not very useful yet.

**Sensor Data** is a great example of data layer content. A temperature sensor might report "72.3" every second. That number alone doesn't tell you much. Is that Fahrenheit or Celsius? Is it good or bad? Where is the sensor located?

### The Information Layer

The **Information Layer** adds context and structure to raw data. We organize, label, and categorize data so it starts to mean something. That sensor reading becomes "Room 101 temperature: 72.3°F at 2:30 PM" and gets stored in a time-series database with appropriate metadata.

At this layer, we create customer profiles, product catalogs, and event timelines. The data has meaning, but the connections between entities are still implicit or stored separately.

### The Knowledge Layer

The **Knowledge Layer** is where the magic happens. Here, we explicitly model relationships, create ontologies, and build knowledge graphs that capture how entities relate to each other. That temperature reading is now connected to the room it monitors, the building that contains the room, the HVAC system that controls it, and the maintenance schedule that depends on it.

This is where graph data models shine. They're purpose-built for representing the knowledge layer, making relationships first-class citizens rather than afterthoughts.

#### Diagram: MicroSim - Knowledge Triangle Explorer

<details markdown="1">
    <summary>Knowledge Triangle Interactive Explorer</summary>
    Type: microsim

    Bloom Taxonomy Level: Apply (L3)

    Learning Objective: Allow students to interactively explore how data transforms through each layer of the Knowledge Triangle, reinforcing the concept that each layer adds value through context and connections.

    Canvas layout (800x600px):
    - Main area (600x600): Three-panel visualization showing the same information at different layers
    - Control area (200x600): Right sidebar with controls

    Visual elements:
    - Three horizontal panels representing each layer
    - Top panel (Knowledge): Graph visualization with nodes and edges
    - Middle panel (Information): Structured table/card view
    - Bottom panel (Data): Raw text/numbers stream

    Sample data scenarios (dropdown selection):
    1. "Temperature Sensor" - Shows sensor data → structured reading → connected to room/building graph
    2. "Customer Purchase" - Shows transaction log → purchase record → customer-product relationship graph
    3. "Social Interaction" - Shows API event → user activity → social network graph

    Interactive controls:
    - Dropdown: Select scenario
    - Button: "Add New Data Point" - Animates new data flowing up through layers
    - Slider: "Animation Speed" (1-5 seconds per transition)
    - Toggle: "Show Transformations" - Displays arrows and labels between layers
    - Button: "Reset"

    Behavior:
    - When "Add New Data Point" clicked:
      1. New raw data appears at bottom panel (highlighted)
      2. After delay, transforms into structured info in middle panel
      3. After delay, connects into graph in top panel
      4. Connections to existing nodes highlighted briefly

    Default parameters:
    - Scenario: Temperature Sensor
    - Animation speed: 2 seconds
    - Show transformations: On

    Implementation notes:
    - Use p5.js for rendering
    - Simple graph visualization in top panel
    - Animate transitions with easing
    - Show transformation rules as text during animation
</details>

## World Models: How We Represent Reality

A **World Model** is a representation of reality that captures the entities, relationships, and rules governing a domain. Think of it as a simplified but useful map of some aspect of the world.

Your brain maintains world models constantly. You have a model of your home that lets you navigate in the dark. You have a model of social relationships that helps you predict how people will react. Organizations need similar models, stored in computers, to make intelligent decisions.

Graph databases excel at building world models because:

- **Entities map naturally to nodes**: People, places, products, events
- **Relationships become edges**: Who knows whom, what depends on what
- **Properties capture attributes**: Names, dates, quantities, statuses
- **Traversal reveals insights**: Paths, patterns, and predictions

!!! quote "The Map is Not the Territory"
    As Alfred Korzybski famously noted, models are always simplifications of reality. The art of graph data modeling is choosing *which* simplifications capture the essential relationships while ignoring irrelevant details.

## The GraphRAG Pattern: Where Graphs Meet AI

Here's where things get really exciting. The **GraphRAG pattern** (Graph Retrieval-Augmented Generation) is transforming how organizations deploy AI systems.

Traditional RAG (Retrieval-Augmented Generation) works like this:

1. User asks a question
2. System searches a **vector store** for relevant documents
3. Retrieved documents are fed to an LLM as context
4. LLM generates an answer based on the retrieved context

This works reasonably well for simple questions. But what about complex queries that require understanding relationships? "Who are the key stakeholders affected if Server-X goes down?" A simple text search won't cut it.

GraphRAG enhances this pattern by:

1. Building a **knowledge graph** from organizational documents
2. Using **semantic indexes** to find relevant starting points
3. **Traversing the graph** to gather connected context
4. Feeding this rich, relationship-aware context to the LLM

The result? AI systems that can reason about connections, dependencies, and impacts—not just find similar text.

#### Diagram: Traditional RAG vs GraphRAG Architecture

<details markdown="1">
    <summary>Traditional RAG vs GraphRAG Architecture Comparison</summary>
    Type: diagram

    Bloom Taxonomy Level: Analyze (L4)

    Learning Objective: Help students compare traditional RAG with GraphRAG architecture, understanding how graph traversal enriches the context provided to LLMs.

    Visual style: Side-by-side architecture comparison

    Left side - Traditional RAG:
    1. User (icon) - "What are the risks if Server-X fails?"
    2. Arrow down to: Search/Embedding component
    3. Arrow to: Vector Store (cylinder with document icons)
    4. Arrow back: "Retrieved documents (text chunks)"
    5. Arrow to: LLM (brain icon)
    6. Arrow out: "Answer based on text similarity"

    Label underneath: "Finds similar text, misses relationships"

    Right side - GraphRAG:
    1. User (icon) - Same question
    2. Arrow down to: Graph Query Engine
    3. Arrow to: Knowledge Graph (network visualization)
    4. Traversal animation showing: Server-X → Applications → Services → Teams
    5. Arrow back: "Retrieved subgraph with relationships"
    6. Arrow to: LLM (brain icon)
    7. Arrow out: "Answer with full dependency context"

    Label underneath: "Traverses relationships, understands impact"

    Color scheme:
    - Traditional RAG: Grayscale/muted colors
    - GraphRAG: Vibrant colors highlighting the graph

    Annotations:
    - Arrow pointing to Vector Store: "Good for: 'Find similar documents'"
    - Arrow pointing to Knowledge Graph: "Good for: 'What depends on X?'"

    Bottom comparison table:
    | Aspect | Traditional RAG | GraphRAG |
    |--------|-----------------|----------|
    | Query type | Semantic similarity | Relationship traversal |
    | Context | Text chunks | Connected entities |
    | Reasoning | Pattern matching | Causal understanding |

    Implementation: Static diagram with annotations
    Canvas size: 900x600px
</details>

### Vector Stores and Semantic Indexes

Let's clarify some terminology that often gets confused.

**Vector Stores** (like Pinecone, Weaviate, or Milvus) store high-dimensional vectors that represent the semantic meaning of text. When you embed a document or query, you convert it into a numerical vector that captures its meaning. Similar concepts end up close together in vector space.

**Semantic Indexes** are data structures that enable efficient semantic search. They might use vector similarity, keyword matching, or hybrid approaches. The key feature is that they understand meaning, not just exact text matches.

In a GraphRAG system, vector stores and semantic indexes help you *find* relevant entry points in the graph. Then graph traversal takes over to *explore* the connected context.

## Real-Time Systems and the Need for Speed

Modern organizations don't just need answers—they need them *now*. **Real-Time Systems** must respond to queries in milliseconds, not seconds or minutes.

This is where graph databases have a killer advantage. Remember how relational databases struggle with multi-hop queries? Each JOIN can take longer as the database grows. Graph databases use **index-free adjacency**, meaning each node directly points to its neighbors. Traversing from one node to connected nodes is a constant-time operation, regardless of how big the graph gets.

| Hops | Relational DB (typical) | Graph DB (typical) |
|------|------------------------|-------------------|
| 1 | 10ms | 5ms |
| 2 | 150ms | 8ms |
| 3 | 2,500ms | 12ms |
| 4 | 45,000ms | 15ms |
| 5 | Timeout | 18ms |

This isn't just a nice performance improvement—it's a fundamental capability difference. Real-time fraud detection, recommendation engines, and impact analysis all depend on this speed.

## The PageRank Algorithm: A Graph Success Story

No introduction to graph data modeling would be complete without mentioning **PageRank**, the algorithm that powered Google's rise to dominance.

The insight was brilliant in its simplicity: a web page is important if other important pages link to it. This circular definition creates a system that can be solved iteratively, assigning importance scores to every page based purely on the link structure.

PageRank demonstrated that the *structure* of connections often matters more than the *content* of nodes. A page with few links from authoritative sources beats a page with many links from spam sites.

This principle applies far beyond web search:

- **Social networks**: Influential users are connected to other influential users
- **Financial systems**: Important institutions have relationships with other important institutions
- **Knowledge graphs**: Central concepts connect to many other concepts

#### Diagram: MicroSim - PageRank Visualizer

<details markdown="1">
    <summary>PageRank Algorithm Visualizer</summary>
    Type: microsim

    Bloom Taxonomy Level: Understand (L2)

    Learning Objective: Demonstrate how the PageRank algorithm propagates importance through a network, showing that a node's rank depends on the ranks of nodes linking to it.

    Canvas layout (800x600px):
    - Graph area (600x600): Force-directed graph with animated PageRank
    - Control panel (200x600): Right sidebar

    Visual elements:
    - 8-12 nodes arranged in a connected network
    - Node size proportional to current PageRank score
    - Node color intensity also reflects PageRank (darker = higher)
    - Directed edges showing link structure
    - Numerical PageRank scores displayed inside or above nodes

    Initial graph structure:
    - Node A: Hub connecting to B, C, D
    - Node B: Connects to E, F
    - Node C: Connects to F, G
    - Node D: Connects to G, H
    - Node E, F, G: Various interconnections
    - Node H: "Dead end" with no outgoing links

    Interactive controls:
    - Button: "Run One Iteration" - Performs single PageRank iteration
    - Button: "Run to Convergence" - Animates until scores stabilize
    - Button: "Reset" - Restore initial equal ranks
    - Slider: "Damping Factor" (0.5 to 0.99, default 0.85)
    - Display: "Iteration count" and "Max change this iteration"
    - Toggle: "Show rank flow" - Animate rank flowing along edges

    Behavior:
    - Initially all nodes have equal PageRank (1/N)
    - Each iteration redistributes rank based on incoming links
    - Node sizes animate smoothly as ranks change
    - "Show rank flow" mode: animated particles flowing along edges proportional to rank transferred
    - Convergence detected when max change < 0.001

    Default parameters:
    - Damping factor: 0.85
    - Initial ranks: Equal (1/N)
    - Animation speed: 500ms per iteration

    Implementation notes:
    - Use p5.js for rendering
    - Store graph as adjacency list
    - Implement iterative PageRank formula: PR(p) = (1-d)/N + d * Σ(PR(i)/L(i))
    - Smooth animation of node sizes using lerp()
</details>

## Graph and LLM Integration: The Future is Hybrid

We're witnessing a fascinating convergence: **Graph and LLM Integration** is creating systems smarter than either technology alone.

Large Language Models are incredibly powerful pattern matchers and text generators. They've learned statistical relationships from vast amounts of text. But they have limitations:

- They can hallucinate (confidently state false information)
- Their knowledge is frozen at training time
- They struggle with precise, structured reasoning

Knowledge graphs complement LLMs perfectly:

- They provide **grounded facts** that reduce hallucination
- They can be **updated continuously** with new information
- They enable **precise traversal** for structured queries

The most advanced AI systems today use both: LLMs for natural language understanding and generation, graphs for structured knowledge and reasoning.

!!! info "The Best of Both Worlds"
    Think of it this way: LLMs are great at understanding *what you mean*. Graphs are great at knowing *what's true and connected*. Together, they create AI systems that understand your questions AND have accurate, current knowledge to answer them.

## The ISO GQL Standard: Graphs Go Mainstream

In 2024, something historic happened: the International Organization for Standardization (ISO) published **GQL (Graph Query Language)** as an international standard. This is the first new ISO database query language since SQL in 1987—a 37-year gap!

Why does this matter? Standards drive adoption. When enterprises can invest in graph technology knowing there's an international standard behind it, adoption accelerates. It also means graph skills become portable across different database products.

GQL provides standardized syntax for:

- Creating and modifying graph schemas
- Pattern matching for graph queries
- Path-finding and traversal operations
- Graph construction and transformation

While we won't dive into GQL syntax in this course (we're focused on *modeling*, not querying), it's worth knowing that the industry has matured to the point of standardization.

## Putting It All Together

Let's recap the key concepts we've covered:

1. **Graph Data Models** represent information as nodes (entities) connected by edges (relationships), with properties on both.

2. **World Models** use graphs to capture simplified but useful representations of reality.

3. **The Knowledge Triangle** shows how raw data becomes valuable knowledge through context and connections.

4. **GraphRAG** combines knowledge graphs with LLMs for powerful AI applications.

5. **Vector Stores** and **Semantic Indexes** help find relevant entry points for graph exploration.

6. **Real-Time Systems** depend on graph databases' constant-time traversal performance.

7. **PageRank** demonstrated that graph structure reveals importance and influence.

8. **ISO GQL** marks the maturation of graph databases as an industry standard.

#### Diagram: Chapter Concept Map

<details markdown="1">
    <summary>Chapter 1 Concept Map</summary>
    Type: infographic

    Bloom Taxonomy Level: Analyze (L4)

    Learning Objective: Provide a visual summary of how all Chapter 1 concepts relate to each other, reinforcing the interconnected nature of graph data modeling topics.

    Layout: Radial concept map with "Graph Data Model" at center

    Central node:
    - "Graph Data Model" (large, gold circle)

    First ring (direct connections from center):
    - "Nodes & Edges" (blue) - basic components
    - "World Models" (green) - representation concept
    - "Knowledge Triangle" (purple) - framework
    - "Database Comparison" (orange) - context

    Second ring (connected to first ring):
    From "Knowledge Triangle":
    - "Data Layer" → "Sensor Data"
    - "Information Layer"
    - "Knowledge Layer"

    From "Database Comparison":
    - "Relational Models"
    - "Key-Value Stores"
    - "Document Models"
    - "Analytical Models"

    From "World Models":
    - "GraphRAG Pattern" → "Vector Stores" → "Semantic Indexes"
    - "Real-Time Systems"
    - "LLM Integration"

    Standalone connected nodes:
    - "PageRank Algorithm" (connected to "Graph Data Model")
    - "ISO GQL Standard" (connected to "Graph Data Model")

    Visual styling:
    - Node colors by category (as listed above)
    - Edge thickness indicates strength of relationship
    - Animated pulse on hover showing connected concepts

    Interactive features:
    - Hover: Highlight concept and all connections
    - Click: Show brief definition tooltip
    - Zoom: Mouse wheel
    - Pan: Click and drag

    Implementation: vis-network or D3.js
    Canvas size: 800x600px
</details>

## What's Next?

In the next chapter, we'll dive deeper into the fundamental building blocks of graph data models: nodes, edges, properties, and paths. We'll explore data types, constraints, and quality measures that ensure your graphs are robust and reliable.

But here's the best part: you're not learning this in a vacuum. Throughout this course, you'll work alongside AI tools to accelerate your modeling work. The combination of your growing expertise and AI assistance means you'll be able to create sophisticated graph models faster than ever before.

Welcome to the Golden Age of Graphs. Let's build something amazing together!

??? question "Chapter 1 Review: Test Your Understanding"
    1. What are the three layers of the Knowledge Triangle, and how does each layer add value?

    2. How does GraphRAG differ from traditional RAG, and why does this matter for complex queries?

    3. Why do graph databases maintain constant-time traversal performance regardless of graph size?

    4. Explain how PageRank demonstrates that graph structure can be more important than node content.

## References

1. Angles, R., & Gutierrez, C. (2008). Survey of graph database models. ACM Computing Surveys.
2. Page, L., Brin, S., Motwani, R., & Winograd, T. (1999). The PageRank citation ranking: Bringing order to the web.
3. ISO/IEC 39075:2024. Information technology — Database languages — GQL.
4. Robinson, I., Webber, J., & Eifrem, E. (2015). Graph Databases: New Opportunities for Connected Data. O'Reilly Media.
