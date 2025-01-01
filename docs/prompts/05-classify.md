# Classify

!!! prompt
    Very Good.  Lets call the number associated with each category the TaxonomyID.
    Next, for each line in the CSV file, add another column that has the primary TaxonomyID of the Concept.
    Return a new CSV file with with 150 rows.

    The CSV file will have the following format:

    1. Column 1: ConceptID
    2. Column 2: ConceptLabel
    3. Column 3: Dependencies
    4. Column 4: TaxonomyID

## Result

```csv
ConceptID,ConceptLabel,DependsOn,TaxonomyID
1,Graph Data Model,,1
2,Node,,1
3,Edge,,1
4,Property,,1
5,Path,,1
10,Data vs Info,1,1
11,Knowledge vs Data,10,1
12,Model vs Algorithm,11,1
14,Graph Futures,1,1
15,Modeling Basics,2|3|4,1
16,Directed Graphs,2|3,1
17,Undirected Graphs,16,1
18,Weighted Edges,3,1
19,Unweighted Edges,18,1
20,Multiplicity,4,1

6,Dependency,2|3,2
7,Graph Schema,1,2
8,Graph Query Lang,1,2
9,ISO GQL,8,2
21,Indexing in Graphs,7,2
22,Graph Traversal,5,2
23,Pattern Matching,22,2
24,Graph Merging,7,2
25,Graph Splitting,24,2
26,Graph Updates,22,2
27,Graph Integrity,1|4,2
28,Graph Constraints,27,2
29,Graph Normalization,28,2
30,Graph Aggregation,29,2
31,Schema Evolution,7|26,2

32,Graph Versioning,31,3
33,Graph Data Import,1,3
34,Graph Data Export,33,3
35,Hierarchical Nodes,2,3
36,Hyperedges,3,3
37,Multi-Graphs,1,3
38,Loops and Cycles,22,3
39,Graph Isomorphism,23,3
40,Graph Sampling,39,3
79,Future Projections,14,3
80,Time Granularity,71,3
121,Building Models,1,3
141,Learning Graphs,1,3
149,Data Lineage,1|4,3
150,Graph Storytelling,90|149,3

61,Location Node,2|4,4
62,Address Node,61,4
63,City Graph,62,4
64,County Graph,63,4
65,State Graph,64,4
66,Metro Region,65,4
67,Urban vs Rural,66,4
68,Road Network,61,4
69,Distance Calc,68,4
70,Geo-Spatial Model,61|5,4
71,Datetime Node,2|4,4
72,Time Tree,71,4
73,Financial Time,72,4
74,Temporal Exceptions,72,4
75,Temporal Indexes,71|21,4

81,Knowledge Graph,1,5
82,SKOS Concepts,81,5
83,Concept Node,2|81,5
84,Labels & Notation,4|83,5
85,Broader Concepts,83,5
86,Narrower Concepts,85,5
87,Concept Schemas,83|31,5
88,Semantic Layers,81,5
89,Concept Hierarchies,83,5
90,Semantic Reasoning,88|87,5
142,Concept Dependency,83,5
143,Content Models,83|95,5
144,Learning Paths,141|142,5
145,Concept Recommender,144,5
146,Intelligent Textbooks,145|95,5

13,LLM Integration,12,6
91,NLP Integration,11|13,6
92,Word Node,2|91,6
93,Sentence Node,92,6
94,Paragraph Node,93,6
95,Document Node,94,6
96,Doc Pipelines,95,6
97,Text Classification,91,6
98,Embeddings,91|92,6
99,WordNet Case,92|83,6
100,Text Summarization,95|98,6
135,Data Mining,1|91,6
116,Similar Attribute,4|115,6
117,Similarity Metrics,116,6
45,License Modeling,4,6

41,Customer Node,2|4,7
42,Individual Customer,41,7
43,Corporate Customer,41,7
44,Organizational Roles,43,7
46,Abuse Detection,23,7
47,Fraud Indicators,46,7
48,Customer Churn,42,7
49,Customer Segments,42|43,7
50,Customer Profiles,49,7
101,Fraud Patterns,47,7
102,AML Modeling,101,7
103,Unusual Relations,23,7
104,Investigation Paths,103,7
105,Suspicious Entities,101,7
119,Merge Rules,24|118,7

51,Product Node,2|4,8
52,Product Listing,51,8
53,Product Group,52,8
54,Taxonomy Node,4,8
55,Multi-Taxonomy,54,8
56,Product Classification,55,8
57,Product Metadata,56,8
58,SKU Linking,51,8
59,Catalog Graph,51,8
60,Product Bundles,53,8
122,Manufacturing Graph,1,8
123,Supply Chain Node,2|4,8
118,Duplicate Detection,117,8
120,Identity Graph,115,8
115,Entity Resolution,1,8

106,Threat Modeling,22,9
107,Vulnerability Node,2|106,9
108,Threat Prioritization,107,9
109,Person Roles,2|44,9
110,Data Movement Anomaly,105,9
111,Patient Node,2|4,9
112,Disease Spread,111|22,9
113,Healthcare Costs,111,9
114,Value-Based Care,113,9
129,Process Graphs,1|2,9
130,Workflow Events,129,9
131,Rule Engine,1,9
132,Rule Workflow,131|130,9
133,Decision Tree,131,9
134,Validation Rules,133,9

124,Scene Graph,2|3,10
125,Pixel Classes,124,10
126,Motion Prediction,124|72,10
127,Autonomous Vehicles,126,10
128,Robotics Integration,124,10
136,Rule Exchange,132,10
137,Code Graphs,1,10
138,Call Graph,137,10
139,Coverage Graph,138,10
140,Code Quality,139,10
147,Correlation vs Cause,10,10
148,Causal Graph,147,10
76,Temporal Queries,75,10
77,Temporal Alignments,76,10
78,Historical Graphs,72,10
```