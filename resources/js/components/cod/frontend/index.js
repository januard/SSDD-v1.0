import React from "react";
import ReactDOM from "react-dom";
import { HeaderData, init, reducer } from "./components/dataSet"; 
import App from "./functions/App";

if (document.getElementById("app")) {
    ReactDOM.render(
        <HeaderData initialState={init} reducer={reducer}> 
            <App /> 
        </HeaderData>,
        document.getElementById("app")
    );
}
