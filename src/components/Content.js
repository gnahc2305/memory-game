import React, { useState } from "react";
import uniqid from "uniqid";

const Content = () => {
  let numbers = [];
  const [visible, setVisible] = useState(true);
  const [numbersSelected, setNumbers] = useState([]);

  // generate random array of numbers
  function createRandomNumbers() {
    function getNumber() {
      return Math.floor(Math.random() * (10 - 1 + 1) + 1);
    }

    for (let i = 0; i < 10; i++) {
      numbers.push(getNumber());
    }
  }
  createRandomNumbers();

  function onClick(e) {
    // save numver clicked on the numberSelected array
    let numberClicked = parseInt(e.target.textContent);
    setNumbers(numbersSelected.concat(numberClicked));

    // delete numbers and generete a new set
    numbers = [];
    createRandomNumbers();
    setVisible((prev) => !prev);

    // check if you already clicked the number
    numbersSelected.forEach((number) => {
      if (numberClicked === number) {
        alert("You Lost");
        window.location.reload(false);
      }
    });
  }

  return (
    // display every number
    <div style={{ textAlign: "center" }}>
      <h3>Score: {numbersSelected.length}</h3>

      <div className="content">
        {numbers.map((number) => (
          <div className="card" key={uniqid()} onClick={onClick}>
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
