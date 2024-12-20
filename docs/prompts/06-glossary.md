# Generating a Glossary from a Concept Graph

## Prompt

In this project, you will find a file called "graph-modeling.json".  It contains a concept graph for a course on Graph Data Modeling.  For each node in this JSON file, please generate an ISO definition and also give an example of its use within the course.  Do not repeat the concept name in the definition.

Use the following format:

#### ConceptName

Text of the definition of the concept in full English sentences.

**Example:** Text of example.


## Fixing Defintions that Include the ConceptLabel

Replace: ^A \*\*(.+?)\*\* is a
With: A

(.+?) refers to

## Finding Glossary Entries that are Plural

\b\w+s\n