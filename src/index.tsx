import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

// to build use npx webpack.
// I'm using http-server to serve it up so I can see the reacty stuff in the browser.

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);