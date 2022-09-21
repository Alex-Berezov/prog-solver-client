import React from 'react'
import * as Styled from './styles.js'
import AdminNav from '../AdminNav/AdminNav'

const AdminContainer = ({ children }) => {
  return (
    <Styled.AdminWrapper>
      <Styled.NavPart>
        <AdminNav />
      </Styled.NavPart>
      <Styled.ContetnPart>{children}</Styled.ContetnPart>
    </Styled.AdminWrapper>
  )
}

export default AdminContainer