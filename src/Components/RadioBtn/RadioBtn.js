import React from "react";
import styled from "styled-components";

function RadioBtn({ label, onClick, value, checked }) {
  return (
    <RadioBtnContainer>
      <Label>
        <RadioButton
          type="radio"
          value={value}
          name="checkbox"
          onClick={onClick}
          checked={checked}
        />
        {label}
      </Label>
    </RadioBtnContainer>
  );
}

const RadioBtnContainer = styled.div`
  margin: 4px 0;
  cursor: pointer;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const RadioButton = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 6px;
  border: 6px solid ${(props) => props.theme.black};
`;

export default RadioBtn;
