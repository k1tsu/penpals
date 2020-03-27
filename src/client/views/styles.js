import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: ${props => (props.center ? 'center' : null)};
    align-items: ${props => (props.center ? 'center' : null)};
    flex-direction: ${props => props.flexDirection || 'row'};
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.secondaryColor};
`;

export default Wrapper;
