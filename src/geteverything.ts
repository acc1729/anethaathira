"use strict";

import { readJsonSync, writeFileStrSync, readFileStrSync, walkSync } from 'https://deno.land/std/fs/mod.ts';

const fileList: Array<string> = [
    "..\\dieties\\dieties.md",
    "..\\places\\states\\country.md",
    "..\\characters\\people.md",
    "..\\campaign01\\thusfar.md"
];

function reHeader(text: string): string {
    const re: RegExp = /# /g;
    return text.replace(re, "## ");
}

let output: string = "";

for (let file of fileList) {
    const data: string = readFileStrSync(file);
    output = output.concat(data);
}
output = reHeader(output);


writeFileStrSync("everything.md", output);
