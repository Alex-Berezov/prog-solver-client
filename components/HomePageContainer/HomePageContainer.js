import React from 'react'
import * as Styled from './styles.js'

const HomePageContainer = ({ children }) => {
  return (
    <Styled.ContentWrapper>
      <Styled.LeftSideBar>Adds part</Styled.LeftSideBar>
      <Styled.ContetnPart>{children}</Styled.ContetnPart>
    </Styled.ContentWrapper>
  )
}

export default HomePageContainer