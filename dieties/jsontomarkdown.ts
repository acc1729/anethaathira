'use strict';

const fs = require('fs');

interface Diety {
    name: string;
    descriptions: Array<string>;
    spheres: Array<string>;
    adherents: Array<string> | null;
};

function jsonToMarkdown(diety: Diety): string | void {
    if (diety.name.startsWith("!")) return;
    let spheres = [];
    for (let sphere of diety.spheres) {
        if (sphere.startsWith("!")) continue;
        spheres.push(sphere);
    };
    let descriptions = [];
    for (let description of diety.descriptions) {
        if (description.startsWith("!")) continue;
        descriptions.push(description);
    };
    return (
        `##${diety.name}

###Spheres: ${spheres.join(", ")}

${descriptions.join("\n")}
`
    );
};

let files: Array<string> = fs.readdirSync('./').filter((file: string): boolean => { return file.endsWith('.json') });
let payload: Array<string | void> = [`# Dieties and Greater Beings of Anethaathira${"\n"}`];
files.forEach(file => {
    let rawdata = fs.readFileSync(file).toString();
    let diety = JSON.parse(rawdata);
    payload.push(jsonToMarkdown(diety));
});

fs.writeFileSync('dieties.md', payload.join('\n'));
