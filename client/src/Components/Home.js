import React from "react";
import { BrowserRouter } from "react-router-dom";
import Banner from "./Home/Banner";

export default class Home extends React.Component {
    render() {
     return (
        <div id="Home">
            <div id="top-section">
                <Banner />
        </div>
        </div>
        );
    }
}