import styled from "styled-components";

const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 60vh;
`;

ButtonWrapper.Item = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  margin: 15px;
  font-size: 20px;
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
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  height: 5vh;
  margin-bottom: 5vh;
  background-color: #fff;
  text-align: left;
`;

ArrowWrapper.Icon = styled.h1`
  margin-right: 15px;
  cursor: pointer;
`;

export default SidebarWrapper;
