'use strict';
exports.__esModule = true;
var mod_ts_1 = require("https://deno.land/std/fs/mod.ts");
function gatherAndPrint(formatter, options, header, destination) {
    var payload = [header];
    for (var _i = 0, _a = mod_ts_1.walkSync('.'); _i < _a.length; _i++) {
        var file = _a[_i];
        console.log(file);
        if (file.filename.endsWith('.json')) {
            var data = mod_ts_1.readJsonSync(file.filename);
            payload.push(formatter(data, options));
            console.log("Pushed " + file.filename + " to markdown.");
        }
    }
    ;
    mod_ts_1.writeFileStrSync(destination, payload.join('\n'));
}
exports["default"] = gatherAndPrint;
