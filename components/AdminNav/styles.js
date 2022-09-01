import styled from 'styled-components'
import { Link } from 'next/link'

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const NavLink = styled.a`
  padding: 10px 0;
  background: #f8f8f8;
  border-bottom: 1px solid grey;
  cursor: pointer;
`