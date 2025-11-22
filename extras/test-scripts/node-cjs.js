const Format1 = require("std-format");
const Format2 = require("@sbrockma/std-format");
const Format3 = require("@tspro/brace-format");
const testFormatLib = require("@tspro/test-format-lib");

console.log("---- Node CJS Test ----");
testFormatLib(Format1, console.log);
console.log("");
testFormatLib(Format2, console.log);
console.log("");
testFormatLib(Format3, console.log);
console.log("");
