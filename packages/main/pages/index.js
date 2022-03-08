// @flow
import Header from "@main/Header";
import Head from 'next/head';
import * as React from "react";
import MainIndex from "./main";

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
            <MainIndex/>
        </>
    )
}



export default Home;