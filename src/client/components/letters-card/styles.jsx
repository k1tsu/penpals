import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLetter = styled.div`
  position: absolute;
  right: 0;
  margin-right: 10%;
  width: 15%;
  height: 40%;
  background-color: white;
  border-radius: 5px;
  box-shadow: -10px 10px 51px -30px rgba(0,0,0,0.61);
`;

export default Wrapper;
export {
  StyledLetter
};
