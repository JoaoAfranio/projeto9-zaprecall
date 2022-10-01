import styled from "styled-components";
import logo from "../assets/img/logo.png";
import { decks } from "./decks";

import React from "react";

export default function Login({ setNavigation, setSelectedDeck, setSelectedGoal }) {
  const [valueSelect, setValueSelect] = React.useState(0);
  const [valueInput, setValueInput] = React.useState(0);

  function verifyValues() {
    if (valueInput < 1) {
      alert("O valor de metas tem que ser maior do que 1");
      return;
    }
    setSelectedDeck(valueSelect);
    setSelectedGoal(valueInput);
    setNavigation("Deck");
  }

  return (
    <Container>
      <Header>
        <img src={logo} alt={logo}></img>
        <h1>ZapRecall</h1>
      </Header>
      <Options>
        <Select
          value={valueSelect}
          onChange={(e) => {
            setValueSelect(e.target.value);
          }}
          id="deckSelect"
        >
          {decks.map((d, id) => (
            <option key={id} value={id}>
              {d.titulo}
            </option>
          ))}
        </Select>
        <Input
          value={valueInput}
          onChange={(e) => {
            setValueInput(e.target.value);
          }}
          placeholder="Digite a meta"
        />
        <Button
          onClick={() => {
            verifyValues();
          }}
        >
          Iniciar Recall!
        </Button>
      </Options>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 80px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
`;

const Select = styled.select`
  outline: none;
  width: 100px;
  height: 40px;
  font-size: 16px;
  text-align: center;
`;

const Input = styled.input`
  width: 200px;
  height: 40px;
  font-size: 16px;
  text-align: center;
`;

const Button = styled.button`
  border: 1px solid #d70900 !important;
`;
