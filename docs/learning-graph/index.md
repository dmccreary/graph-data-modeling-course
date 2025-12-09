# Learning Graph for Graph Data Modeling

This section contains the learning graph for this textbook. A learning graph is
a graph of concepts used in this textbook. Each concept is represented by a
node in a network graph. Concepts are connected by directed edges that indicate
what concepts each node depends on before that concept is understood by the student.

A learning graph is the foundational data structure for intelligent textbooks that can recommend learning paths.
A learning graph is like a roadmap of concepts to help students arrive at their learning goals.

At the left of the learning graph are prerequisite or foundational concepts. They
have no outbound edges. They only have inbound edges for other concepts that depend on
understanding these foundational prerequisite concepts. At the far right
we have the most advanced concepts in the course. To master these concepts you
must understand all the concepts that they point to.

## Learning Graph Statistics

- **Total Concepts**: 259
- **Total Dependencies**: 501
- **Taxonomy Categories**: 12
- **Foundational Concepts**: 1 (Graph Data Model)
- **Maximum Dependency Chain**: 15 concepts

## Course Description

We use the [Course Description](../course-description.md) as
the source document for the concepts that are included in this course.
The course description uses the 2001 Bloom taxonomy to order learning objectives.

## List of Concepts

We use generative AI to convert the course description into a [Concept List](./concept-list.md).
Each concept is in the form of a short Title Case label with most labels under 32 characters long.

## Concept Dependency List

We next use generative AI to create a Directed Acyclic Graph (DAG). DAGs do not have cycles where
concepts depend on themselves. We provide the DAG in two formats:

- [CSV file](learning-graph.csv) - for easy editing and data analysis
- [JSON file](learning-graph.json) - uses the vis-network JavaScript library format

The vis-network format uses `nodes`, `edges` and `metadata` elements with edges containing `from` and `to` properties. This makes it easy for you to view and edit the learning graph using an editor built with the vis-network tools.

## Analysis & Documentation

### Course Description Quality Assessment

This report rates the overall quality of the course description for the purpose of generating a learning graph.

- Course description fields and content depth analysis
- Validates course description has sufficient depth for generating 200+ concepts
- Compares course description against similar courses
- Identifies content gaps and strengths
- Suggests areas of improvement

[View the Course Description Quality Assessment](course-description-assessment.md)

### Learning Graph Quality Validation

This report gives you an overall assessment of the quality of the learning graph.
It uses graph algorithms to look for specific quality patterns in the graph.

- Graph structure validation - all concepts are connected
- DAG validation (no cycles detected)
- Foundational concepts: 1 entry point (Graph Data Model)
- Indegree distribution analysis
- Longest dependency chains
- Connectivity: 100% of nodes connected to the main cluster

[View the Learning Graph Quality Validation](quality-metrics.md)

### Concept Taxonomy

In order to see patterns in the learning graph, it is useful to assign colors
to each concept based on the concept type. We use generative AI to
create about a dozen categories for our concepts and then place each concept
into a single primary classifier.

**Categories:**

| TaxonomyID | Category | Color |
|------------|----------|-------|
| FOUND | Foundation Concepts | LightCoral |
| KNOWL | Knowledge Representation | PeachPuff |
| CUST | Customer Domain | LightYellow |
| PROD | Product Domain | Honeydew |
| SPACE | Spatial Modeling | PaleTurquoise |
| TIME | Temporal Modeling | LavenderBlush |
| LANG | Language and NLP | Thistle |
| HEALTH | Healthcare Domain | MistyRose |
| SECUR | Security and Rules | PowderBlue |
| PROC | Process and Events | PaleGreen |
| ADV | Advanced Analytics | Lavender |
| AIML | Future and AI | Plum |

[View the Concept Taxonomy](concept-taxonomy.md)

### Taxonomy Distribution

This report shows how many concepts fit into each category of the taxonomy.
Our goal is a somewhat balanced taxonomy where each category holds an
equal number of concepts. We also don't want any category to contain
over 30% of our concepts.

- Statistical breakdown
- Detailed concept listing by category
- Visual distribution table
- Balance verification

[View the Taxonomy Distribution Report](./taxonomy-distribution.md)

## Files in this Section

| File | Description |
|------|-------------|
| [concept-list.md](concept-list.md) | Numbered list of all 259 concepts |
| [learning-graph.csv](learning-graph.csv) | CSV format with dependencies and taxonomy |
| [learning-graph.json](learning-graph.json) | vis-network JSON format |
| [metadata.json](metadata.json) | Course metadata for JSON generation |
| [concept-taxonomy.md](concept-taxonomy.md) | Category definitions |
| [quality-metrics.md](quality-metrics.md) | Graph quality validation report |
| [taxonomy-distribution.md](taxonomy-distribution.md) | Distribution analysis |
| [course-description-assessment.md](course-description-assessment.md) | Course description quality score |
