import React, { useEffect, useState } from 'react';
import styled, { withTheme } from 'styled-components';
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

const CurrentLetter = ({ theme }) => {
  const [letter, setLetter] = useState({ text: '' });
  const { letterId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/api/letters?id=${letterId}`)
      .then(data => data.json())
      .then(data => setLetter(data[0]));
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

export default withTheme(CurrentLetter);
