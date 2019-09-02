'use strict';

import fs from 'fs';

export default function gatherAndPrint(formatter: Function, options: object, header: string, destination: string): void {
    let files: Array<string> = fs.readdirSync('./')
        .filter((file: string): boolean => { return file.endsWith('.json') });
    let payload: Array<string | void> = [header];
    files.forEach(file => {
        let rawdata = fs.readFileSync(file).toString();
        let data = JSON.parse(rawdata);
        payload.push(formatter(data, options));
        console.log(`Pushed ${file} to markdown.`)
    });

    fs.writeFileSync(destination, payload.join('\n'));
}

