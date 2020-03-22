import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.secondaryColor};
`;

export default Wrapper;
