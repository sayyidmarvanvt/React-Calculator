import React, { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(number);

  const Digit = (e) => {
    setNumber(number + e.target.value);
  };

  const Total = () => {
    try {
      setResult(eval(number));
    } catch (error) {
      toast.error("error", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  const Percentage = () => {
    setNumber(number+"%");
    let perc = eval(number) / 100;
    setResult(perc);
  };

  const Clear = () => {
    setNumber("");
    setResult("");
  };

  const Backspace = () => {
    let num = [...number];
    num.pop();
    setNumber(num.join(""));
    setResult("");
  };

  const Opposite = () => {
    let opp = number * -1;
    setNumber(opp);
  };

  return (
    <div className="container">
      <div className="calc-body">
        <div className="calc-screen">
          <input
            type="text"
            value={number}
            className="calc-operation"
            readOnly
          />
          <input type="text" value={result} className="calc-typed" readOnly />
        </div>
        <div className="calc-button">
          <button className="button-red" onClick={Clear}>
            AC
          </button>
          <button className="button-operator" onClick={Backspace}>
            C
          </button>
          <button className="button-operator" onClick={Percentage} value="%">
            %
          </button>
          <button className="button-operator" onClick={Digit} value="/">
            /
          </button>
          <button className="button-number" onClick={Digit} value={7}>
            7
          </button>
          <button className="button-number" onClick={Digit} value={8}>
            8
          </button>
          <button className="button-number" onClick={Digit} value={9}>
            9
          </button>
          <button className="button-operator" onClick={Digit} value={"*"}>
            *
          </button>
          <button className="button-number" onClick={Digit} value={4}>
            4
          </button>
          <button className="button-number" onClick={Digit} value={5}>
            5
          </button>
          <button className="button-number" onClick={Digit} value={6}>
            6
          </button>
          <button className="button-operator" onClick={Digit} value={"-"}>
            -
          </button>
          <button className="button-number" onClick={Digit} value={1}>
            1
          </button>
          <button className="button-number" onClick={Digit} value={2}>
            2
          </button>
          <button className="button-number" onClick={Digit} value={3}>
            3
          </button>
          <button className="button-operator" onClick={Digit} value={"+"}>
            +
          </button>
          <button className="button-number" onClick={Opposite}>
            +/-
          </button>
          <button className="button-number" onClick={Digit} value={0}>
            0
          </button>
          <button className="button-number" onClick={Digit} value={"."}>
            .
          </button>
          <button className="button-equal" onClick={Total}>
            =
            <ToastContainer />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
