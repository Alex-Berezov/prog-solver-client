import React from 'react'
import styled from 'styled-components'
import { useWithCredentials } from '../../../hooks/useWithCredentials'
import Header from '../../../components/Header/Header'
import Head from 'next/head'

const Container = styled.main`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`

const AdminWrapper = styled.div`
  display: flex;

`

const AdminNav = styled.nav`
  width: 15%;
`

const ContetnPart = styled.div`
  width: 85%;
`

const Dashboard = () => {
  useWithCredentials()

  return (
    <Container>
      <Head>
        <title>Login | Registration</title>
      </Head>

      <Header />

      <AdminWrapper>
        <AdminNav>Some nav</AdminNav>
        <ContetnPart>Some content</ContetnPart>
      </AdminWrapper>
    </Container>
  )
}

export default Dashboard