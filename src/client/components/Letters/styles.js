import styled from 'styled-components';

const LettersWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 40%;
    align-self: center;
    justify-self: center;
    white-space: nowrap;
    text-align: left;
    overflow-x: scroll;
    z-index: 10;

    :nth-child(1) {
      margin-left: 10%;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`;

export default LettersWrapper;
