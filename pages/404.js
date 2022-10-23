import Link from 'next/link'
import styled from 'styled-components'
import { H1 } from '../styles/Theme/commonStyles'

const Root = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LinkText = styled(H1)`
  color: skyblue;
  text-decoration: underline;
  cursor: pointer;
`

export default function FourOhFour() {
  return <Root>
    <ContentWrapper>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <LinkText>
          Go back Home page
        </LinkText>
      </Link>
    </ContentWrapper>
  </Root>
}