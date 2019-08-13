'use strict';
exports.__esModule = true;
var globber_1 = require("./../../src/globber");
;
var options = {
    hide: process.argv[2] === "true" ? true : false,
    categories: process.argv.slice(3)
};
function jsonToCountry(country, options) {
    var hide = options.hide, categories = options.categories;
    if (hide && country.name.startsWith("!"))
        return;
    var cities = [];
    for (var _i = 0, _a = country.cities; _i < _a.length; _i++) {
        var city = _a[_i];
        if (hide && city.startsWith("!"))
            continue;
        cities.push(city);
    }
    var languages = [];
    for (var _b = 0, _c = country.languages; _b < _c.length; _b++) {
        var language = _c[_b];
        if (hide && language.startsWith("!"))
            continue;
        languages.push(language);
    }
    ;
    var biomes = [];
    for (var _d = 0, _e = country.biomes; _d < _e.length; _d++) {
        var biome = _e[_d];
        if (hide && biome.startsWith("!"))
            continue;
        biomes.push(biome);
    }
    ;
    var descriptions = [];
    for (var _f = 0, _g = country.descriptions; _f < _g.length; _f++) {
        var description = _g[_f];
        if (hide && description.startsWith("!"))
            continue;
        descriptions.push(description);
    }
    ;
    var return_string = "";
    return_string.concat("## " + country.name);
    return ("## " + country.name + "\n\n### Common languages: " + languages.join(", ") + "\n### Present biomes: " + biomes.join(", ") + "\n\n" + descriptions.join("  \n") + "\n");
}
;
globber_1["default"](jsonToCountry, options, "# Countries of Anethaathira\n", 'country.md');
