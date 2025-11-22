import React from "react";
import Format1 from "std-format";
import Format2 from "@sbrockma/std-format";
import Format3 from "@tspro/brace-format";
import testFormatLib from "@tspro/test-format-lib";

const ImportTsFormatTest = ({ }) => {
    const format1 = [];
    testFormatLib(Format1, str => format1.push(<>{str}<br /></>))
    const format2 = [];
    testFormatLib(Format2, str => format2.push(<>{str}<br /></>))
    const format3 = [];
    testFormatLib(Format3, str => format3.push(<>{str}<br /></>))

    return (
        <div>
            <h1>JS Import</h1>
            <p>{format1}</p>
            <p>{format2}</p>
            <p>{format3}</p>
        </div>
    );
};

export default ImportTsFormatTest;