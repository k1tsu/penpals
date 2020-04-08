import styled from "styled-components";

const LetterViewWrapper = styled.div`
  background-color: white;
  margin-left: 15vh;
  margin-right: 15vh;
  margin-top: 5vh;
  margin-bottom: 5vh;
  border-radius: 9px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

LetterViewWrapper.Text = styled.p`
  margin-top: 10%;
  margin-left: 5%;
  margin-right: 5%;
`;

LetterViewWrapper.Id = styled.i`
  bottom: -26vh;
  font-size: 10px;
  color: grey;
  margin-left: 5px;
  position: relative;
  float: left;
`;

export const SenderProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1%;
  font-size: 20px;
`;

SenderProfileWrapper.ProfilePicture = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

SenderProfileWrapper.FromText = styled.i`
  margin: 10px;
`;

SenderProfileWrapper.SenderName = styled.p`
  margin-left: 7px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 12%;
`;

TitleWrapper.Title = styled.h2`
  font-family: IBM Plex Mono;
  text-align: center;
`;

export default LetterViewWrapper;
