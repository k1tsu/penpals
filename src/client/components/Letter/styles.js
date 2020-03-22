import styled from 'styled-components';

const StyledLetterText = styled.h3`
    margin: 0;
    margin-left: 5%;
    margin-right: 2.5%;
    font-family: 'Inter', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: ${props => (props.author ? '0.9em' : '0.7em')};
    white-space: ${props => (props.author ? 'nowrap' : 'normal')};
    word-wrap: break-word;
`;

const StyledLetter = styled.div`
    display: inline-block;
    cursor: pointer;
    margin-left: ${props => (props.first ? '10%' : '1%')};
    margin-right: ${props => (props.last ? '1%' : '0')};
    width: 15vw;
    height: 95%;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    @media (max-width: 1200px) {
      width: 40vw;
      margin-left: ${props => (props.first ? '10%' : '2.5%')};
      margin-right: ${props => (props.last ? '2.5%' : '0')};
    };
`;

const StyledLetterBody = styled.div`
    position: relative;
    padding-top: 2.5%;
    width: 100%;
    height: 80%; 
    overflow-y: hidden;

    &::after {
      content: '';
      width:inherit;
      height:100%;    
      position:absolute;
      left:0;
      top:0;
      background:linear-gradient(transparent 150px, white);
    }
`;

const StyledLetterHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 15%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: transparent;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom: 1px solid #DDDDDD;
`;

export {
  StyledLetterText,
  StyledLetterBody,
  StyledLetterHeader,
  StyledLetter
};
