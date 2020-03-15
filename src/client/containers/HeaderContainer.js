import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import Title from '../components/title/Title';
import Subtitle from '../components/Subtitle/Subtitle';

const StyledHeader = styled.header`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: #FFBA60;

    & > * {
      margin: 0;
      margin-left: 10%;
    }
`;

const Header = ({ text }) => (
  <StyledHeader>
    <Title text={text || 'Good afternoon!'} />
    <Subtitle text="It looks like you have new messages..." />
  </StyledHeader>
);

Header.propTypes = {
  text: string.isRequired
};

const mapStateToProps = state => ({
  text: state.text
});

export default connect(mapStateToProps)(Header);
