import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
const Footer = () => (
  <footer className="footer mt-15" >
    <p>
      <a href="/Products">About</a> <a href="/Products">Contact</a> <a href="/Products">Subcribe</a>{" "}
      <a href="/Products">FAQ</a>  
    </p>
  </footer>
);

ReactDOM.render(
    <BrowserRouter>
        <App key="1" />,<Footer key="2" />
        
    </BrowserRouter>,
    document.getElementById("root")
);

serviceWorker.unregister();