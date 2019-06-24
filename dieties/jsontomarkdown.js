'use strict';
exports.__esModule = true;
var globber_1 = require("./../src/globber");
;
var options = {
    hide: process.argv[2] === "true" ? true : false,
    categories: process.argv.slice(3)
};
function jsonToDiety(diety, options) {
    var hide = options.hide, categories = options.categories;
    if (hide && diety.name.startsWith("!"))
        return;
    var spheres = [];
    for (var _i = 0, _a = diety.spheres; _i < _a.length; _i++) {
        var sphere = _a[_i];
        if (hide && sphere.startsWith("!"))
            continue;
        spheres.push(sphere);
    }
    ;
    var adherents = [];
    for (var _b = 0, _c = diety.adherents; _b < _c.length; _b++) {
        var adherent = _c[_b];
        if (hide && adherent.startsWith("!"))
            continue;
        adherents.push(adherent);
    }
    var descriptions = [];
    for (var _d = 0, _e = diety.descriptions; _d < _e.length; _d++) {
        var description = _e[_d];
        if (hide && description.startsWith("!"))
            continue;
        descriptions.push(description);
    }
    ;
    var return_string = "";
    return_string.concat("## " + diety.name);
    return ("## " + diety.name + "\n### Spheres: " + spheres.join(", ") + "\n" + descriptions.join("  \n"));
}
;
globber_1["default"](jsonToDiety, options, "Dieties of Anethaathira\n", 'dieties.md');
