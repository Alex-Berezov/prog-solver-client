import React from 'react'
import styled from 'styled-components'
import { useWithCredentials } from '../../../hooks/useWithCredentials'
import Header from '../../../components/Header/Header'
import Head from 'next/head'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'

const Container = styled.main`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`

const Dashboard = () => {
  useWithCredentials()

  return (
    <Container>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Header />

      <AdminContainer>
        Dashboard content
      </AdminContainer>
    </Container>
  )
}

export default Dashboard