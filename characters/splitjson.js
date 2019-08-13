'use strict';
exports.__esModule = true;
var fs = require('fs');
function gatherSplitPrint(formatter) {
    var files = fs.readdirSync('./').filter(function (file) { return file.endsWith('.json'); });
    files.forEach(function (file) {
        var rawdata = fs.readFileSync(file).toString();
        var data = JSON.parse(rawdata);
        var payload = JSON.stringify(splitPerson(data), null, 4);
        fs.writeFileSync(file, payload);
        console.log("Pushed " + file + " back to json.");
    });
}
exports["default"] = gatherSplitPrint;
;
function properSplit(str) {
    var strings = str.split(". ");
    var properStrings = [];
    for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
        var sentence = strings_1[_i];
        sentence.trim();
        if (!sentence.endsWith(".")) {
            sentence = sentence + '.';
        }
        properStrings.push(sentence);
    }
    return properStrings;
}
function splitPerson(person) {
    var details = [];
    for (var _i = 0, _a = person.details; _i < _a.length; _i++) {
        var detail = _a[_i];
        var sentences = properSplit(detail);
        for (var _b = 0, sentences_1 = sentences; _b < sentences_1.length; _b++) {
            var sentence = sentences_1[_b];
            details.push(sentence);
        }
    }
    ;
    person.details = details;
    return person;
}
;
gatherSplitPrint(splitPerson);
