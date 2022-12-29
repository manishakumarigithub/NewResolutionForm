import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Formlist from "./Components/Formcom/Formlist";
import Form from "./Components/Formcom/Form";
import FavItem from "./Components/fav/FavItem";

function App() {
  return (
    <div className="App">
      <div>
        <Form></Form>
        <Formlist></Formlist>
        <FavItem></FavItem>
      </div>
    </div>
  );
}

export default App;
