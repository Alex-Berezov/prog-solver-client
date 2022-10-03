import styled from 'styled-components'
import { scRespondTo } from '../../utils/index';

export const ContentWrapper = styled.article`
  display: flex;
  margin-bottom: 50px;
`

export const LeftSideBar = styled.aside`
  display: none;

  ${scRespondTo.sm} {
    display: block;
    width: 15%;
    height: fit-content;
    position: sticky;
    top: 10px;
  }
`

export const ContetnPart = styled.section`
  width: 100%;

  ${scRespondTo.sm} {
    width: 85%;
    padding-left: 30px;
  }
`

export const AddsWrapper = styled.div``