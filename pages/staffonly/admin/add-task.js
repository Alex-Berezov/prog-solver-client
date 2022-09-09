import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import AdminContainer from '../../../components/AdminContainer/AdminContainer.jsx'
import * as Styled from '../../../styles/Theme/commonStyles.js'
import Head from 'next/head'
import Header from '../../../components/Header/Header.jsx'
import Tabs from '../../../components/Tabs/Tabs.js'
import { useWithCredentials } from '../../../hooks/useWithCredentials'
import { langList } from '../../../data/langList'

const FormWrapper = styled.div`
  display: flex;
`

const Form = styled.form`
  background: #FFFFFF;
  border-radius: 15px;
  padding: 30px 0;
  width: 100%;
`

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

const TextLabel = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #222222;
  margin-bottom: 5px;
  
`

const Input = styled.input`
  width: 100%;
  display: flex;
  border: 1px solid #E5E5E5;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  padding: 5px 10px;
`

const TextArea = styled.textarea`
  width: 100%;
  display: flex;
  border: 1px solid #E5E5E5;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  padding: 5px 10px;
  min-height: 300px;
  resize: none;
`

const FormBtn = styled.button`
  display: flex;
  margin: 30px auto 0 auto;
  padding: 9px 38px;
  background: #67BFFF;
  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
  border: none;
  border-radius: 10px;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 25px rgba(148, 174, 213, 0.5);
    transition: .3s all ease;
  }
`

const AddTask = () => {
  useWithCredentials()
  const [solutionsList, setSolutionsList] = useState([])

  useEffect(() => {    
    const solutionsArr = langList?.map(item => (
      {
        lang: item.lang,
        solutions: [
          {id: `${item.lang}-${0}`, solution: ''},
          {id: `${item.lang}-${1}`, solution: ''},
          {id: `${item.lang}-${2}`, solution: ''},
          {id: `${item.lang}-${3}`, solution: ''},
          {id: `${item.lang}-${4}`, solution: ''},
          {id: `${item.lang}-${5}`, solution: ''}
        ]
      }
    ))

    setSolutionsList(solutionsArr)
  }, [])

  return (
    <Styled.Container>
      <Head>
        <title>Add new task</title>
      </Head>

      <Header />

      <AdminContainer>
        <Styled.H3>Add new task</Styled.H3>

        <FormWrapper>
          <Form onSubmit={e => e.preventDefault()}>
            <InputField>
              <TextLabel>Task title:</TextLabel>
              <Input />
            </InputField>

            <InputField>
              <TextLabel>Task description:</TextLabel>
              <TextArea />
            </InputField>

            <InputField>
              <Tabs
                items={langList}
                solutionsList={solutionsList}
                setSolutionsList={setSolutionsList}
              />
            </InputField>

            <InputField>
              <TextLabel>Task image:</TextLabel>
              <Input type="file" />
            </InputField>
          </Form>
        </FormWrapper>
      </AdminContainer>
    </Styled.Container>
  )
}

export default AddTask