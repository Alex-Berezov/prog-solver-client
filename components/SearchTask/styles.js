import styled from 'styled-components'
import Image from 'next/image'
import { scRespondTo } from '../../utils/index'

export const SearchTask = styled.div`
  position: relative;
  margin-bottom: 70px;

  span {
    position: absolute !important;
    left: 0 !important;
    bottom: 3px !important;
    z-index: 1;
    width: 30px !important;
    height: 30px !important;
  }
`

export const SearchTaskInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  padding-left: 40px;
  padding-bottom: 5px;

  font-family: 'Cousine';
  font-style: normal;
  letter-spacing: 0.21em;
  color: #000000;

  ${scRespondTo.preMd} {
    width: 50%;
  }
`

export const SearchTaskImg = styled(Image)`
  width: 30px !important;
  height: 30px !important;
`
