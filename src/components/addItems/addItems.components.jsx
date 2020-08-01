import React from "react";
import styled from "styled-components";

import "./addItems.styles.scss";

const Title = styled.h1`
  text-align: start;
  padding-left: 20px;
`;

const Label = styled.label`
  text-align: center;
  display: inline;
  font-size: 1.3rem;
`;

const Input = styled.input`
  border-radius: 5px;
  width: ${(props) => props.width};
  height: 25px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: fit-content;
  background-color: #e7e7e7;
  color: black;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 10px;
`;

function TextField(props) {
  return (
    <div className="TextFieldStyles">
      <Label for="fname">{props.label}:</Label>
    </div>
  );
}

const AddItems = () => {
  return (
    <form>
      <Title>Add new product</Title>
      <div className="textFieldItems">
        <TextField label="Name" />
        <Input width="99%" />

        <TextField label="Quantity" />
        <Input width="10%" type="number" />
        <TextField label="Price" />
        <Input width="10%" type="number" />

        <TextField label="Description" />
        <textarea width="80%" className="textArea" rows="5" />
        <TextField label="Upload photo" />
        <Input width="80%" type="file" multiple />

        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default AddItems;
