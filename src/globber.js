'use strict';
exports.__esModule = true;
var fs = require("fs");
function gatherAndPrint(formatter, options, header, destination) {
    var files = fs.readdirSync('./')
        .filter(function (file) { return file.endsWith('.json'); });
    var payload = [header];
    files.forEach(function (file) {
        var rawdata = fs.readFileSync(file).toString();
        var data = JSON.parse(rawdata);
        payload.push(formatter(data, options));
        console.log("Pushed " + file + " to markdown.");
    });
    fs.writeFileSync(destination, payload.join('\n'));
}
exports["default"] = gatherAndPrint;
