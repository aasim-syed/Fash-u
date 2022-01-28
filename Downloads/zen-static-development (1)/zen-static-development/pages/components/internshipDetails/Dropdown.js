import React, { useState, useEffect, useRef } from "react";
import {
  DropdownSelect,
  Option,
  Img,
  Options,
  OptionTitle,
} from "./styles/Dropdown.styled";

const useClickOutside = (handler) => {
  const domNode = useRef();
  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

const Dropdown = ({ title, options }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  let domNode = useClickOutside(() => {
    setShow(false);
  });

  return (
    <DropdownSelect ref={domNode}>
      <span onClick={() => handleShow()}>
        {title}{" "}
        {!show ? <Img src="/down-arrow.svg" /> : <Img src="/up-arrow.svg" />}
      </span>
      {!show ? (
        " "
      ) : (
        <>
          <Options>
            <OptionTitle onClick={() => handleShow()}>
              <span
                style={{ color: show ? "#404366" : "#C9CBE2" }}
                className="option-title"
              >
                {title}
              </span>
              {!show ? (
                <Img src="/down-arrow.svg" />
              ) : (
                <Img className="up-show" src="/up-arrow.svg" />
              )}
            </OptionTitle>
            {options.map((option, index) => {
              return (
                <Option key={index}>
                  <label>{option.value}</label>
                  <input
                    type="checkbox"
                    id="check"
                    checked={option.check}
                    hidden
                  />
                  <label htmlFor="check" className="check"></label>
                </Option>
              );
            })}
          </Options>
        </>
      )}
    </DropdownSelect>
  );
};

export default Dropdown;
