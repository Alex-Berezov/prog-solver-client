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

const ErrorTitle = styled(H1)``

const LinkText = styled.a`
  margin-top: 30px;
  font-size: 20px;
  color: skyblue;
  text-decoration: underline;
  cursor: pointer;
`

export default function FourOhFour() {
  return <Root>
    <ContentWrapper>
      <ErrorTitle>404 - Page Not Found</ErrorTitle>
      <Link href="/">
        <LinkText href="/">
          Go back Home page
        </LinkText>
      </Link>
    </ContentWrapper>
  </Root>
}