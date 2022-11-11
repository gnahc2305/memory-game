import React, { useState } from "react";
import './style.css';
import Header from "./components/Header";
import Content from "./components/Content";

const App = () => {



  return(
    <div>
      <Header></Header>
      <div className="container">
        <Content></Content>
      </div>

      <div className="score">
        <h3>Score: <span>0</span></h3>
      </div>

    </div>
  )
}

export default App;