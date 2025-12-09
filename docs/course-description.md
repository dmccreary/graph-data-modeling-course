# Graph Data Modeling Course Description for the 

This website contains material for a 14-week undergraduate course on graph data modeling.

Our intent is to not require any prerequisites for this course so a wide range
of students can use this course for self-paced learning.  However, instructors
make require students to have a basic understanding of datatypes typically taught
in an undergraduate data structures course.  These datatypes include the use of strings, integers, floats, sets, lists, and arrays as datatypes use in attributes.

**Course Title:** Graph Data Modeling

## Summary

This course explores the foundational principles and advanced techniques of graph data modeling, to progressively develop students' skills in graph data modeling. Students will begin by understanding the fundamental concepts and terminology, then advance to applying graph modeling strategies across diverse domains, analyzing complex relationships, evaluating modeling trade-offs, and ultimately creating robust, domain-specific graph data models.

Our assumption is that all students will have access to a generative AI system such as Anthropic Claude, OpenAI's ChatGPT, Google's Gemini, Cursor or Windsurf.  These tools are important because they allow students to focus on the high-level tradeoff analysis of creating high-quality data models that are tuned to fit the needs of a specific organization.  AI tools take the drudgery out
of learning graph database design.

As a consequence of our AI-first strategy, this book has an extensive collection of sample prompts that can be used to bring out the best in your AI collaborators.  The goal is that even new students will be able to create detailed graph models that can quickly show how their design meets
detailed requirements of a task.

## Course Structure

The first chapter introduces the concept of graph data modeling and why it is so
critical in the age of AI.  We discuss the trends around the emerging GraphRAG
pattern and the need to rapidly convert a collection of test documents into
an organization's central nervous system that can respond in real-time to
natural language queries.

After our introduction chapter, we present the basics of what graph databases are
and the core structures of a graph database.  This chapter may be skimmed skipped by students
that have already taken our [introduction to graph databases](https://dmccreary.github.io/intro-to-graph/) course.

We then focus in on the key steps in creating a data model that meets the needs of large complex organizations.  We focus on creating a list of critical questions that the graph must
be able to answer about the world and how we use this ordered and ranked database
of questions to derive the key nodes and edges of a graph and their properties.

We then take a step-by-step example-driven approach to modeling common problem such as
how do we model customers, products, space (geo-locations), time, documents, concepts and language,

After a set of general examples we then present industry-specific models from industries such as banking, finance, healthcare, manufacturing and supply chains.

Next we dive into how a good data model can help us resolve thorny problems such as problems such as entity resolution, building digital twins, modeling 3D real-world scenes, modeling complex rules, modeling code, modeling security threats, modeling processes and workflows, modeling business events, event mining, modeling how students learn, modeling causality and systems, modeling the linage of data, modeling metadata.

Next we model some of the most difficult problems such as bitemporal models so we model when the real world and our model of the world diverge and how we can record both recorded system time as well as real-world time.

After this we address the challenges of how models evolve and how we prioritize what to model next in a world where requirements are changing but our graph capabilities continue to grow.

We conclude with chapters that focus on how the human brain models the world with reference frames and then speculate how the ability of graph databases to model the real world will assist in future advances in AI capabilities.

## Topics Covered

All of the topics covered are listed in the [Covered Concepts](./concepts-covered.md) file.

## Topics Not Covered

We will not cover the following topics:

1. openCypher syntax
1. Deep Neural Networks
2. Graph Neural Networks
3. The tradeoffs of vector databases
4. Authentication of Users
5. Query Performance
6. Query Benchmarking
7. Promoting Graph Models


## Learning Objectives

Upon successful completion of the course, students will be able to:

1.  **Remember** key graph modeling concepts, including nodes, edges, properties, and paths.
2.  **Understand** the significance of graph data models in representing real-world systems and relationships.
3.  **Apply** graph modeling techniques to domains such as customer management, healthcare, supply chains, and fraud detection.
4.  **Analyze** domain-specific requirements to identify optimal graph structures and relationships.
5.  **Evaluate** trade-offs in architectural and performance considerations for graph models.
6.  **Create** advanced and scalable graph models for dynamic and evolving systems, including digital twins, causality, and metadata.

## Topics Covered

-   **Foundations of Graph Data Modeling:** Introduction to graph concepts, ISO GQL, and future trends.
-   **Core Concepts:** Nodes, edges, properties, and paths.
-   **Domain-Specific Modeling:** Customer data, products, healthcare, security threats, and fraud.
-   **Advanced Topics:** Bitemporal modeling, causality, supply chains, and metadata.
-   **Future Directions:** Model evolution, scalability, sustainability, and AI integration.

## Course Activities and Assessments

-   Case studies on real-world graph applications.
-   Hands-on exercises with graph databases and modeling tools.
-   Group projects to design domain-specific graph models.
-   Quizzes and exams assessing conceptual understanding and practical skills.
-   A capstone project focused on creating a comprehensive graph model for a chosen domain.

## Recommended Audience

This course is designed for students in computer science, data science, or related fields who are interested in mastering graph databases and their applications in modern data-driven systems.

## Prompt to Generate Course Descriptions

You can find out more about how to generate your own course descriptions
by going to our [Coursed Description Prompt](./prompts/01-course-description.md) page.