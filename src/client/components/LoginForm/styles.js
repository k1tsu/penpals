import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 40%;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  & > button {
    width: 50% !important; 
  }
`;

export default StyledForm;
