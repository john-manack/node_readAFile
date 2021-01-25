const fs = require('fs');

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("filename:", filename => {
    readline.close();
    fs.readFile(filename, 'utf8', (error, data) => {
        if (error) {
            console.log(error.message);
        } else {
            console.log(data.toUpperCase());
        }
    })
})