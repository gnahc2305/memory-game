import React from "react";
import uniqid from "uniqid";

const Content = () => {
  let numbers = [];
  let numbersSelected = [];

  function createRandomNumbers() {
    function getNumber() {
      return Math.floor(Math.random() * (10 - 1 + 1) + 1);
    }

    for (let i = 0; i < 10; i++) {
      numbers.push(getNumber());
    }
    console.log(numbers);
  }
  createRandomNumbers();

  function onClick(e) {
    let numberClicked = parseInt(e.target.textContent);

    // save numver clicked on the numberSelected array
    numbersSelected.push(numberClicked);
  }

  // press p to test things
  window.addEventListener("keydown", (e) => {
    if (e.key === "p") {
      console.log(numbersSelected);
    }
  });

  return (
    // display every number
    <div className="content">
      {numbers.map((number) => (
        <div className="card" key={uniqid()} onClick={onClick}>
          {number}
        </div>
      ))}
    </div>
  );
};

export default Content;
