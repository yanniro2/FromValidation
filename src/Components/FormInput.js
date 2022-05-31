import React from "react";
import { useState } from "react";
import ErrorImg from "../Img/alert.svg";
import CheckArrow from "../Img/CheckArrow.svg";
function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const { label, onChange, id, erroerMessage, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  function print() {
    if (focused) {
      console.log();
    }
  }
  return (
    <div className="Form">
      {/* <input
        type="text"
        placeholder={props.placeholder}
        onChange={(e) => props.setUsername(e.target.value)}
      /> */}

      {/* <input
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        ref={props.refer}
      /> */}

      <label>{label}</label>
      {/* <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "ConfirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      /> */}

      <div className="flex">
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
        />
        <div className="div"></div>
        <div className="check">
          {/* {erroerMessage} */}
          <div className="error">
            <img src={ErrorImg} className="error-icon icon-size red" alt="" />
          </div>
          <div className="valid">
            <img
              src={CheckArrow}
              className="check-icon icon-size green"
              alt=""
            />
          </div>
        </div>

        <button onclick={print}>submit</button>
      </div>
    </div>
  );
}

export default FormInput;
