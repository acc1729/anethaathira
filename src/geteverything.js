"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var fileList = [
    "..\\dieties\\dieties.md",
    "..\\places\\states\\country.md",
    "..\\characters\\people.md",
    "..\\scenarios\\basic.md"
];
function reHeader(text) {
    var re = /# /g;
    return text.replace(re, "## ");
}
var output = "";
for (var _i = 0, fileList_1 = fileList; _i < fileList_1.length; _i++) {
    var file = fileList_1[_i];
    var filePath = path.join(__dirname, file);
    var data = fs.readFileSync(filePath).toString();
    output.concat(data);
}
output = reHeader(output);
fs.writeFileSync("everything.md", output);
