const helloFunction = (delay) => {
    console.log(`Hello after ${delay} seconds`);
}

setTimeout(helloFunction, 4 * 1000, 4);
setTimeout(helloFunction, 8 * 1000, 8);