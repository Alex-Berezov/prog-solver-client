import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as Styled from './styles'

import gorizontalAdd from '../../public/static/728x90.png'

const Header = () => {
  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.NavbarItem>
          <Link href="/">
            <Styled.Logo>Prog Solver</Styled.Logo>
          </Link>
        </Styled.NavbarItem>
        <Styled.Adds>
          <Styled.AddsWrapper>
            <Image src={gorizontalAdd} alt="gorizontalAdd" />
          </Styled.AddsWrapper>
        </Styled.Adds>
      </Styled.Container>
    </Styled.Header>
  )
}

export default Header