'use strict';

import gatherAndPrint from './../../src/globber.ts'

interface Country {
    name: string;
    languages: Array<string>;
    cities: Array<string>;
    biomes: Array<string>;
    descriptions: Array<string>;
};

interface Options {
    hide: boolean,
    categories: Array<string>
}

const options: Options = {
    hide: Deno.args[1] === "true" ? true : false,
    categories: Deno.args.slice(2),
}

function jsonToCountry(country: Country, options: Options): string | void {
    const { hide, categories } = options;
    if (hide && country.name.startsWith("!")) return;
    let cities = [];
    for (let city of country.cities) {
        if (hide && city.startsWith("!")) continue;
        cities.push(city);
    }
    let languages = [];
    for (let language of country.languages) {
        if (hide && language.startsWith("!")) continue;
        languages.push(language);
    };
    let biomes = [];
    for (let biome of country.biomes) {
        if (hide && biome.startsWith("!")) continue;
        biomes.push(biome);
    };
    let descriptions = [];
    for (let description of country.descriptions) {
        if (hide && description.startsWith("!")) continue;
        descriptions.push(description);
    };
    let return_string = "";
    return_string.concat(`## ${country.name}`);

    return (
        `## ${country.name}

### Common languages: ${languages.join(", ")}
### Present biomes: ${biomes.join(", ")}

${descriptions.join("  \n")}
`
    );
};

gatherAndPrint(jsonToCountry, options, "# Countries of Anethaathira\n", 'country.md');
