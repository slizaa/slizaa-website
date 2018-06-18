---
title: "Step 3: Execute Cypher Queries"
date: 2018-04-07
publishdate: 2018-04-07
documentationCategories: ["Quick Start"]
documentationCategories_weight: 3
---

Learn how to use the integrated QueryView to execute Cypher Queries.<!--more--> 

## Preconditions

To execute cypher queries against Slizaa's internal database, make sure that

1. ... you have installed the graph database backend for Slizaa,
2. ... you have created a Slizaa project and parsed a software system,
3. ... the database associated with the Slizaa project is up and running. 

## Using the Cypher Query view

The Cypher Query view is part of the 'Dependency Visualisation' perspective. You can execute arbitrary cypher queries by simply typing them into the embedded cypher editor and pushing the green arrow (alternatively you can hit `Strg+Alt+Return` or `⌘+Alt+Return` within the cypher query view). The result of the executed query will be shown in Query Result View that opens up automatically.

The embeded editor provides full support for syntax highlighting and code completion. 

{{< figure src="/img/documentation/quick_start/cypher/cypher_query_view.png" width="90%" title="Parse a software system" >}}

## Saving queries

You can save the current query by hiting `Strg+Alt+S` or pushing the the 'Save' symbol in the upper right corner of the Cypher Query view.

## Example cypher queries

```
MATCH (f:Module) RETURN f.fqn
```

```
MATCH (t:Type) RETURN count(t)
```

```
MATCH (t:Type)-[:EXTENDS]->(super:TypeReference) WHERE super.name ENDS WITH 'Exception' RETURN t.fqn, super.fqn
```