import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import Title from '../components/Title/Title';
import Subtitle from '../components/Subtitle/Subtitle';

const StyledHeader = styled.header`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: ${props => props.styles.primaryColor};

    & > * {
      margin: 0;
      margin-left: 10%;
    }
`;

const Header = ({ text, styles }) => (
  <StyledHeader styles={styles}>
    <Title text={text || 'Good afternoon!'} />
    <Subtitle text="It looks like you have new messages..." />
  </StyledHeader>
);

Header.propTypes = {
  text: string.isRequired
};

const mapStateToProps = state => ({
  text: state.text,
  styles: state.styles
});

export default connect(mapStateToProps)(Header);
