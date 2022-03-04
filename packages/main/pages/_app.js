import '../public/styles/globals.css'
import Footer from "@main/Footer";
import {Provider} from "mobx-react"
import RootStore from "@mobx/store/Root"
import Head from "next/head";
import {useEffect, useState} from "react";
import {tokenVerify} from "../../crypto-util";
import Router from "next/router"

const MyApp = ({Component, pageProps}) => {
    const [auth, setAuth] = useState(false)
    if (typeof window !== "undefined" && !auth && localStorage.getItem("token")) {
        const token = localStorage.getItem("token")
        const authResult = tokenVerify(token, process.env.SECRET_KEY)
        setAuth(authResult)
    }
    useEffect(() => {
        if (!auth) {
            Router.push("/member/login").then()
        }
    }, [auth])

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
            <Provider store={RootStore}>
                <Component {...pageProps} />
            </Provider>
            <Footer props={{
                address: "한국",
                copyright: "Copyright © 2022 bojaboja. All rights reserved."
            }}/>
        </>
    )
}

export default MyApp
