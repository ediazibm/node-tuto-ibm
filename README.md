# node-tuto-ibm
# This is not an IBM tutorial, this is just a bunch of notes and code that I wrote from a Pluralsight tutorial.
# The author's name is Samer Buna
0)Intro
    - What is Node JS?
        - Is JS on your backend servers
        - A wrapper around a VM like V8
        - When you write JS through Node, Node will pass your JS to V8, V8 will execute that JS and tell Node what the result is, and Node will make the result available to you.
        - A wrapper around V8 with built-in modules providing rich features through easy-to-use asynchronous APIs
    - Why Node?
        - Wrapper around V8 (execute JS)
        - Built-in modules (fs, http, crypto, zip, ..)
        - Asynchronous APIs (no threads)
        - C++ addons
        - Debugger and other utilities
        - NPM
        - Module dependency manager
        - In node we build simple, small, single process bulding blocks, nodes, that can be organize with good networking protocols to have them communicate with each other and scale up to build large distributed programs.
    - What is a Callback?
        - A function that Node will "call back" at a later point in the time of the program.
        - That is done through an async method.
        - function Esteban(readyLatte){
            // drink readyLatte
        }
        starbucks.makeMeALatte(Esteban);
    - What is a Promise?
        - I promise you a chick
        const egg = chicken.makeChick(); // It's a promise!
        egg
            .then(chick => raiseChick()) // Success outcome
            .catch(badEgg => throw badEgg) // Fail outcome
1)Getting Started
    - REPL: Read, Eval, Print, Loop
    - .help: it will print you some help commands into the REPL session.
    - "require" function is what you use to manage the dependencies of your programs.
    - Working with Timers
        - setTimeout (delay the execution of other functions which they receive as arguments)
        - setInterval (repeat the execution)
        - clearTimeOut(cancel the setTimeout process)
        - clearInterval(cancel the setInterval process)
2)Modern JavaScript
    - Variables and Block Scopes
    - Arrow Functions
    - Object Literals
    - Destructing and Rest/Spread
    - Template Strings
    - Classes
    - Promises and Async/Await
3)Node Package Manager
    - Enables JS script developer to share their code, re-use their code, and re-use the code from others.
    - Official node paclage management
    - What is a package?
        - AKA module
        - Is a folder with a bunch of JS files.
    - update npm: `npm install -g npm`
    - package.json/package-lock.json
        - The package json file is the one file that you'll see in every npm package.
        - It's a json file that can be used to provide information about a package.
        - It's required by npm
    - install modules into devDependencies: `npm install -D`
    - install global: `npm i -g`
    - install local: `npm install <name of the package>`
4)Modules and Concurrency
5)Working With Web Servers
6)Working With the OS
