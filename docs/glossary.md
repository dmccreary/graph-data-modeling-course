# Glossary of Terms for Graph Data Modeling with AI Course

#### AML Modeling

**AML (Anti-Money Laundering) Modeling** represents money laundering schemes in graph form to aid in detection and prevention.

**Example:** We can create a graph to track suspicious transactions between nodes representing bank accounts.

#### Abuse Detection

**Abuse Detection** involves identifying harmful patterns or behaviors within graph data, such as fraud or cyber-attacks.

**Example:** We can analyze a transaction graph to detect unusual patterns indicative of abuse.

#### Address Node

A specific type of location node that represents a postal or physical address.

**Example:** In a logistics graph, students use address nodes to represent delivery locations.

#### Autonomous Vehicle Graph

The use of graph-based models to allow vehicles analyze and navigate their environment based on sensor data.

**Example:** We can build a graph for an autonomous vehicle system, linking road segments, intersections, and traffic signals.

#### Bayesian Network Analysis

A statistical method that applies Bayes' theorem to update the probability of a hypothesis as more evidence becomes available, using a directed acyclic graph to model variables and their probabilistic dependencies.

**Example:** In Bayesian Network Analysis, a network might represent medical diagnoses, where nodes are symptoms and diseases, and edges represent conditional probabilities. For instance, given the presence of a symptom (evidence), the network can update the likelihood of a specific disease.

#### Bitemporal

The process of modeling two dimensions of time included real-world time and system-recorded time.

Bitemporal graphs are frequently used in high-stakes regulated environments that require reports to be run that exactly recrate a report run in the past.

**Example:** A physical makes a diagnosis based on inaccurate blood tests.  A bitemporal graph must be able to roll back corrections to show the state of the chart when the physician made the diagnosis.

#### Broader Concept

Higher-level ideas that encompass more specific concepts in a hierarchy.

**Example:** We can define "Mathematics" as a broader concept for "Algebra" and "Geometry" in a graph.

#### Building Model

The process of designing and implementing graph-based representations of real-world buildings that include real-time sensor data to predict how factors such as sunlight and external heat will predict the need for heating and cooling services.

**Example:** We can build a graph model of a large building to visualize the airflow within a building.

#### Call Graph

A graph representation of function or method calls in a program, modeled as a directed graph.

**Example:** We can call graph to identify dependencies of critical bugs in software
and understand what client modules will be impacted by a new bug.

#### Catalog Graph

Graph models of product catalog as a graph, with nodes for items and edges representing relationships between products.

**Example:** We can build a catalog graph to visualize how products are related through accessories or upgrades.

#### Causal Graph

A graph models that show the cause-and-effect relationships between entities or events.

**Example:** We can use a causal graph to explore factors contributing to delays in a project timeline.

#### City Graph

A graph that models the infrastructure and relationships within a city, including locations, roads, and services.

Examples of nodes in a city graph include businesses, food banks, homeless shelters, stoplights, utility poles, fire extinguishers and emergency service locations such as firehouses.

**Example:** We can create a city graph to simulate traffic flow and optimize transportation routes.

#### Code Graph

A graph representation of the relationships within a software codebases, such as function calls, dependencies, or module structures.

**Example:** We can create a graph to analyze dependencies in a software project, linking classes and methods.

#### Code Quality

Using graph-based models to evaluate and improve the structure, readability, and performance of code.

**Example:** We can analyze a code quality graph to identify modules with high cyclomatic complexity.

#### Concept Dependency

A prerequisite relationship where one concept depends on other concepts.

**Example:** We can create a dependency graph showing that "Basic Math" must precede "Calculus."

#### Concept Hierarchy

A layered structure that organizes concepts by specificity, from general to specific.

**Example:** In a learning graph, "Programming Languages" is a parent concept, with "Python" and "Java" as child concepts.

#### Concept Node

A node that represents any idea or term in a knowledge graph, often with links to related concepts.

**Example:** We can link concept nodes like "Physics" and "Newton's Laws" in a learning graph.

#### Concept Recommender

A suggested related concept or resource based on graph data.

Recommender systems use similarity to find similar nodes in a graph.

**Examples:** A movie can be represented as a node in a graph.  A recommendation
system can answer the question "If you liked this movie, this other movie might be of interest to you.  A course project involves building a graph-based recommender to suggest topics like "Graph Traversal" after "Graph Basics."

#### Concept Schema

A structured representation of concepts and their interrelations, often used in semantic graphs.

Concept Schemas are simple and can be represented by a single ```Concept`` node with a reflexive "DEPENDS" relationship to itself.

**Example:** We can design a concept schema for a library system with concepts like "Book," "Author," and "Genre."

#### Content Models

**Content Models** define structures for organizing and representing content in graphs, such as documents or media.

**Example:** A student designs a content model graph for a blog site, linking articles, authors, and categories.

#### Corporate Customer

A customer node representing an organization or business.

**Example:** We can model corporate customers in a supply chain graph with connections to their suppliers and distributors.

#### Correlation vs Causation

A term we use to highlights the distinction between correlated patterns and causal relationships in graph data.

**Example:** In a class exercise, students analyze a graph to understand whether a correlation between two events implies causation.

#### County Graph

A graph to represent a country including administrative divisions and their interconnections.

**Example:** We can analyze inter-county trade relationships using a county graph.

#### Coverage Graph

The extent of code coverage in testing in a graph, linking tested modules and their dependencies.

**Example:** We can design a coverage graph to visualize which parts of a codebase have been adequately tested.

#### Customer Churn

The prediction or analysis of customers likely to discontinue using a service, represented in graph form.

**Example:** We can model a graph of customer interactions to predict churn based on declining engagement.

#### Customer Node

A node representation of an individual or organization as an entity in a graph, typically used in customer relationship management.

**Example:** We can build a retail graph where "Customer Nodes" are connected to "Purchase" edges.

#### Customer Profiles

Enriched representations of customers in a graph, combining demographic, transactional, and behavioral data.

**Example:** We can design customer profile nodes in a graph with attributes like age, gender, and lifetime value.

#### Customer Segments

**Customer Segments** are groups of customers in a graph with similar attributes or behaviors.

**Example:** We can cluster customer nodes in a graph based on purchase history to define segments like "Frequent Shoppers."

#### Data Lineage

**Data Lineage** traces the origin and transformations of data within a graph, providing transparency and accountability.

**Example:** We can create a lineage graph to track the flow of data through a data processing pipeline.

#### Data Mining

**Data Mining** extracts patterns and insights from large datasets, often represented in graph form.

**Example:** We can use a graph of transaction data to detect frequent item sets.

#### Data Movement Anomaly

**Data Movement Anomaly** represents unexpected or unusual data transfer patterns in a graph.

**Example:** We can analyze a network graph to identify data movements that deviate from expected patterns.

#### Data vs Information

The raw, unprocessed facts, while **Information** is processed data that provides meaning and context.

**Example:** We can analyze raw sales data (data) and aggregate it into revenue trends (information) using a graph database.

#### Datetime Node

A **Datetime Node** represents a specific point in time within a graph, enabling temporal analysis.

**Example:** We can build a graph to track events in a supply chain, with datetime nodes marking key milestones.

#### Decision Tree

A hierarchical graph used for decision-making, where nodes represent conditions and outcomes.

**Example:** We can model a decision tree graph to classify customer preferences in a marketing application.

#### Dependency

A relationship in a graph where one node relies on another for context, operation, or existence.

**Example:** In a workflow graph, a task node "Approve Design" depends on the completion of "Create Design."

#### Directed Graphs

A graph in which edges have a direction, indicating a one-way relationship between nodes.

**Example:** In a course project, a student models a supply chain as a directed graph with edges showing the flow of goods.

#### Disease Spread

**Disease Spread** represents the transmission of diseases through connections in a graph.

**Example:** We can model a graph of disease spread with nodes for individuals and edges representing contact events.

#### Distance Calculation

**Distance Calculation** determines the length or cost of traversing between nodes in a graph.

**Example:** We can calculate the travel distance between cities in a geographic graph.

#### Doc Pipelines

**Doc Pipelines** are workflows for processing documents into graph representations, including parsing and indexing.

**Example:** We can implement a doc pipeline to convert news articles into a graph of entities and events.

#### Document Node

The representation of entire document in a graph, connecting its internal structures and external relationships.

**Example:** We can build a research paper graph where document nodes are linked to their citations.

#### Duplicate Detection

Identification and removal of duplicate entities or relationships in a graph.

**Example:** We can use duplicate detection algorithms to merge multiple "Customer" nodes representing the same individual.

#### Edge

A connection between two nodes in a graph, representing a relationship or interaction.

**Example:** In the course, a student links nodes representing "Author" and "Book" with an edge labeled "wrote."

#### Embeddings

Vector representations of graph elements, enabling similarity and clustering analyses.

**Example:** We can generate embeddings for nodes in a knowledge graph to find related concepts.

#### Entity Resolution

Identifying and consolidating multiple representations of the same entity in a graph.

**Example:** We can resolve duplicate "Vendor" nodes in a procurement graph based on matching attributes.

#### Financial Time

Time in a graph relative to financial cycles, such as fiscal quarters or tax years.

Many organizations has a different calendar for reporting financial activities.  Having a precise model of when reporting periods start and end is essential to consistent financial reporting across many business units within a large organization.

**Example:** We can analyze a financial graph to track quarterly revenue trends.

#### Fraud Indicators

Specific patterns or anomalies in a graph that suggest fraudulent activity.

**Example:** In a financial graph, students identify accounts with a high number of transactions to the same recipient node as potential fraud indicators.

#### Fraud Patterns

Finding recurring behaviors or structures in a graph that indicate fraudulent activity.

**Example:** We can analyze a graph of credit card transactions to identify patterns like circular money flows.

#### Future Projections

Using graph models to predict potential future states or trends based on historical data.

**Example:** We can use a graph of financial transactions to predict future customer purchasing behaviors.

#### Geo-Spatial Model

Integrating geographic data into graphs, allowing spatial analysis and visualization.

**Example:** In a project, students model earthquake impacts using a geo-spatial graph.

#### Graph Aggregation

The summarizing or combining graph data to derive insights or reduce complexity.

**Example:** We can calculate the total transaction value between customers and merchants in a financial graph.

#### Graph Constraints

**Graph Constraints** are rules that restrict or define valid relationships and properties in a graph.

**Example:** We can apply a constraint to ensure that "Employee" nodes must be connected to at least one "Department" node.

#### Graph Data Export

Extracting data from a graph database into an external format for analysis or sharing.

**Example:** A student exports a knowledge graph into JSON format for integration with a machine learning model.

#### Graph Data Import

The process of transferring external data into a graph database while maintaining its structure.

**Example:** We can import CSV data of employees and departments into a graph database as nodes and edges.

#### Graph Data Model

A structured representation of data using nodes, edges, and properties to depict relationships and attributes in a graph structure, enabling flexible and efficient data querying and storage.

**Example:** In the course, a student creates a Graph Data Model to represent a social network, where users are nodes, friendships are edges, and user attributes like name and age are properties.

#### Graph Futures

An exploration emerging trends and advancements in graph data modeling and technologies.

**Example:** A class debate focuses on the future use of knowledge graphs in autonomous systems.

#### Graph Integrity

The process of ensuring the correctness and consistency of a graph's structure and data.

**Example:** The course teaches students how to enforce referential integrity rules between nodes and edges.

#### Graph Isomorphism

The equivalence of two graphs based on their structure, regardless of node or edge labels.

**Example:** We can compare two subgraphs to determine if they represent the same structure.

#### Graph Merging

The process of combining two or more graphs into a unified structure while resolving conflicts.

**Example:** A student merges separate graphs of product catalogs and customer reviews into a single unified graph.

#### Graph Normalization

**Graph Normalization** is the process of organizing data in a graph to reduce redundancy and improve query efficiency.

**Example:** A student transforms a denormalized graph of customer transactions into normalized nodes and edges for better performance.

#### Graph Query Language (GQL)

A standardized graph query language  designed for querying and manipulating graph data.

**Example:** We can use Cypher or GSQL to retrieve all friends of a specific user in a social network graph.

#### Graph Sampling

Selecting a representative subset of a graph for analysis or visualization.

**Example:** We can sample a large social network graph to focus on the most active users and their connections.


#### Graph Schema

The process of defining the structure of a graph, including node types, edge types, and their relationships.

In general, nouns become nodes and relationships between nouns become edges.  Both nodes and edges have attributes.

**Example:** We can define a schema for a university database with node types for "Student," "Course," and "Instructor" and edges like "ENROLLED_IN."

#### Graph Splitting

Dividing a graph into subgraphs based on certain criteria or constraints.

**Example:** We can split a transportation network graph into subgraphs based on geographic regions.

#### Graph Storytelling

Using graph data visualizations to communicate complex relationships and insights effectively.

**Example:** We can design a storytelling graph to explain the spread of misinformation in social networks.

#### Graph Traversal

The process of traversing the connected nodes in a graph.

**Example:** In a lab, students implement a depth-first search (DFS) to explore a network's connectivity.

#### Graph Updates

The process of modifying the structure or properties of a graph, such as adding, deleting, or updating nodes and edges.

Graph databases must often provide extra software to make sure that updates alway
leave a graph in a consistent state.

**Example:** A graph of a bank accounts can shows funds being transferred
between accounts.  The graph must make sure that both a addition and removal
are always consistent even if a server crashes in the middle of a transaction.

#### Graph Versioning

**Graph Versioning** tracks changes to a graph's structure or data over time, enabling rollback and historical analysis.

**Example:** We can create a versioned graph to study how a network evolves over multiple updates.

#### Healthcare Costs

**Healthcare Costs** are represented in a graph to analyze the financial aspects of medical treatments and procedures.

**Example:** We can build a graph to analyze cost relationships between treatments, insurance, and patients.

#### Hierarchical Nodes

**Hierarchical Nodes** represent entities arranged in a tree-like structure to indicate parent-child relationships.

**Example:** We can model a corporate hierarchy where managers are parents of employee nodes.

#### Historical Graph

Graphs that preserve past states of a graph to analyze trends or changes over time.

**Example:** We can analyze a historical graph to track changes in a social network's structure over the past decade.

* See also: [bitemporal](#bitemporal)

#### Hyperedges

A **Hyperedge** connects more than two nodes, representing a multi-way relationship in a graph.

**Example:** In a course project, students use hyperedges to model transactions involving multiple participants.

#### ISO GQL

An international standard for graph query languages, providing a unified syntax and semantics for interacting with graph data.

**Example:** The course introduces ISO GQL to query knowledge graphs consistently across different platforms.

#### Identity Graph

A graph that maps entities and their attributes across different systems to create a unified representation.

**Example:** We can design an identity graph to integrate customer profiles from multiple databases into a single view.

#### Indexing in Graphs

Creating auxiliary data structures to optimize the retrieval of nodes and edges.

**Example:** A student creates an index on the "name" property of "Person" nodes to speed up search queries.

#### Individual Customer

A specific type of customer node representing a single person in a graph.

**Example:** In a banking graph, students model individual customers with attributes like name and account balance.

#### Intelligent Textbooks

**Intelligent Textbooks** integrate graph-based interactive elements to adapt to learners' needs dynamically.

**Example:** We can create a prototype intelligent textbook that adjusts its content based on learners' progress through a knowledge graph.

#### Investigation Paths

**Investigation Paths** are sequences of nodes and edges in a graph used to explore and resolve queries or issues.

**Example:** We can use investigation paths to trace the flow of funds in a transaction graph.

#### Knowledge Graph

A **Knowledge Graph** organizes and connects information into a network of entities and their relationships for enhanced understanding.

**Example:** We can construct a knowledge graph of historical events, linking dates, locations, and individuals.

#### Knowledge vs Data

**Knowledge** represents synthesized understanding derived from data and information, often enriched with context and insight.

**Example:** A student uses graph algorithms to deduce influential customers from sales data, converting data into actionable knowledge.

#### Large Language Model

A statistical model designed to understand, generate, and analyze human language by processing large datasets and identifying complex patterns in text data.

**Example:** In our course, we use this technology to automatically generate definitions for graph concepts. For instance, we can upload our [Learning Graph](#learning-graph) to our project and request that definitions be created for all these concepts..

#### LLM Integration

**LLM Integration** involves combining graph data with large language models to enhance natural language processing tasks.

**Example:** We can use a graph of customer interactions to train a language model for sentiment analysis.

#### Labels & Notation

**Labels & Notation** provide descriptive metadata or identifiers for graph elements.

**Example:** A student assigns labels to nodes to represent their roles, such as "City" or "State."

#### Learning Graph

Graph data models where concepts and their dependencies are structured as a graph to guide learning paths.  Concepts are represented as nodes and dependencies between concept understanding are represented as edges.

**Example:** The course includes a graph showing the dependencies between topics like "Schema Evolution" and "Graph Normalization."

* See our [Learning Graph](https://dmccreary.github.io/learning-graphs/) website for details.

#### Learning Path

Sequences of concepts in a [Learning Graph](#learning-graph) that guide learners through a structured progression.

**Example:** We can map learning paths from "Introduction to Graphs" to "Advanced Algorithms" using a learning graph.

#### License Graph

Representing licensing agreements and constraints in a graph structure that can be used by agents to verify conformity to a license agreement.

**Example:** We can create a graph to track software licenses, linking product nodes to license nodes with constraints.

#### Location Node

A geographic entity in a graph, such as a city, state, address, intersection, or landmark.

Location Nodes frequently contain a coordinate with both longitude and latitude attributes.  By using these coordinates it is easy to create precise distance
measurements between locations.

**Example:** We can build a graph where "Location Nodes" represent cities connected by roads and railways.

#### Loops and Cycles

Paths in a graph that return to their starting node, representing feedback or self-referencing structures.

**Example:** We can identify cycles in a dependency graph to detect potential deadlocks.

#### Manufacturing Graph

A graph representation of the components, processes, and relationships in a manufacturing system.

**Example:** We can build a manufacturing graph with nodes for machines, parts, and processes, linked by edges indicating workflows.

#### Merge Rules

Criteria and processes for combining nodes or edges in a graph.

**Example:** We can apply merge rules to unify duplicate customer nodes in a retail graph.

#### Metro Region

A graph that models urban areas as nodes, highlighting relationships between neighboring cities and their surrounding suburbs.

**Example:** We can create a metro region graph to explore commuting patterns and regional variations in consumer behavior.

#### Model vs Algorithm

A structured abstraction for understanding data, while an **Algorithm** is a procedural set of steps to perform operations on a model or data.

**Example:** The course discusses how graph models represent data, while traversal algorithms like Dijkstra's compute the shortest path.

#### Modeling Basics

The fundamental principles and techniques for creating accurate and effective graph data models.

**Example:** We can learn how to normalize a data set into nodes and edges during the introductory modules.

#### Motion Prediction

**Motion Prediction** models the movement of entities over time as a graph.

**Example:** We can create a graph to predict pedestrian movements in a traffic simulation.

#### Multi-Graphs

A **Multi-Graph** allows multiple edges between the same pair of nodes, often with different types or properties.

**Example:** A student models a transportation network where cities are connected by roads, railways, and flights.

#### Multi-Taxonomy

**Multi-Taxonomy** is a graph structure that incorporates multiple taxonomies to classify data from different perspectives.

**Example:** We can create a graph where a product is classified by both "Material Type" and "Intended Use."

#### Multiplicity

The cardinality of relationships in a graph, such as one-to-one or one-to-many.

**Example:** We can model a graph where a "Customer" node has multiple "Order" edges, showcasing one-to-many relationships.

#### NLP Integration

**NLP Integration** incorporates natural language processing into graph workflows for tasks like entity extraction and relationship identification.

**Example:** In a class project, students extract entities like "Person" and "Organization" from text and link them in a graph.

#### Narrower Concepts

**Narrower Concepts** are specific subcategories of broader concepts.

**Example:** In a graph of scientific disciplines, "Botany" is a narrower concept under "Biology."

Would you like the rest of the nodes defined?

##### You said:

Yes

###### ChatGPT said:

ChatGPT

#### Natural Language Processing

A field of artificial intelligence that focuses on the interaction between computers and human languages, enabling machines to understand, interpret, and generate human language through techniques such as tokenization, parsing, and semantic analysis.

**Example:** In a graph-based NLP module, students build a graph where nodes represent sentences, and edges connect phrases with semantic relationships derived from dependency parsing.#### Node

A fundamental element in a graph that represents an entity or object, such as a person, place, or concept.

**Example:** A student models a library system with nodes representing books, authors, and genres.

#### Organizational Roles

**Organizational Roles** represent specific functions or positions within an organization in a graph.

**Example:** We can build a corporate hierarchy graph where nodes like "Manager" and "Employee" are linked by "reports\_to" edges.

#### Paragraph Node

A **Paragraph Node** represents a paragraph in a graph, often for structuring large text documents.

**Example:** We can model a book as a graph with nodes for paragraphs linked sequentially.

#### Path

A sequence of edges and nodes in a graph, representing a traversal or connection between entities.

**Example:** In an exercise, students find the shortest path between two nodes in a transportation network graph.

#### Patient Node

A **Patient Node** represents an individual receiving medical care in a healthcare graph.

**Example:** We can create a healthcare graph with patient nodes connected to doctor and treatment nodes.

#### Pattern Matching

Identifying specific structural patterns of smaller graphs within a larger graph so that subgraphs can be classified by similarity measures.

**Example:** We can identify cliques in a social network graph to find tightly-knit groups of users.

#### Person Roles

**Person Roles** are specific functions or identities assigned to individuals in a graph.

**Example:** In a project, students model a corporate structure graph with nodes representing roles like "Manager" and "Employee."

#### Pixel Classes

**Pixel Classes** categorize pixels in an image based on attributes, represented as nodes in a graph.

**Example:** We can analyze a graph where nodes represent pixel classes like "Road" or "Tree" for an image segmentation project.

#### Process Graphs

**Process Graphs** represent workflows or processes, capturing the sequence and dependencies of tasks.

**Example:** We can create a process graph to visualize a software development lifecycle.

#### Product Bundles

**Product Bundles** represent grouped products in a graph, often linked to discounts or promotions.

**Example:** We can create a graph where nodes representing bundled items are linked by edges labeled "bundle."

#### Product Classification

**Product Classification** organizes products in a graph based on predefined categories or attributes.

**Example:** We can classify products in a graph by price range, linking nodes with edges labeled "high-value" or "low-value."

#### Product Group

A **Product Group** represents a collection of related products in a graph, often used for categorization or bundling.

**Example:** In a marketing graph, students group product nodes under categories like "Electronics."

#### Product Listing

The graph representation of items available for sale, often linked to customer reviews and suppliers.

**Example:** We can model an e-commerce graph with nodes for products and edges connecting them to supplier nodes.

#### Product Metadata

**Product Metadata** contains additional descriptive attributes for product nodes in a graph.

**Example:** We can enrich a product graph with metadata like "Manufacturer" and "Warranty Period."

#### Product Node

A **Product Node** represents a product or item in a graph, typically used in e-commerce or inventory systems.

**Example:** We can create a graph where product nodes are linked to categories and reviews.

#### Property

A **Property** is an attribute or characteristic associated with a node or edge, providing additional information such as names, weights, or timestamps.

**Example:** A student assigns a property "published\_year" to an edge between an "Author" node and a "Book" node.

#### Reflexive Edge

An edge in a graph where the starting and ending nodes are the same, representing a relationship or property that a node has with itself.

**Example:** In a social network graph, a reflexive edge might represent a person liking their own post or assigning a task to themselves.

#### Road Network

A **Road Network** graph represents roads as edges and intersections as nodes to model transportation systems.

**Example:** We can calculate the shortest route between two locations in a road network graph.

#### Robotics Integration

**Robotics Integration** uses graphs to model robot components, tasks, and environments for seamless operation.

**Example:** We can design a robotics integration graph to plan and execute tasks in a warehouse environment.

Would you like me to finish defining the remaining concepts? Let me know!

#### Rule Engine

A system for defining and executing rules, represented as a graph of conditions and actions.

**Example:** We can design a graph-based rule engine to automate loan approval processes based on customer data.

#### Rule Exchange

**Rule Exchange** represents the sharing or transfer of rules between systems or components in a graph-based framework.

**Example:** We can model a graph to facilitate the exchange of compliance rules between different financial systems.

#### Rule Workflow

A sequence of rule-based actions modeled in a graph.

**Example:** In a project, students create a rule workflow graph to enforce compliance policies in a financial system.

#### SKOS Concepts

**SKOS Concepts** are semantic entities in a knowledge graph, typically used for vocabulary and taxonomy management.

**Example:** We can manage a controlled vocabulary using SKOS concepts in a product catalog graph.

#### SKU Linking

**SKU Linking** represents relationships between stock-keeping units (SKUs) in a graph, such as bundles or compatibility.

**Example:** We can create a graph to link compatible SKUs in a hardware store's inventory.

#### Scene Graph

A **Scene Graph** represents objects and their spatial or semantic relationships, often used in graphics and AI.

**Example:** We can build a scene graph to model a virtual environment for an autonomous vehicle simulation.

#### Schema Evolution

**Schema Evolution** is the process of adapting a graph schema to accommodate changes in requirements or data.

**Example:** In a project, students evolve a schema to include new node types like "Vendor" in an e-commerce graph.

#### Semantic Layers

**Semantic Layers** overlay meaning and context onto graph data, enhancing its interpretability.

**Example:** We can add a semantic layer to a transportation graph, defining terms like "Station" and "Route."

#### Semantic Reasoning

**Semantic Reasoning** involves deducing new knowledge from existing graph data using logical inference.

**Example:** We can apply semantic reasoning to a knowledge graph to infer missing connections between related entities.

#### Sentence Node

A **Sentence Node** represents a sentence in a graph, often used for textual or semantic representation.

**Example:** We can create a graph of text documents, linking sentence nodes by semantic similarity.

#### Similar Attribute

A shared property between nodes or edges, often used for grouping or matching.

**Example:** We can find all nodes with a "location" attribute equal to "New York" in a graph.

#### Similarity Metrics

**Similarity Metrics** quantify how similar two nodes or subgraphs are, often using embeddings or graph structure.

**Example:** We can calculate the similarity between two customer profiles in a marketing graph.

#### Social Graph

A representation of social relationships and interactions among individuals or entities, where nodes represent users or groups, and edges represent relationships such as friendships, followers, or communication links.

**Example:** In a social graph for an online platform, nodes could represent users, and edges could denote "friend" or "follower" connections, enabling analysis of community structures and influence patterns.

#### State Graph

A **State Graph** represents regions, cities, and counties within a state, along with their interactions.

**Example:** We can model a state graph to visualize the distribution of healthcare facilities.

#### Supply Chain Node

A **Supply Chain Node** represents an entity involved in the supply chain, such as a supplier, manufacturer, or distributor.

**Example:** In a logistics graph, students model supply chain nodes connected by edges indicating material flows.

#### Suspicious Entities

**Suspicious Entities** are nodes or subgraphs flagged for unusual activity or relationships.

**Example:** We can identify nodes with unusually high connectivity in a fraud detection graph as suspicious entities.

#### Taxonomy Node

A **Taxonomy Node** represents a classification entity in a hierarchical graph used for organizing information.

**Example:** We can build a product taxonomy graph where nodes represent categories like "Clothing" and "Shoes."

#### Temporal Alignments

The process of synchronizing events or sequences in a graph based on their timing.

**Example:** We can align sensor data from multiple IoT devices in a temporal graph to analyze anomalies.

#### Temporal Exceptions

**Temporal Exceptions** highlight deviations from expected temporal patterns in graph data.

**Example:** We can identify anomalies in a retail sales graph during holiday seasons.

#### Temporal Indexes

**Temporal Indexes** are specialized structures to accelerate temporal queries in graphs.

**Example:** We can implement temporal indexes to quickly retrieve events from a specific week in a large graph.

#### Temporal Queries

The process of retrieving and analyzing time-based patterns in graph data.

**Example:** We can write temporal queries to find all orders placed within a specific timeframe in a sales graph.

#### Text Classification

**Text Classification** uses graph data to categorize textual content based on predefined labels.

**Example:** A project involves classifying reviews in a product feedback graph into categories like "Positive" and "Negative."

#### Text Summarization

**Text Summarization** involves extracting key points from text using graph-based methods.

**Example:** We can summarize research papers by identifying central concepts in a document graph.

#### Threat Modeling

**Threat Modeling** represents potential threats and vulnerabilities in a system as a graph.

**Example:** We can build a threat model graph with nodes for vulnerabilities and edges representing exploit paths.

#### Threat Prioritization

**Threat Prioritization** ranks threats in a graph based on severity, impact, or likelihood.

**Example:** We can use a threat graph to prioritize mitigation efforts for high-risk vulnerabilities.

#### Time Granularity

The level of detail at which temporal data is represented in a graph.

**Example:** In the course, students analyze a time-series graph at daily and monthly granularities to observe trends.

#### Time Tree

A **Time Tree** organizes datetime nodes hierarchically, such as by year, month, and day.

**Example:** We can use a time tree to efficiently query financial transactions grouped by months.

#### Undirected Graphs

A graph where edges have no direction, representing mutual relationships between nodes.

**Example:** A friendship network graph is built by students, where edges indicate mutual friendships.

#### Unusual Relations

**Unusual Relations** are unexpected or abnormal connections in a graph that may indicate errors or anomalies.

**Example:** We can identify unusual relations in a social graph, such as friends who have no common connections.

#### Unweighted Edges

An edge that has no associated value, indicating a simple connection or relationship between nodes.

**Example:** A student models a graph of co-authors where each edge represents a collaboration without weight.

#### Urban vs Rural

**Urban vs Rural** is a classification used in graphs to distinguish between urban and rural nodes or areas.

**Example:** A student analyzes a population distribution graph to compare urban and rural development.

#### Validation Rules

**Validation Rules** define constraints and checks in a graph to ensure data integrity and correctness.

**Example:** We can implement validation rules in a supply chain graph to verify that all orders are linked to valid suppliers.

#### Value-Based Care

**Value-Based Care** represents healthcare delivery models that emphasize quality and outcomes, modeled as a graph.

**Example:** We can create a graph linking patient outcomes to treatment methods to analyze value-based care metrics.

#### Vulnerability Node

A **Vulnerability Node** represents a security flaw or risk in a graph.

**Example:** We can model a cybersecurity graph with vulnerability nodes linked to systems they affect.

#### Weighted Edges

A **Weighted Edge** has an associated value or weight that represents the strength or cost of the relationship.

**Example:** We can create a graph of cities connected by roads, with weights representing distances.

#### Word Node

A **Word Node** represents a word in a graph, often used in linguistic or semantic analysis.

**Example:** We can model a thesaurus graph with word nodes connected by synonym edges.

#### WordNet

WordNet is a large lexical database of English that groups words into sets of synonyms ([synsets]) and defines relationships such as [hypernyms], [hyponyms], [meronyms], and [antonyms] to facilitate linguistic analysis and [natural language processing](#natural-langage-processing).

**Example:** In a graph-based NLP course, students use WordNet to build a semantic graph where nodes represent words, and edges represent relationships like "is a type of" or "is a part of."

#### Workflow Events

**Workflow Events** are nodes in a process graph that mark significant milestones or actions.

**Example:** We can model a manufacturing process graph with workflow events like "Assemble" and "Inspect."

