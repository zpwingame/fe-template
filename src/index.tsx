import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

import Animal from './components/Tsexample';

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("app")
);