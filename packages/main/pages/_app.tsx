import React from 'react';
import Footer from '@components/main/Footer';
import Head from 'next/head';
import { useEffect, useState, ReactElement } from 'react';
import { tokenVerify } from '../../crypto-util';
import Router from 'next/router';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { GlobalReset } from '@components/GlobalReset';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const [auth, setAuth] = useState(false);
  if (typeof window !== 'undefined' && !auth && localStorage.getItem('token')) {
    const token = localStorage.getItem('token');
    const authResult = tokenVerify(token, process.env.SECRET_KEY);
    setAuth(authResult);
  }
  useEffect(() => {
    if (!auth) {
      Router.push('/member/login').then();
    }
  }, [auth]);

  return (
    <>
      <GlobalReset font={'font/NotoSansKR-Regular.otf'} />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Boja Boja</title>
        <meta name="description" content="video platform" />
        <meta name="keyword" content="video, web, contents, movie" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta charSet="utf-8" />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
      <Footer
        address={'한국'}
        copyright={'Copyright © 2022 bojaboja. All rights reserved.'}
      />
    </>
  );
}

export default MyApp;
