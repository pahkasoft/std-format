const React = require("react");
const Format1 = require("std-format");
const Format2 = require("@sbrockma/std-format");
const Format3 = require("@tspro/brace-format");
const testFormatLib = require("@tspro/test-format-lib");

const RequireJsFormatTest = ({ }) => {
    const format1 = [];
    testFormatLib(Format1, str => format1.push(<>{str}<br /></>))
    const format2 = [];
    testFormatLib(Format2, str => format2.push(<>{str}<br /></>))
    const format3 = [];
    testFormatLib(Format3, str => format3.push(<>{str}<br /></>))

    return (
        <div>
            <h1>JS Require</h1>
            <p>{format1}</p>
            <p>{format2}</p>
            <p>{format3}</p>
        </div>
    );
};

export default RequireJsFormatTest;