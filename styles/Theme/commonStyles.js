import styled from 'styled-components'
import { scRespondTo } from '../../utils'

export const Container = styled.main`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  ${scRespondTo.sm} {
    padding: 0 30px;
    max-width: 1280px;
  }
`

export const H1 = styled.h1`
  margin: 0;
  font-weight: 500;
  font-size: 28px;
  font-family: 'Determination Mono Web';
`

export const H2 = styled.h2`
  font-family: 'Determination Mono Web';
  font-weight: 500;
  font-size: 30px;
`

export const H3 = styled.h3`
  font-family: 'Cousine';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.21em;
  color: #000000;
`

export const Text = styled.p`
  font-family: 'Cousine';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.21em;
  color: #000000;

  ${scRespondTo.sm} {
    font-size: 16px;
    line-height: 18px;
  }
`