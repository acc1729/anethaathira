'use strict';
exports.__esModule = true;
var globber_1 = require("./../src/globber");
;
var options = {
    hide: process.argv[2] === "true" ? true : false,
    categories: process.argv.slice(3)
};
function jsonToPerson(person, options) {
    var hide = options.hide, categories = options.categories;
    if (hide && person.name.startsWith("!"))
        return;
    var relations = [];
    for (var _i = 0, _a = person.relations; _i < _a.length; _i++) {
        var relation = _a[_i];
        if (hide && relation.startsWith("!"))
            continue;
        relations.push(relation);
    }
    var details = [];
    for (var _b = 0, _c = person.details; _b < _c.length; _b++) {
        var detail = _c[_b];
        if (hide && detail.startsWith("!"))
            continue;
        details.push(detail);
    }
    ;
    var return_string = "";
    return_string.concat("## " + person.name);
    return ("## " + person.name + "\n\n### Region: " + person.region + "\n### Title: " + person.title + "\n\n" + details.join("\n") + "\n");
}
;
globber_1["default"](jsonToPerson, options, "# People of Anethaathira\n", 'people.md');
