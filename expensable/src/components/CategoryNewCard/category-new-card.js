import { BsPlus } from "react-icons/bs";
import AddCard from "../AddCategory";
import { CalculatorModal } from "../Categories/categories";
import * as Styled from "./styles";

function hol() {
  console.log("Hicistse clic");
  return (<CalculatorModal>
    <AddCard />
  </CalculatorModal>);
}

function CategoryNewCard() {
  return (
    <Styled.Wrapper onClick={() => hol()}>
      <Styled.IconConainer>
        <BsPlus />
      </Styled.IconConainer>
    </Styled.Wrapper>
  );
}


export default CategoryNewCard;
