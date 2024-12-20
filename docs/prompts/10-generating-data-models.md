# Generating Data Models with Vis.js

# Graph Data Modeling Course Templates

These prompts are used to generate sample graph data models using templates.
As the models get more complex the visualization tools also need to be
more complex.

## The Simple Social Network

!!! prompt
    Create a vis.js template of a social network.
    Nodes: Person
    Edges: KNOWS (connects Person to Person)

[Social Network](../sims/templates/social-network-model.html)

Note that this version zooms into the person with a scale of 6.

## Simple Customer Graph

``` prompt
    Please modify the template program to generate a customer graph.  Here are the key nodes:

    Customer - an individual person that purchases a product
    OnlineOrder - a transaction where they purchase one or more products
    Product - a product that is purchased in an OnlineOrder

    Please add the relationships between these nodes and give them a uppercase label and title that describes the relationships.

[Customer Model](../sims/templates/customer-model.html)
