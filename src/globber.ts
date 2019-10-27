'use strict';

import { readJsonSync, writeFileStrSync, walkSync } from 'https://deno.land/std/fs/mod.ts';

export default function gatherAndPrint(formatter: Function, options: object, header: string, destination: string): void {
    let payload: Array<string | void> = [header];
    for (const file of walkSync('.')) {
	console.log(file);
	if (file.filename.endsWith('.json')) {
        let data = readJsonSync(file.filename);
        payload.push(formatter(data, options));
        console.log(`Pushed ${file.filename} to markdown.`);}
    };
    writeFileStrSync(destination, payload.join('\n'));
}

