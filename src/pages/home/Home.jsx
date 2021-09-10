import React from 'react';
import { withRouter } from 'react-router-dom';
import './home.scss';
import {compose} from "redux";
import CardFormStep from "../../components/CardFormStep/CardFormStep";


const Home = () => {

  return (
    <>
      <CardFormStep />
    </>

  );
};

export default compose(
  withRouter,
)(Home);
