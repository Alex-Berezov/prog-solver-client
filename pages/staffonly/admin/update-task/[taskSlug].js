import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import AdminContainer from '../../../../components/AdminContainer/AdminContainer.jsx'
import * as Styled from '../../../../styles/Theme/commonStyles.js'
import Head from 'next/head'
import Header from '../../../../components/Header/Header.jsx'
import Tabs from '../../../../components/Tabs/Tabs.js'
import { useWithCredentials } from '../../../../hooks/useWithCredentials'
import { langList } from '../../../../data/langList'
import { useRouter } from 'next/router.js'
import { useMutation, useQuery } from '@apollo/client'
import { UPDATE_TASK } from '../../../../graphql/mutations/tasks'
import { GET_TASK } from '../../../../graphql/query/tasks.js'

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

const UpdateTask = () => {
  useWithCredentials()
  const router = useRouter()
  const taskSlug = router.asPath.split('/').reverse()[0]

  const { data } = useQuery(GET_TASK, {
    variables: {
      taskSlug
    }
  })

  console.log('====================================');
  console.log('data >>', data);
  console.log('====================================');

  const [updateTask] = useMutation(UPDATE_TASK)  
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [solutionsList, setSolutionsList] = useState([])

  useEffect(() => {
    setTitle(data?.getTask?.title)
    setText(data?.getTask?.text)
    setSolutionsList(data?.getTask?.solutionsList)
  }, [data])

  console.log('====================================');
  console.log('solutionsList >>', solutionsList);
  console.log('====================================');

  const sendUpdatesTask = useCallback(async () => {
    try {
      await updateTask({
        variables: {
          taskSlug: taskSlug,
          input: {
            title, text, solutionsList, imgUrl, imgAuthor
          }
        }
      })
      .then(() => router.push('/staffonly/admin/tasks'))
    } catch (error) {
      console.log('Add update task error on client >>', error)
    }
  })

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
              <Input onChange={e => setTitle(e.target.value)} />
            </InputField>

            <InputField>
              <TextLabel>Task description:</TextLabel>
              <TextArea onChange={e => setText(e.target.value)} />
            </InputField>

            <InputField>
              <Tabs
                items={langList}
                solutionsList={solutionsList}
                setSolutionsList={setSolutionsList}
              />
            </InputField>

            <FormBtn onClick={sendUpdatesTask}>Add Task</FormBtn>
          </Form>
        </FormWrapper>
      </AdminContainer>
    </Styled.Container>
  )
}

export default UpdateTask