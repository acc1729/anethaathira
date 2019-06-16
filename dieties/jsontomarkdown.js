'use strict';
var fs = require('fs');
;
function jsonToMarkdown(diety) {
    if (diety.name.startsWith("!"))
        return;
    var spheres = [];
    for (var _i = 0, _a = diety.spheres; _i < _a.length; _i++) {
        var sphere = _a[_i];
        if (sphere.startsWith("!"))
            continue;
        spheres.push(sphere);
    }
    ;
    var descriptions = [];
    for (var _b = 0, _c = diety.descriptions; _b < _c.length; _b++) {
        var description = _c[_b];
        if (description.startsWith("!"))
            continue;
        descriptions.push(description);
    }
    ;
    return ("##" + diety.name + "\n###Spheres: " + spheres.join(", ") + "\n\n" + descriptions.join("\n") + "\n");
}
;
var files = fs.readdirSync('./').filter(function (file) { return file.endsWith('.json'); });
var payload = ["# Dieties and Greater Beings of Anethaathira"];
files.forEach(function (file) {
    var rawdata = fs.readFileSync(file).toString();
    var diety = JSON.parse(rawdata);
    payload.push(jsonToMarkdown(diety));
});
fs.writeFileSync('dieties.md', payload.join('\n'));
