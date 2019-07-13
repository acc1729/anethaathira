'use strict';

const fs = require('fs');

export default function gatherSplitPrint(formatter: Function): void {
    let files: Array<string> = fs.readdirSync('./').filter((file: string): boolean => { return file.endsWith('.json') });
    files.forEach(file => {
        let rawdata = fs.readFileSync(file).toString();
        let data = JSON.parse(rawdata);
        let payload = JSON.stringify(splitDiety(data), null, 4);
        fs.writeFileSync(file, payload);
        console.log(`Pushed ${file} to markdown.`);
    });
}



interface Diety {
    name: string;
    descriptions: Array<string>;
    spheres: Array<string>;
    adherents: Array<string> | null;
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

function splitDiety(diety: Diety): object {
    let descriptions = [];
    for (let description of diety.descriptions) {
        let sentences = properSplit(description);
        for (let sentence of sentences) {
            descriptions.push(sentence);
        }
    };
    diety.descriptions = descriptions;
    return diety;
};

gatherSplitPrint(splitDiety);
