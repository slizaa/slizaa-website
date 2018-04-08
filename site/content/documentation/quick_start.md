---
title: "Quick Start"
date: 2018-03-09
publishdate: 2018-03-09
documentationCategories: ["Overview"]
documentationCategories_weight: 1
---

Only have a few minutes? The Quick Start Guide is intended as a basic guide to help you get started using Slizaa!<!--more--> 

## Step 1: Download and install

Slizaa is a desktop application and runs on Windows, Mac and Linux (note that Slizaa requires a 64-Bit JRE/JDK 1.8 or higher).

### Install Slizaa
The Slizaa desktop application is distributed as a platform specific archive. You can download the latest slizaa distribution [here](/download/). Please unpack the archive to an arbitrary folder on your local disc. Start slizaa by double-clicking the slizaa executable that you can find in the installation directory.

### Install the Slizaa extensions
When you start slizaa fort he first time, the `Install extensions dialog` opens up automatically. This dialog allows you to install the required graph database backend and several parsers (currently only the Java language is supported). You can also select the extensions dialog later at any time by choosing `Help → Install slizaa extensions`.

Make sure that you select both the Slizaa Neo4j Backend and the Slizaa JType extension!

{{< figure src="/img/documentation/quick_start/extension_dialog.png" width="70%" title="Slizaa extensions dialog" >}}

## Step 2: Parse your application 

Before you can parse and analyze applications, you must to create a slizaa project. A *slizaa project* specifies which artifacts should be parsed and analyzed. It also acts as a container for slizaa-specific resources like cypher query files, custom graph mapping definitions and so on.

### Create a Slizaa project
To create a new Slizaa project, right-click in the project explorer and select `New → Slizaa Project…`. A Slizaa project is always also an Eclipse JDT project, as a slizaa project is configured programmatically by providing a Java-based configuration. The Slizaa project wizard automatically creates a valid configuration class that can be further customized if needed.

{{< figure src="/img/documentation/quick_start/example_project.png" width="100%" title="An example project" >}}

### Define the content to be parsed
One of the primary tasks of the configuration class is to specify the content that should be parsed and analyzed by Slizaa. By default, the slizaa project contains a project-relative directory `_content` that acts as a parent folder for the artifacts that should be analyzed. Just copy all Jars you want to analyze into this folder. Initially this folder contains the guava library as an example content. 

### Parse the software system
To parse the specified content, choose `Parse` from the project's pop-up menu.

{{< figure src="/img/documentation/quick_start/parse_the_project.png" width="100%" title="Parse a software system" >}}

It is only necessary to parse (or re-parse) an application if the underlying content definition has changed. You can start (or restart) the embedded graph database at any time by selecting `Start/Connect Database` from the project's context menu. 

## Step 3: Create a hierarchical Graph

{{< figure src="/img/documentation/quick_start/create_hierarchical_graph.png" width="100%" title="Create a hierarchical graph" >}}

{{< figure src="/img/documentation/quick_start/hierarchical_graph.png" width="100%" title="A hierarchical graph" >}}

## Step 4: Visualize your system 
{{< figure src="/img/documentation/quick_start/DSM_view.png" width="100%" title="The Dependency Structure Matrix (DSM)" >}}

{{< figure src="/img/documentation/quick_start/graph_view.png" width="100%" title="The graph view" >}}
