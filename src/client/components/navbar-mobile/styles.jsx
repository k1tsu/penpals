import styled from "styled-components";

const NavbarButtonWrapper = styled.div`
  bottom: 0;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: white;
  align-items: center;
`;

NavbarButtonWrapper.Button = styled.p`
  margin: 1vh;
  font-size: 30px;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export default NavbarButtonWrapper;
