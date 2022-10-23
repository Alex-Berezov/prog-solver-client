import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globalstyles'
import { theme } from '../styles/Theme/commonTheme.js'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Script from 'next/script'

export const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'production'
    ? 'https://progsolver.com/api/graphql'
    : 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-10DERW20YY"/>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-10DERW20YY');
        `}
      </Script>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}
