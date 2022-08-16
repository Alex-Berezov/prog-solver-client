import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globalstyles'
import { theme } from '../styles/Theme/commonTheme.js'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
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