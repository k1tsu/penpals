import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header/Header';
import Letters from '../components/Letters/Letters';
import Wrapper from './styles';

const Home = ({ letters }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Header
        title={t('text.hello')}
        subtitle={t('text.hasLetters')}
      />
      <Letters letters={letters} />
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  theme: state.theme,
  letters: state.letters
});

export default connect(mapStateToProps)(Home);
