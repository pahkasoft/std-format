import * as Format1 from "std-format";
import * as Format2 from "@sbrockma/std-format";
import * as Format3 from "@tspro/brace-format";
import testFormatLib from "@tspro/test-format-lib";

console.log("---- Node ESM Test ----");
testFormatLib(Format1, console.log);
console.log("");
testFormatLib(Format2, console.log);
console.log("");
testFormatLib(Format3, console.log);
console.log("");
