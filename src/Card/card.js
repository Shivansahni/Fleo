import styled from "styled-components";
import Progressbar from "../Progressbar/Progressbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin-right: 50%;
  font-size: 40px;
  font-weight: bold;
`;
const PerLabel = styled.span`
  color: black;
  margin-left: 50%;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 5%;
`;
const Label = styled.span`
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-right: auto;
`;

const Button = styled.span`
  margin-left: auto;
  padding: 10px;
  background-color: orange;
  font-size: 20px;
  border-radius: 20px;
`;

function Card() {
  return (
    <Container>
      <AppLabel>Tata Steel</AppLabel>
      <PerLabel>50% Complete</PerLabel>

      <Label>Total sales : 200</Label>
      <Label>Total sales : 200</Label>
      <Button>Off Track</Button>
      <Progressbar bgcolor="orange" progress="30" height={30} />
    </Container>
  );
}

export default Card;
