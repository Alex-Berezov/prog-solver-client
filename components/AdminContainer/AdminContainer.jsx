import React from 'react'
import styled from 'styled-components'
import AdminNav from '../AdminNav/AdminNav'

const AdminWrapper = styled.div`
  display: flex;
`

const NavPart = styled.nav`
  width: 15%;
`

const ContetnPart = styled.div`
  width: 85%;
  padding-left: 30px;
`

const AdminContainer = ({ children }) => {
  return (
    <AdminWrapper>
      <NavPart>
        <AdminNav />
      </NavPart>
      <ContetnPart>{children}</ContetnPart>
    </AdminWrapper>
  )
}

export default AdminContainer