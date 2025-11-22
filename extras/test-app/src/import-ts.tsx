import React from "react";
import Format1 from "std-format";
import Format2 from "@sbrockma/std-format";
import Format3 from "@tspro/brace-format";
import testFormatLib from "@tspro/test-format-lib";

const ImportTsFormatTest: React.FC<{}> = ({ }) => {
    const format1: any[] = [];
    testFormatLib(Format1, (str: string) => format1.push(<>{str}<br /></>))
    const format2: any[] = [];
    testFormatLib(Format2, (str: string) => format2.push(<>{str}<br /></>))
    const format3: any[] = [];
    testFormatLib(Format3, (str: string) => format3.push(<>{str}<br /></>))

    return (
        <div>
            <h1>TS Import</h1>
            <p>{format1}</p>
            <p>{format2}</p>
            <p>{format3}</p>
        </div>
    );
};

export default ImportTsFormatTest;