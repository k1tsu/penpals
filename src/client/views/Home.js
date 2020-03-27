import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header/Header';
import Letters from '../components/Letters/Letters';
import Wrapper from './styles';
import { fetchReceivedLetters } from '../redux/actions/lettersActions';

const Home = ({ letters }) => {
  const { t } = useTranslation();

  useEffect(() => {
    fetchReceivedLetters();
  }, []);

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
