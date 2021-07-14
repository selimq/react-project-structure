import React from "react";
import Page1View from "./Page1View";
import RouterConfigPage1 from "./navigation/RouterConfigPage1"

export default function Page1Container() {
    return (
        <div>

            <Page1View title="Page1" />
            <RouterConfigPage1 />

        </div>
    );
}
