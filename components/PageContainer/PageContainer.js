import React from 'react'
import * as Styled from './styles.js'
import Image from 'next/image'

import verticalAdd from '../../public/static/800x.png'

const PageContainer = ({ children }) => {
  return (
    <Styled.ContentWrapper>
      <Styled.LeftSideBar>
        <Styled.AddsWrapper>
          <Image src={verticalAdd} alt="verticalAdd" />
        </Styled.AddsWrapper>
      </Styled.LeftSideBar>
      <Styled.ContetnPart>{children}</Styled.ContetnPart>
    </Styled.ContentWrapper>
  )
}

export default PageContainer