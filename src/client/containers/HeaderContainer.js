import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { changeText } from '../redux/actions';
import Title from '../components/title/Title';
import Subtitle from '../components/Subtitle/Subtitle';
import { string } from 'prop-types';

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
    <Title text={text} />
    <Subtitle text="It looks like you have new messages..." />
  </StyledHeader>
);

Header.propTypes = {
  text: string.isRequired
};

const mapStateToProps = state => ({
  text: state.text
});

const mapDispatchToProps = ({
  changeText
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
