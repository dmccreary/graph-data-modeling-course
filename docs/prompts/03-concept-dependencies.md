# Concept Enumeration

!!! prompt
    Now, let's just focus on these 150 concepts.
    Please create a fully connected concept dependency graph
    for the 150 concepts in this course.
    In this step, for each Concept on this list below, create
    single line is a CSV file that list the other concepts on which it depends.  
    If a concept depends on a specific concept that is not listed,
    then we will need to add it to the end of the list as a new concept.
    This will help us determine the teaching order of the Concepts.

    Return the new list as a CSV file using the following format:

    1. The first column in the CSV file is a numeric ConceptID you assigned in the list above.
    2. The second column is the ConceptLabel.
    3. The third column is a pipe-delimited list of the ConceptIDs that the concept depends upon.

    For example, the concept of a Dependency Graph depends on knowledge of nodes and edges:

    1,Graph Data Model
    2,Node
    3,Edge
    4,Property
    5,Path
    6,Dependency Graph,2|3

    Check your results to make sure that all concepts are connected to at least one other concept unless they are a foundational concept like Graph Data Model, Node, Edge, Property or Path.

    Foundation Concepts are concepts that have no dependant concepts in this set.  
    They have an empty third column.

## Response

```csv
ConceptID,ConceptLabel,DependsOn
1,Graph Data Model,
2,Node,
3,Edge,
4,Property,
5,Path,
6,Dependency,2|3
7,Graph Schema,1|4
8,Graph Query Lang,1|2
9,ISO GQL,8
10,Data vs Information,1
11,Knowledge vs Data,10
12,Model vs Algorithm,11|2
13,LLM Integration,12
14,Graph Futures,1
15,Modeling Basics,2|3|4
16,Directed Graphs,2|3
17,Undirected Graphs,16
18,Weighted Edges,3
19,Unweighted Edges,18
20,Multiplicity,4
21,Indexing in Graphs,7
22,Graph Traversal,5
23,Pattern Matching,22
24,Graph Merging,7
25,Graph Splitting,24
26,Graph Updates,22
27,Graph Integrity,1|4
28,Graph Constraints,27
29,Graph Normalization,28
30,Graph Aggregation,29
31,Schema Evolution,7|26
32,Graph Versioning,31
33,Graph Data Import,1
34,Graph Data Export,33
35,Hierarchical Nodes,2
36,Hyperedges,3
37,Multi-Graphs,1
38,Loops and Cycles,22
39,Graph Isomorphism,23
40,Graph Sampling,39
41,Customer Node,2|4
42,Individual Customer,41
43,Corporate Customer,41
44,Organizational Roles,43
45,License Modeling,4
46,Abuse Detection,23
47,Fraud Indicators,46
48,Customer Churn,42
49,Customer Segments,42|43
50,Customer Profiles,49
51,Product Node,2|4
52,Product Listing,51
53,Product Group,52
54,Taxonomy Node,4
55,Multi-Taxonomy,54
56,Product Classification,55
57,Product Metadata,56
58,SKU Linking,51
59,Catalog Graph,51
60,Product Bundles,53
61,Location Node,2|4
62,Address Node,61
63,City Graph,62
64,County Graph,63
65,State Graph,64
66,Metro Region,65
67,Urban vs Rural,66
68,Road Network,61
69,Distance Calc,68
70,Geo-Spatial Model,61|5
71,Datetime Node,2|4
72,Time Tree,71
73,Financial Time,72
74,Temporal Exceptions,72
75,Temporal Indexes,71|21
76,Temporal Queries,75
77,Temporal Alignments,76
78,Historical Graphs,72
79,Future Projections,78
80,Time Granularity,71
81,Knowledge Graph,1
82,SKOS Concepts,81
83,Concept Node,2|81
84,Labels & Notation,4|83
85,Broader Concepts,83
86,Narrower Concepts,85
87,Concept Schemas,83|31
88,Semantic Layers,81
89,Concept Hierarchies,83
90,Semantic Reasoning,88|87
91,NLP Integration,11|13
92,Word Node,2|91
93,Sentence Node,92
94,Paragraph Node,93
95,Document Node,94
96,Doc Pipelines,95
97,Text Classification,91
98,Embeddings,91|92
99,WordNet Case,92|83
100,Text Summarization,95|98
101,Fraud Patterns,47
102,AML Modeling,101
103,Unusual Relations,23
104,Investigation Paths,103
105,Suspicious Entities,101
106,Threat Modeling,22
107,Vulnerability Node,2|106
108,Threat Prioritization,107
109,Person Roles,2|44
110,Data Movement Anomaly,105
111,Patient Node,2|4
112,Disease Spread,111|22
113,Healthcare Costs,111
114,Value-Based Care,113
115,Entity Resolution,1
116,Similar Attribute,4|115
117,Similarity Metrics,116
118,Duplicate Detection,117
119,Merge Rules,24|118
120,Identity Graph,115
121,Building Models,1
122,Manufacturing Graph,1
123,Supply Chain Node,2|4
124,Scene Graph,2|3
125,Pixel Classes,124
126,Motion Prediction,124|72
127,Autonomous Vehicles,126
128,Robotics Integration,124
129,Process Graphs,1|2
130,Workflow Events,129
131,Rule Engine,1
132,Rule Workflow,131|130
133,Decision Tree,131
134,Validation Rules,133
135,Data Mining,1|91
136,Rule Exchange,132
137,Code Graphs,1
138,Call Graph,137
139,Coverage Graph,138
140,Code Quality,139
141,Learning Graphs,1
142,Concept Dependency,83
143,Content Models,83|95
144,Learning Paths,141|142
145,Concept Recommender,144
146,Intelligent Textbooks,145|95
147,Correlation vs Causation,10
148,Causal Graph,147
149,Data Lineage,1|4
150,Graph Storytelling,90|149
```