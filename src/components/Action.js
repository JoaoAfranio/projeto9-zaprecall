import styled from "styled-components";

export default function Action({ answerCard }) {
  return (
    <Container>
      <Button data-identifier="forgot-btn" onClick={() => answerCard("erro")} className="error">
        Não lembrei
      </Button>
      <Button data-identifier="almost-forgot-btn" onClick={() => answerCard("help")} className="almost">
        Quase não lembrei
      </Button>
      <Button data-identifier="zap-btn" onClick={() => answerCard("acerto")} className="zap">
        Zap!
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.span`
  width: 100%;
  height: 40px;
  background-color: green;
  color: white;
  font-size: 12px;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    filter: brightness(0.7);
  }

  &.error {
    background-color: var(--cor-nao-lembrei);
  }

  &.almost {
    background-color: var(--cor-quase-nao-lembrei);
  }

  &.zap {
    background-color: var(--cor-zap);
  }
`;
