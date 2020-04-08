import styled, { css } from "styled-components";

const SidebarWrapper = styled.div`
  ${props => (props.collapsed ? "width: 5vw;" : "width: 15vw;")}
  transition: width 1s;
  height: 100%;
  display: flex;
  background-color: white;
  flex-direction: column;
  overflow: hidden;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

ButtonWrapper.Item = styled.button`
  -webkit-transition: transform 0.4s ease-in-out;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  outline: none;
  margin: 15px;
  font-size: 20px;
  white-space: pre;

  &:hover {
    transform: scale(1.3);
    -webkit-transition: transform 0.4s ease-in-out;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 10vh;
`;

ProfileWrapper.Image = styled.img`
  border-radius: 50%;
  margin-left: 15px;
  width: 30px;
  height: 30px;
`;
ProfileWrapper.Name = styled.span`
  margin-left: 18px;
  vertical-align: middle;
  font-size: 20px;
`;

export const ArrowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 5vh;
  margin-bottom: 5vh;
  text-align: left;
`;

ArrowWrapper.Icon = styled.h1`
  margin-right: 15px;
  cursor: pointer;
`;

export default SidebarWrapper;
