import Header from '@main/Header';
import { ReactElement } from 'react';
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
