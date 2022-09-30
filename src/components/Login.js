import styled from "styled-components";
import logo from "../assets/img/logo.png";
import { decks } from "./decks";

import React from "react";

export default function Login({ setNavigation, setSelectedDeck }) {
  const [valueSelect, setValueSelect] = React.useState(0);

  return (
    <Container>
      <img src={logo} alt={logo}></img>
      <h1>ZapRecall</h1>
      <Select
        value={valueSelect}
        onChange={(e) => {
          setValueSelect(e.target.value);
        }}
        id="deckSelect"
      >
        {decks.map((d, id) => <option value={id}>{d.titulo}</option>)}
      </Select>
      <Button
        onClick={() => {
          console.log(valueSelect);
          setSelectedDeck(valueSelect);
          setNavigation("Deck");
        }}
      >
        Iniciar Recall!
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 50px;
`;

const Select = styled.select`
  outline: none;
  width: 100px;
  height: 40px;
  font-size: 16px;
  text-align: center;
`;

const Button = styled.button`
  border: 1px solid #d70900 !important;
`;
