import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header/Header';
import Wrapper from './styles';

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Header title={t('text.loginOrRegister')} />
    </Wrapper>
  );
};

export default LoginPage;
