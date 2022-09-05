import React from 'react'
import styled from 'styled-components'
import * as Styled from '../../../styles/Theme/commonStyles.js'
import { useWithCredentials } from '../../../hooks/useWithCredentials'
import Header from '../../../components/Header/Header'
import Head from 'next/head'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'

const Dashboard = () => {
  useWithCredentials()

  return (
    <Styled.Container>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Header />

      <AdminContainer>
        Dashboard content
      </AdminContainer>
    </Styled.Container>
  )
}

export default Dashboard