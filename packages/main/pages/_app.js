import '../public/styles/globals.css'
import Head from "next/head";
import Footer from "@main/Footer";

const MyApp = ({Component, pageProps}) => {
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
            <Component {...pageProps} />
            <Footer props={{
                address: "한국",
                copyright: "Copyright © 2022 bojaboja. All rights reserved."
            }}/>
        </>
    )
}

export default MyApp
