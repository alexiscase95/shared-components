import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import { SignUpForm } from "./sign-up-form/sign-up-form";
import "./index.css";
import AddCharge from "./add-charge-form/add-charge-form";
import Navigation from "./navigation/navigation";

const App = () => (
  <div className="container">
    <div>Name: shared-components</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Navigation/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
