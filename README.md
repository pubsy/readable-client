# readable-client — the client app for Readable API

This project is a web application which is a front-end to Readable API

## Getting Started

To get you started you can simply clone the readbale-client repository and install the dependencies:

### Prerequisites

You need git to clone the readbale-client repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize the app. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone readbale-client

Clone the angular-seed repository using [git][git]:

```
https://github.com/pubsy/readable-client.git
cd readable-client
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

`npm` is preconfigured to automatically run `bower` so you can simply do:

```
npm install
```

### Run the Application

The project is preconfigured with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.