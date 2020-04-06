import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { fetchReceivedLetters } from "../redux/actions/lettersActions";

const Home = ({ letters, auth, dispatch }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Header title={t("text.hello")} subtitle={t("text.hasLetters")} />
      <Letters letters={letters} />
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  theme: state.theme,
  letters: state.letters,
  auth: state.auth
});

export default connect(mapStateToProps)(Home);
