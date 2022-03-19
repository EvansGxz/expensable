import styled from "@emotion/styled";
import { colors} from "../../styles";

export const Wrapper = styled.div`
  align-items: center; 
  border-radius: 0.5rem;
  border: 2px dashed ${colors.stone[400]};
  background-color: ${colors.white};
  cursor: pointer;
  display: flex;
  height: 88px;
  max-width: 200px;
  margin: 10px 78px;
`;

export const IconConainer = styled.div`
  margin: 0 auto;
  display: block;
`;