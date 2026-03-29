import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
    
            Carolin{" "}
          and is{" "}
          <a
            href="https://cargo-cmyk.github.io/newnewweather/"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
            hosted on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
