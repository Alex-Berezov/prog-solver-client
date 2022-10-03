import styled from 'styled-components'
import { scRespondTo } from '../../utils/index'

export const Header = styled.header`
  background: #FEFEFE;
  padding: 17px 0;
`

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
`

export const NavbarItem = styled.div`
  width: 100%;

  ${scRespondTo.sm} {
    width: 15%;
  }
`

export const Logo = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #3260A1;
  cursor: pointer;
`

export const AddsWrapper = styled.div`
  width: 100%;
`

export const Adds = styled.div`
  display: none;

  ${scRespondTo.sm} {
    display: block;
    width: 85%;
    padding-left: 30px;
    text-align: center;
  }
`