import React from 'react'
import * as Styled from './styles'
import Link from 'next/link'

const AdminNav = () => {
  return (
    <Styled.NavWrapper>
      <Link href="/staffonly/admin/dashboard">
        <Styled.NavLink>Dashboard</Styled.NavLink>          
      </Link>
      <Link href="/staffonly/admin/posts">
        <Styled.NavLink>Posts</Styled.NavLink>          
      </Link>
    </Styled.NavWrapper>
  )
}

export default AdminNav