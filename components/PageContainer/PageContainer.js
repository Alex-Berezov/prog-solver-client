import React from 'react'
import * as Styled from './styles.js'

const PageContainer = ({ children }) => {
  return (
    <Styled.ContentWrapper>
      <Styled.LeftSideBar>
        <Styled.AddsWrapper></Styled.AddsWrapper>
      </Styled.LeftSideBar>
      <Styled.ContetnPart>{children}</Styled.ContetnPart>
    </Styled.ContentWrapper>
  )
}

export default PageContainer