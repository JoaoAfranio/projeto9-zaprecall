import styled from "styled-components";
import logo from "../assets/img/logo.png";

export default function Login({ setNavigation }) {
  return (
    <Container>
      <img src={logo} alt={logo}></img>
      <h1>ZapRecall</h1>
      <Button
        onClick={() => {
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

const Button = styled.button`
  border: 1px solid #d70900 !important;
`;
