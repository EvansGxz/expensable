import { colors } from "../../styles";
import styled from "@emotion/styled";

const Container = styled.div`
  width: fit-content;
  color: ${colors.gray[600]};
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(6, 50px) auto;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray[200]};
  border-radius: 8px;
`;

const ToolTip = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(2, 1fr);
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 8px;
gap: 12px;
`;

const ToolTipContentRed = styled.div`
  display: block;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  align-self: center;
  justify-self: center;
  filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0));
  transition: 200ms all;
  background-color: ${colors.red[500]};
`;

const ToolTipContentOrange = styled.div`
  display: block;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  align-self: center;
  justify-self: center;
  filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0));
  transition: 200ms all;
  background-color: ${colors.orange[500]};
`;

const ToolTipContentYellow = styled.div`
  display: block;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  align-self: center;
  justify-self: center;
  filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0));
  transition: 200ms all;
  background-color: ${colors.yellow[500]};
`;

const ToolTipContentGreen = styled.div`
  display: block;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  align-self: center;
  justify-self: center;
  filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0));
  transition: 200ms all;
  background-color: ${colors.green[500]};
`;

const ToolTipContentTeal = styled.div`
  display: block;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  align-self: center;
  justify-self: center;
  filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0));
  transition: 200ms all;
  background-color: ${colors.teal[500]};
`;

const ToolTipContentCyan = styled.div`
  display: block;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  align-self: center;
  justify-self: center;
  filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0));
  transition: 200ms all;
  background-color: ${colors.cyan[500]};
`;
const ToolTipContentLB = styled.div`
  display: block;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  align-self: center;
  justify-self: center;
  filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0));
  transition: 200ms all;
  background-color: ${colors.yellow[500]};
`;
const ToolTipContentBlue = styled.div`
  display: block;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  align-self: center;
  justify-self: center;
  filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0));
  transition: 200ms all;
  background-color: ${colors.blue[500]};
`;
function AddCard(){
  return(
    <Container>
        <p>New Category</p>
        <ToolTip>
          <ToolTipContentRed />
          <ToolTipContentOrange />
          <ToolTipContentYellow />
          <ToolTipContentGreen />
          <ToolTipContentTeal />
          <ToolTipContentCyan />
          <ToolTipContentLB />
          <ToolTipContentBlue />
        </ToolTip>
    </Container>
  );
}



export default AddCard;