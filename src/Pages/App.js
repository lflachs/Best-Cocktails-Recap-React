import React from "react";
import Homepage from "./Homepage";
import "./App.css";
import Navigation from "../Components/Navigation/Navigation";
import Logo from "../img/logo.svg";

function App() {
  return (
    <div className="App">
      <Navigation logo={Logo} />
      <Homepage />
    </div>
  );
}

export default App;
