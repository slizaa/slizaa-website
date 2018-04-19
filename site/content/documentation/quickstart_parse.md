---
title: "Step 2: Parse your Application"
date: 2018-03-09
publishdate: 2018-03-09
documentationCategories: ["Quick Start"]
documentationCategories_weight: 2
---

Learn how to parse your application using slizaa.<!--more--> 


Before you can parse and analyze applications, you must to create a Slizaa project. A *Slizaa project* specifies which artifacts should be parsed and analyzed. It also acts as a container for slizaa-specific resources like cypher query files, custom graph mapping definitions and so on.

## Create a Slizaa project
To create a new Slizaa project, right-click in the project explorer and select `New → Slizaa Project…`. A Slizaa project is always also an Eclipse JDT project, as a slizaa project is configured programmatically by providing a Java-based configuration. The Slizaa project wizard automatically creates a valid configuration class that can be further customized if needed.

{{< figure src="/img/documentation/quick_start/parse/example_project.png" width="100%" title="An example project" >}}

## Define the content to be parsed
One of the primary tasks of the configuration class is to specify the content that should be parsed and analyzed by Slizaa. By default, the slizaa project contains a project-relative directory `_content` that acts as a parent folder for the artifacts that should be analyzed. Initially this folder contains the guava library as an example content. Just copy all Jars you want to analyze into this folder. 

## Parse the software system
To parse the specified content, choose `Parse` from the project's pop-up menu.

{{< figure src="/img/documentation/quick_start/parse/parse_the_project.png" width="100%" title="Parse a software system" >}}

The parse process scans the specified JARs and stores the extracted information in a project-local graph database. Once the parse process has finished, the graph database is running and can be accessed via the BOLT protocol (the default URL is `bolt://localhost:5001`). 

**Note:** It is only necessary to parse (or re-parse) an application if the underlying content (or the content definition) has changed. Once an application has been parsed, you can skip the parse process and start (or restart) the embedded graph database directly by selecting `Start/Connect Database` from the project's context menu. 

