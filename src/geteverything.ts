"use strict";

import * as fs from "fs";
import * as path from "path";

const fileList: Array<string> = [
    "..\\dieties\\dieties.md",
    "..\\places\\states\\country.md",
    "..\\characters\\people.md",
    "..\\scenarios\\basic.md"
];

function reHeader(text: string): string {
    const re: RegExp = /# /g;
    return text.replace(re, "## ");
}

let output: string = "";
for (let file of fileList) {
    const filePath = path.join(__dirname, file)
    const data: string = fs.readFileSync(filePath).toString();
    output.concat(data);
}

output = reHeader(output);

fs.writeFileSync("everything.md", output);
