import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  .hljs {
    color: #e5e7eb;
    background-color: #131414;
  }

  pre code .hljs-keyword {
    color: #b294bb;
    font-weight: 400;
  }

  pre code .hljs-title {
    color: #de935f;
    font-weight: 400;
  }

  pre code .hljs-params {
    color: #e5e7eb;
    font-weight: 400;
  }

  pre code .hljs-regexp {
    color: #b5bd68;
    font-weight: 400;
  }

  pre code .hljs-string {
    color: #81a2be;
    font-weight: 400;
  }

  pre code .hljs-property {
    color: #81a2be;
    font-weight: 400;
  }
`

export default GlobalStyle