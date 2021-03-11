import React from "react";
import styled from "styled-components";

function Checkbox({ onChange, checked, id, label }) {
  return (
    <CheckboxContainer>
      <Label>
        <CheckboxInput
          type="checkbox"
          onChange={onChange}
          checked={checked}
          value={id}
        />
        {label}
      </Label>
    </CheckboxContainer>
  );
}

const CheckboxContainer = styled.div`
  width: 50%;
  margin: 4px 0;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`;

const CheckboxInput = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 6px;
  border: 6px solid ${(props) => props.theme.black};
  cursor: pointer;
`;

export default Checkbox;
