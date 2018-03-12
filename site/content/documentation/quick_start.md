---
title: Quick Start
date: 2018-03-09
publishdate: 2018-03-09
categories: ["Overview"]
categories_weight: 1
---

This is a short summary.<!--more--> 

## Step 1: Download and install

Download the latest slizaa distribution here. You have to unpack the platform-specific archive to an arbitrary folder on your local disc. Start slizaa by double-clicking the slizaa executable that you can find in the installation directory.

### Installing the slizaa extensions
When you start slizaa fort he first time, the „Install extensions dialog“ opens up automatically. The „Install extensions“ dialog allows you to install the required graph database backend and several parsers (currently only the Java language is supported). You can also select the extensions dialog later at any time by choosing Help → Install slizaa extensions.
[[image]]

If you start slizaa for the first time, it opens the 'Graph Mapping' perspective as the default perspective (see figure 1).

## Step 2: Parse  

### Create a slizaa project
To analyze software structure graphs with slizaa, you first have to create a slizaa project. A slizaa project acts as a container for slizaa-specific resources like cypher query files, custom graph mapping definitions and so on. It also contains the project configuration that specifies which artifacts should be parsed and analyzed.
To create a new project, right-click in the project explorer and select New → slizaa Project… (see Figure 3).
A slizaa project is always also an Eclipse JDT project, as the slizaa project is configured programmatically by providing a Java-based configuration class from within slizaa. The Slizaa project wizard automatically creates valid configuration class for you that can be further customized if needed.

### Define the project content
The primary task oft he Java-based project configuration is to specify which content (e.g., jars) should be parsed and analyzed by Slizaa. In principle, Slizaa can parse content from arbitrary locations, but by default, a slizaa project specifies a project-relative directory called „_content“ as the parent folder for your artifacts. Just copy the Jars that you want to analyze in this folder. Directly after the project‘s creation, this folder contains the guava library as an example content. 
To parse the content and create the graph database, choose „Parse“ from the project pop-up menu.