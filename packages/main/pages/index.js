import Head from 'next/head'
import React from "react";
import Footer from "components/lib/main/Footer";
import Main from "components/lib/main/Main";
import Header from "components/lib/main/Header";


const Home = () => {
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
      <Footer/>
    </>
  )
}

export default Home;