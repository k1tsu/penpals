import styled from "styled-components";

const SidebarWrapper = styled.div`
  background-color: white;
`;
export const ButtonWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  float: left;
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
  margin: 15px;
  display: flex;
  align-items: center;
`;

ProfileWrapper.Image = styled.img`
  vertical-align: middle;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;
ProfileWrapper.Name = styled.span`
  margin-left: 18px;
  vertical-align: middle;
  font-size: 20px;
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
`;

ArrowWrapper.Icon = styled.p``;

export default SidebarWrapper;
