import Header from '@main/Header';
import React, { ReactElement } from 'react';
import MainIndex from './main';

function Home(): ReactElement {
  return (
    <>
      <Header />
      <MainIndex />
    </>
  );
}

export default Home;
