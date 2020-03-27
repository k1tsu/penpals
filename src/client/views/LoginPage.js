import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Wrapper from './styles';
import LoginForm from '../components/LoginForm/LoginForm';

const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <Wrapper flexDirection="column">
      <Header title={t('text.loginOrRegister')} />
      <LoginFormWrapper>
        <LoginForm />
      </LoginFormWrapper>
    </Wrapper>
  );
};

export default LoginPage;
