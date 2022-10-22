import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globalstyles'
import { theme } from '../styles/Theme/commonTheme.js'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

export const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'production'
    ? 'https://progsolver.com/api/graphql'
    : 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}
