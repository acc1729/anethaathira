'use strict';

import gatherAndPrint from './../src/globber'

interface Diety {
    name: string;
    descriptions: Array<string>;
    spheres: Array<string>;
    adherents: Array<string> | null;
};

interface Options {
    hide: boolean,
    categories: Array<string>
}

const options: Options = {
    hide: process.argv[2] === "true" ? true : false,
    categories: process.argv.slice(3),
}

function jsonToDiety(diety: Diety, options: Options): string | void {
    const { hide, categories } = options;
    if (hide && diety.name.startsWith("!")) return;
    let markdown = `### {}`;
    for (let category of categories) {

    }


    let spheres = [];
    for (let sphere of diety.spheres) {
        if (hide && sphere.startsWith("!")) continue;
        spheres.push(sphere);
    };
    let adherents = [];
    for (let adherent of diety.adherents) {
        if (hide && adherent.startsWith("!")) continue;
        adherents.push(adherent);
    }
    let descriptions = [];
    for (let description of diety.descriptions) {
        if (hide && description.startsWith("!")) continue;
        descriptions.push(description);
    };
    let return_string = "";
    return_string.concat(`## ${diety.name}`);

    return (
        `## ${diety.name}

### Spheres: ${spheres.join(", ")}

${descriptions.join("\n")}
`
    );
};

gatherAndPrint(jsonToDiety, options, "Dieties of Anethaathira\n", 'dieties.md');
