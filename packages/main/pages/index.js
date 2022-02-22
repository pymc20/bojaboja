/* @flow */
import Head from 'next/head'
import * as React from "react";
import Footer from "../components/main/Footer";
import Main from "../components/main/Main";
import Header from "../components/main/Header";

const Home = (): React.Node => {
  return (
    <>
      <Head>
        <title>Boja Boja</title>
        <meta name="description" content="video platform" />
        <meta name="keyword" content="video, web, contents, movie" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta charSet="utf-8" />
      </Head>
      <Header/>
      <Main/>
      <Footer props={{
          address: "한국",
          copyright: "Copyright © 2022 bojaboja. All rights reserved."
      }} />
    </>
  )
}

export default Home;