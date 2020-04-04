import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Wrapper from './styles';
import Header from '../components/Header/Header';

const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.secondaryTextColor};
  text-align: left;

  & > * {
    margin-left: 10%;
    margin-top: 2.5%;
  }
`;

const CurrentLetter = (props) => {
  const [letter, setLetter] = useState({ text: '', title: '' });
  const { letterId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/api/letters/${letterId}`)
      .then(data => data.json())
      .then(data => setLetter(data));
  }, []);

  return (
    <Wrapper flexDirection="column">
      <Header title={letter.title} subtitle={`From ${letter.author}`} small />
      <TextWrapper>
        <p>
          {
            letter.text.split('\\n').map(item => (
              <>
                {item}
                <br />
              </>
            ))
          }
        </p>
      </TextWrapper>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  theme: state.theme,
  user: state.auth.user
});

export default connect(mapStateToProps)(CurrentLetter);
