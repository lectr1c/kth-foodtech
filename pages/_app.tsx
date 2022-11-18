import { AppProps } from 'next/app';
import Head from 'next/head';
import { useState} from "react";
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import '../styles/globals.css';
import { SessionProvider } from "next-auth/react"
import { NotificationsProvider } from '@mantine/notifications';
import SchemeToggler from '../components/SchemeToggler';

// @ts-ignore
export default function App({ Component, pageProps: { session, ...pageProps }}) {

    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
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
                <NotificationsProvider>
                    <SessionProvider session={session}>
                        <SchemeToggler/>
                        <Component {...pageProps} />
                    </SessionProvider>
                </NotificationsProvider>
            </MantineProvider>
            </ColorSchemeProvider>
        </>
    );
}