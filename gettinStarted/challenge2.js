let counter = 0;
const HelloFunc = () => {
    console.log('Hello World');
    counter += 1;

    if(counter === 5){
        console.log('Done');
        clearInterval(funcID);
    }
}

// setInterval has an ID that we can use in clearInterval to stop the process
let funcID = setInterval(HelloFunc, 1000);