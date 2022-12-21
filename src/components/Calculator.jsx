import React, { useRef, useEffect, useState } from "react";
import { btns, BTN_ACTIONS } from "./btnConfig";
import "./calculator.css";

import Navbar from "./Header";
import Footer from "./Footer";

function App() {
  const btnsRef = useRef(null);
  const expRef = useRef(null);

  const [expression, setExpression] = useState("");
  const operation = ["+", "-", "/", "*"];

  useEffect(() => {
    const btns = Array.from(btnsRef.current.querySelectorAll("button"));
    btns.forEach((e) => (e.style.height = e.offsetWidth + "px"));
  }, []);

  const btnClick = (item) => {
    let expDiv = expRef.current;

    if (item.action === BTN_ACTIONS.THEME)
      document.body.classList.toggle("dark");

    if (item.action === BTN_ACTIONS.ADD) {
      const op = item.display !== "x" ? item.display : "*";
      const value = expression.split("");

      addAnimSpan(expression + op);

      if (operation.includes(value[value.length - 1]) && op === "%") {
        addAnimSpan(expression);
        return;
      }

      if (
        operation.includes(value[value.length - 1]) &&
        operation.includes(op)
      ) {
        value.splice(value.length - 1, 1, op);
        let result = value.join("");

        setExpression(expression);
        addAnimSpan(result);
        return;
      }
    }

    if (item.action === BTN_ACTIONS.DELETE) {
      expDiv.parentNode.querySelector("div:last-child").innerHTML = "";
      expDiv.innerHTML = "";

      setExpression("");
    }

    if (item.action === BTN_ACTIONS.DEL) {
      let output = expression.split("");
      output.pop();
      let result = output.join("");

      expDiv.innerHTML = result;
      setExpression(result);
    }

    if (item.action === BTN_ACTIONS.CALC) {
      if (expression.trim().length <= 0) return;

      expDiv.parentNode.querySelector("div:last-child").remove();

      const cloneNode = expDiv.cloneNode(true);
      expDiv.parentNode.appendChild(cloneNode);

      const transform = `translateY(${
        -(expDiv.offsetHeight + 10) + "px"
      }) scale(0.4)`;

      try {
        let value = "";
        if (expression.includes("%")) {
          value = expression.replace("%", "/100");
        } else {
          value = expression;
        }

        let res = eval(value);

        setExpression(res.toString());
        setTimeout(() => {
          cloneNode.style.transform = transform;
          expDiv.innerHTML = "";
          addAnimSpan(Math.floor(res * 100000000) / 100000000);
        }, 200);
      } catch {
        setTimeout(() => {
          cloneNode.style.transform = transform;
          cloneNode.innerHTML = "Syntax err";
        }, 200);
      } finally {
        console.log("calc complete");
      }
    }
  };

  const addAnimSpan = (content) => {
    const expDiv = expRef.current;
    const span = document.createElement("span");

    expDiv.innerHTML = "";
    span.innerHTML = content;
    span.style.opacity = "0";
    expDiv.appendChild(span);

    setExpression(content.toString())

    const width = span.offsetWidth + "px";
    span.style.width = "0";

    setTimeout(() => {
      span.style.opacity = "1";
      span.style.width = width;
    }, 100);
  };

  return (
    <>
    <Navbar />
      <div className="all">
        <div className="calculator">
          <div className="calculator__result">
            <div ref={expRef} className="calculator_result_exp"></div>
            <div className="calculator_result_exp"></div>
          </div>
          <div ref={btnsRef} className="calculator__btns">
            {btns.map((item, index) => (
              <button
                key={index}
                className={item.class}
                onClick={() => btnClick(item)}
              >
                {item.display}
              </button>
            ))}
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}

export default App;
