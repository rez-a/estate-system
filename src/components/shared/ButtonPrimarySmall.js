import React from "react";
import styled from "styled-components";

const Button = styled.button`
  &.btnSm {
    background-color: #a62626;
    color: #fff;
    transition: all 0.2s;
    border: none;
    border-radius: 3px;
    font-size: 12px;
    padding: 0.3rem 0.8rem;
  }
  :hover {
    background-color: #821e1e;
    color: #fff;
  }
`;

const ButtonPrimarySmall = ({ onClickHandler, text }) => {
  return (
    <Button className="btnSm" onClick={onClickHandler}>
      {text}
    </Button>
  );
};

export default ButtonPrimarySmall;
