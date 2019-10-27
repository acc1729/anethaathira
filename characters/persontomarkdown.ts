'use strict';

import gatherAndPrint from './../src/globber.ts'

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
    hide: Deno.args[1] === "true" ? true : false,
    categories: Deno.args.slice(2),
}

function jsonToPerson(person: Person, options: Options): string | void {
    const { hide, categories } = options;
    let relations = [];
    for (let relation of person.relations) {
        relations.push(relation);
    }
    let details = [];
    for (let detail of person.details) {
        details.push(detail);
    };
    let return_string = "";
    return_string.concat(`## ${person.name}`);

    if (hide) {
        if (person.name.startsWith('!')) {
            return ``;
        }
        details = details.filter((textLine: string): boolean => { return !textLine.startsWith('!') });
    }

    let payload = (
        `## ${person.name}

### Region: ${person.region}
### ${person.title}

${details.join("\n")}
`);
    payload = payload.replace(/!/g, "");
    return payload;
};
console.log(`Hello.`)
gatherAndPrint(jsonToPerson, options, "# People of Anethaathira\n", options.hide ? 'people_hidden.md' : 'people.md');

