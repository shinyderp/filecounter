import { readFile } from 'node:fs/promises';

const filePath = process.argv[2];


const printError = (message) => {
    process.exitCode = 1;
    return console.error(message);
}


async function main() {

    if (!filePath) {
        return printError("error: file missing. Usage: node script.js <filename>")
    }

    try {
        const text = await readFile(process.argv[2], "utf-8")

        const lines = text.split(/\r?\n/).length;
        const words = text.split(/\s+/).length;
        const chars = text.length;


        console.log(`File: ${filePath}`);
        console.log(`Lines: ${lines}`)
        console.log(`Words: ${words}`);
        console.log(`Characters: ${chars}`);

    } catch (err) {
        printError(`error: could not read file: ${filePath}\nDetails: ${err.message}`)
    }
}

main();