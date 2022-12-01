import React from "react";
import styled from "styled-components";

const Button = styled.button`
  &.btnPrimary {
    padding: 0.3rem 1rem;
    background-color: #a62626;
    color: #fff;
    transition: all 0.2s;
    border: none;
    border-radius: 3px;
  }
  :hover {
    background-color: #821e1e;
    color: #fff;
  }
`;

const ButtonPrimary = ({ onClickHandler, text, spinner }) => {
  return (
    <Button className="btnPrimary" onClick={onClickHandler}>
      {text}
      {spinner}
    </Button>
  );
};

export default ButtonPrimary;
