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
    var relations = [];
    for (var _i = 0, _a = person.relations; _i < _a.length; _i++) {
        var relation = _a[_i];
        relations.push(relation);
    }
    var details = [];
    for (var _b = 0, _c = person.details; _b < _c.length; _b++) {
        var detail = _c[_b];
        details.push(detail);
    }
    ;
    var return_string = "";
    return_string.concat("## " + person.name);
    if (hide) {
        if (person.name.startsWith('!')) {
            return "";
        }
        details = details.filter(function (textLine) { return !textLine.startsWith('!'); });
    }
    var payload = ("## " + person.name + "\n\n### Region: " + person.region + "\n### " + person.title + "\n\n" + details.join("\n") + "\n");
    return payload.replace(/!/g, "");
}
;
globber_1["default"](jsonToPerson, options, "# People of Anethaathira\n", options.hide ? 'people_hidden.md' : 'people.md');
