'use strict';

import { readFileStrSync, writeFileStrSync,  walkSync } from 'https://deno.land/std/fs/mod.ts';

let header: string = "# The Story of Malcolm, Durzo, and Cree\n\n";
let payload: string = "";

for (const file of walkSync('.')) {
    if (!file.filename.endsWith('.md')) continue;
    console.log(file)
    const fileContents = readFileStrSync(file.filename);
    payload = payload.concat(fileContents);
    payload = payload.concat('\n');
}

const out: string = header.concat(payload);

writeFileStrSync('thusfar.md', out)
