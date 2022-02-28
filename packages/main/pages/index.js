// @flow
import Head from 'next/head'
import * as React from "react";
import Main from "@main/Main";
import Header from "@main/Header";

const Home = (): React.Node => {
    return (
        <>
            <Head>
                <title>Boja Boja</title>
                <meta name="description" content="video platform"/>
                <meta name="keyword" content="video, web, contents, movie"/>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
                <meta charSet="utf-8"/>
            </Head>
            <Header/>
            <Main/>

        </>
    )
}

export default Home;