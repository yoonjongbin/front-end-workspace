import { useState, useEffect } from "react";
// import React from "react"; // 리액트에 있는 기능들을 통째로 가져옴

const Converter = () => {
  const [number, setNumber] = useState("");
  const [bool, setBool] = useState(true);
  const [text, setText] = useState("Invert");

  const change = (event) => {
    console.log(event.target.value);
    setNumber(event.target.value);
  };

  const reset = () => {
    setNumber("");
  };

  const invert = () => {
    setBool(!bool);
    reset();
  };

  useEffect(() => {
    if (bool) setText("Invert");
    else setText("Turn back");
  }, [bool]);

  return (
    <div>
      <h1>Time Converter</h1>

      <>
        <label>Minutes : </label>
        <input
          type="number"
          placeholder="Minutes"
          onChange={change}
          value={bool ? number : Math.floor(number * 60)}
          disabled={!bool}
        />
      </>

      <br />

      <>
        <label>Hours : </label>
        <input
          type="number"
          placeholder="Hours"
          disabled={bool}
          value={bool ? Math.floor(number / 60) : number}
          onChange={change}
        />
      </>

      <br />

      {/* <Button
        text="Reset"
        css={{ backgroundColor: "pink", color: "skyblue" }}
      />
      <Button text="Invert" /> */}

      <Button click={reset} btnText="Reset" backgroundColor="tomato" />

      <Button click={invert} btnText={text} backgroundColor="skyblue" />
    </div>
  );
};

const Button = ({ click, btnText, backgroundColor }) => {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "10px",
      }}
      onClick={click}
    >
      {btnText}
    </button>
  );
};

export default Converter;
