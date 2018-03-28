---
title: Slizaa
---

<div class="container vertical-center">
    <div class="jumbotron">
        <div class="row">
            <div class="col-12">
                   <img class="mx-auto d-block" src="/img/slizaa_on_macbook.png" width="450"></a>
            </div>
        </div>
        <div class="lead text-center mt-3">A Free and Open Source Workbench for Software Dependency Analysis.</div>
        <div class="text-center mt-4">
            <a href="/documentation/quick_start/" class="btn btn-primary mr-2">Quick Start<span class="pl-2 fa fa-angle-double-right" /></a>
            <a href="/download/" class="btn btn-secondary">Download <span class="pl-2 fa fa-download" /></a>
        </div>
    </div>
</div>

<div class="container border-bottom pb-4">
    <div class="row ">
        <div class="col-sm">
            <h5>What is it?</h5>
            <div><em>Slizaa</em> is a free and open source workbench for software dependency analysis. <em>Slizaa</em> provides a set of sophisticated tools (e.g., a dependency structure matrix, a graph view or a powerful cross referencer) to interactively explore and visualize the dependencies and the structure of your application.</div>
            <div class="mt-2">On top of that, <em>Slizaa</em> allows you to search for arbitrary patterns in your code base using the simple but powerful Cypher query language directly from within the workbench.</div>
        </div>
        <div class="col-sm">
            <h5>Why?</h5>
            <div>Maintainability of software is inversely proportional to the number of dependencies. Without continuous surveillance applications sooner or later become hard to maintain due to unwanted 'accidental' dependencies.</div>
            <div class="mt-2">For a continuous and efficient monitoring of your applications dependency structure, tool support is crucial. <em>Slizaa</em> provides an easy to use solution for dependency analysis and visualization.</div>
        </div>            
        <div class="col-sm">
            <h5>How?</h5>
            <div><em>Slizaa</em> allows you to scan arbitrary (Java-based) applications and store their structural information in a graph database backend. All these structural information is accessible directly from within <em>Slizaa</em> using the integrated Cypher query console.</div>
            <div class="mt-2">As searching for patterns in a flat graph can be a confusing and cluttering task, <em>Slizaa</em> provides customizable mappings to create hierarchical views of the stored software structure graph. Using hierarchical views makes exploring your application's architecture as easy as browsing code in your favorite IDE.</div>
        </div>
    </div>
</div>

<div class="container border-bottom p-4">
    <div class="row">
        <div class="col-md-7">
        <h2>Dependency Structure Matrix (DSM).</h2>
        <p>The Dependency Structure Matrix (DSM) is a compact and straightforward visual representation of artifacts and their dependencies in the form of a square matrix.</p>
        <p>Slizaa provides an efficient DSM viewer to visualize your project's dependencies at any level (e.g., subsystems, packages or files).</p>
        </div>
        <div class="col-md-5">
        <img class="img-fluid mx-auto" src="/img/slizaa_DSM.png">
        </div>
    </div>
</div>

<div class="container border-bottom p-4">
    <div class="row">
        <div class="col-md-5">
            <img class="img-fluid mx-auto" src="/img/slizaa_GraphViewer.png">
        </div>
        <div class="col-md-7">
            <h2>Graph Viewer.</span></h2>
            <p>A Dependency Graph is a directed graph representing dependencies of several artifacts towards each other.</p>
            <p>Slizaa's Dependency Graph Viewer visualizes the dependencies of your project using a powerful layout algorithm based on the Eclipse Layout Kernel (ELK).</p>
        </div>
    </div>
</div>

<div class="container border-bottom p-4">
    <div class="row">
        <div class="col-md-7">
            <h2>Cross Referencer.</span></h2>
            <p>The Cross Referencer is a high-efficient tool to investigate the incoming or outgoing dependencies of your system's artifacts.</p>
            <p>Starting with higher-level elements like sub-systems or modules, you can drill-down on arbitrary levels (e.g., the type referenced from within a single method).
            Focus on just those dependencies you're currently interested in by cropping your current selection with the Cross Rerencer's 'crop-selection' tool.</p>
        </div>
        <div class="col-md-5">
            <img class="img-fluid mx-auto" src="/img/slizaa_CrossReferencer.png">
        </div>
    </div>
</div>

<div class="container border-bottom p-4">
    <div class="row">
        <div class="col-md-5">
            <img class="img-fluid mx-auto" src="/img/slizaa_CypherConsole.png">
        </div>
        <div class="col-md-7">
            <h2>Cypher Query Console.</h2>
            <p>Write your own custom queries and execute them against the Slizaa database using the Cypher Query Console.</p>
            <p>The Cypher Query Console fully supports the latest OpenCypher specification and provides syntax and semantic coloring, error checking and auto-completion.  
        </div>
    </div>
</div>

<div class="container border-bottom p-4">
    <div class="row">
        <div class="col-md-7">
            <h2>Out-of-the-box support for Neo4j.</h2>
            <p>You can use Slizaa with any graph database that supports both the<a href="https://boltprotocol.org">Bolt network protocol</a> and the <a href="https://www.opencypher.org">Cypher graph database query language</a>.
            <p>However, Slizaa comes with out-of-the-box support for embedding  <a href="https://neo4j.com">Neo4j</a> as an in-process database. Simply install the 'Slizaa Neo4j Backend' extension from within the workbench using the Slizaa extension dialog (note that Neo4j database extension as well as Slizaa's Java parser 'JType' are licensed under the GPL 3.0).</p>
        </div>
        <div class="col-md-5">
            <img class="img-fluid mx-auto" src="/img/slizaa_BackEndExtensions.png">
        </div>
    </div>
</div>