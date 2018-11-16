# node-tuto-ibm
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
1)Getting Started
2)Node Package Manager
3)Working With Web Servers
4)Modern JavaScript
5)Modules and Concurrency
6)Working With the OS
