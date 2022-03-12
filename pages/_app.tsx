import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { useState} from "react";
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import '../styles/globals.css';

export default function App(props: AppProps) {
    const { Component, pageProps } = props;

    const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));


    return (
        <>
            <Head>
                <title>KTH FoodTech</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>


            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{ colorScheme }}>
                <Component {...pageProps} />
            </MantineProvider>
            </ColorSchemeProvider>
        </>
    );
}