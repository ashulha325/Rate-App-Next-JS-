import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Head from "next/head";

export default function App({Component, pageProps}: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>My Top - наш лучший топ!</title>
                <link key={1} rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
