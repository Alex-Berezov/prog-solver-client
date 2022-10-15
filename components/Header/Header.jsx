import React from 'react'
import Link from 'next/link'
import * as Styled from './styles'

const Header = () => {
  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.NavbarItem>
          <Link href="/">
            <Styled.Logo>{`{ Prog Solver }`}</Styled.Logo>
          </Link>
        </Styled.NavbarItem>
        <Styled.Adds>
          <Styled.AddsWrapper></Styled.AddsWrapper>
        </Styled.Adds>
      </Styled.Container>
    </Styled.Header>
  )
}

export default Header