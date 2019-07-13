'use strict';

const fs = require('fs');

export default function gatherSplitPrint(formatter: Function): void {
    let files: Array<string> = fs.readdirSync('./').filter((file: string): boolean => { return file.endsWith('.json') });
    files.forEach(file => {
        let rawdata = fs.readFileSync(file).toString();
        let data = JSON.parse(rawdata);
        let payload = JSON.stringify(splitPerson(data), null, 4);
        fs.writeFileSync(file, payload);
        console.log(`Pushed ${file} back to json.`);
    });
}



interface Person {
    name: string;
    region: string;
    title: string;
    details: Array<string>;
    patron: string;
    relations: Array<string>;
};

function properSplit(str: string): Array<string> {
    let strings = str.split(". ");
    let properStrings: Array<string> = [];
    for (let sentence of strings) {
        sentence.trim();
        if (!sentence.endsWith(".")) {
            sentence = sentence + '.';
        }
        properStrings.push(sentence);
    }
    return properStrings;
}

function splitPerson(person: Person): object {
    let details = [];
    for (let detail of person.details) {
        let sentences = properSplit(detail);
        for (let sentence of sentences) {
            details.push(sentence);
        }
    };
    person.details = details;
    return person;
};

gatherSplitPrint(splitPerson);
