'use strict';

import gatherAndPrint from './../src/globber'

interface Person {
    name: string;
    region: string;
    title: string;
    details: Array<string>;
    patron: string;
    relations: Array<string>;
};

interface Options {
    hide: boolean,
    categories: Array<string>
}

const options: Options = {
    hide: process.argv[2] === "true" ? true : false,
    categories: process.argv.slice(3),
}

function jsonToPerson(person: Person, options: Options): string | void {
    const { hide, categories } = options;
    if (hide && person.name.startsWith("!")) return;
    let relations = [];
    for (let relation of person.relations) {
        if (hide && relation.startsWith("!")) continue;
        relations.push(relation);
    }
    let details = [];
    for (let detail of person.details) {
        if (hide && detail.startsWith("!")) continue;
        details.push(detail);
    };
    let return_string = "";
    return_string.concat(`## ${person.name}`);

    return (
        `## ${person.name}

### Region: ${person.region}
### Title: ${person.title}

${details.join("\n")}
`
    );
};

gatherAndPrint(jsonToPerson, options, "# People of Anethaathira\n", 'people.md');
