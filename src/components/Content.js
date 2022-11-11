import React from "react";

const Content = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function onClick(e) {
    console.log(e.target);
  }

  return (
    <div className="content">
      {numbers.map((number) => (
        <div className="card" key={number} onClick={onClick}>{number}</div>
      ))}
    </div>
  );
};

export default Content;
