import React from "react";
import "./style.scss";

const InputText = React.forwardRef(({ label, onChange, value, light }, ref) => {
  const onInputAnimation = (e) => {
    console.log("me ejecute???");
    if (!value) {
      e.target.parentElement.previousElementSibling.classList.toggle(
        "InputLabel-shrink"
      );
      if (light) {
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
  console.log("light props: ", light, value);
  return (
    <div className="input__text__wrapper">
      <label
        className={
          light &&
          "" + "InputLabel-root InputLabel-animated InputLabel-formControl"
        }
      >
        {label}
      </label>
      <div className={`input__inner ${light ? "light" : "dark"}`}>
        <input
          value={value}
          onChange={onChange}
          ref={ref && ref}
          className="w-100"
          type="text"
          onFocus={onInputAnimation}
          onBlur={onInputAnimation}
          autoComplete="none"
        />
      </div>
    </div>
  );
});

export default InputText;
