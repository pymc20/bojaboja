// @flow
import Header from "@main/Header";
import Head from 'next/head';
import * as React from "react";
import MainIndex from "./main";
import {useEffect, useState} from "react";
import aes from "crypto-js/aes";
import enc from "crypto-js/enc-utf8";

const Home = () => {
    const [auth, setAuth] = useState(false)
    if (typeof window !== "undefined") {
        const token = localStorage.getItem("token")
        const bytes = aes.decrypt(token, process.env.SECRET_KEY)
        const result = JSON.parse(bytes.toString(enc))
        console.log(result)
    }
    useEffect(() => {
        const token = localStorage.getItem("token")
        console.log(token)
    })

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