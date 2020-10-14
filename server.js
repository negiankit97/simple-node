function sleep(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
async function main() {
    while (true) {
        console.log('Testing Ci build');
        await sleep(3000);
    }
}

main();