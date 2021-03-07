import React, { useState, useEffect, useRef } from "react";
import "./style.scss";

const InputText = (props) => {
  const { label, light } = props;
  const [inputValue, setInputValue] = useState("");
  const input = useRef(null);

  const onChange = (e) => {
    setInputValue(e.target.value);

    if (!e.target.value || !inputValue) {
      e.target.parentElement.previousElementSibling.classList.toggle(
        "InputLabel-shrink"
      );
      if (light) {
        e.target.parentElement.previousElementSibling.classList.toggle("light");
        e.target.parentElement.previousElementSibling.classList.toggle(
          "InputLabel-focused-light"
        );
        e.target.parentElement.classList.toggle("InputLabel-focused-light");
      } else {
        e.target.parentElement.previousElementSibling.classList.toggle(
          "InputLabel-focused"
        );
        e.target.parentElement.classList.toggle("InputLabel-focused");
      }
    }
  };

  useEffect(() => {
    if (props.startOnFocus) {
      input.current.focus();
    }
  }, [props.startOnFocus]);

  return (
    <div className="input__text__wrapper">
      <label
        className={
          !light
            ? "InputLabel-root InputLabel-animated InputLabel-formControl"
            : "InputLabel-root InputLabel-animated InputLabel-formControl light"
        }
      >
        {label}
      </label>
      <div className={`input__inner ${light ? "light" : "dark"}`}>
        <input
          value={inputValue}
          onChange={onChange}
          ref={input}
          className="w-100"
          type="text"
          name={label}
        />
      </div>
    </div>
  );
};

export default InputText;
