import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import AdminContainer from '../../../components/AdminContainer/AdminContainer.jsx'
import * as Styled from '../../../styles/Theme/commonStyles.js'
import Head from 'next/head'
import Header from '../../../components/Header/Header.jsx'
import Tabs from '../../../components/Tabs/Tabs.js'
import { useWithCredentials } from '../../../hooks/useWithCredentials'

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

const LangListWrapper = styled.div`
  display: flex;
`

const LangList = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  border: 1px solid grey;
  border-radius: 3px;
  padding: 5px;
  cursor: pointer;

  ${TextLabel} {
    margin: 0;
    padding: 0;
    margin-right: 5px;
    font-weight: 400;
  }

  ${Input} {
    margin: 0;
    padding: 0;
  }
`


const LANGUAGES_LIST = [
  {id: 0, lang: 'JS', selected: false},
  {id: 1, lang: 'PHP', selected: false},
  {id: 2, lang: 'Pyton', selected: false}
]

const SOLUTIONS_ARR = [
  {
    lang: "",
    solutions: [
      {id: 0, solution: ''}
    ]
  }
]

const AddTask = () => {
  useWithCredentials()
  const [checked, setChecked] = useState(LANGUAGES_LIST)
  const [selectedLang, setSelectedLang] = useState([])
  const [solutionsList, setSolutionsList] = useState(null)

  const handleSelectLang = useCallback(id => {
    return LANGUAGES_LIST.map(item => {
      if(item.id === id) {
        item.selected = !item.selected
      }
    })
  })

  const selectLang = useCallback(id => {
    handleSelectLang(id)
    setChecked([...Object.assign(LANGUAGES_LIST)])
  }, [])

  useEffect(() => {
    const selectedLangArr = checked.filter(item => item.selected)
    setSelectedLang(selectedLangArr)
  }, [checked])

  useEffect(() => {
    const solutionsArr = selectedLang?.map((item, i) => (
      {
        lang: item.lang,
        solutions: [
          {id: i, solution: ''}
        ]
      }
    ))

    setSolutionsList(solutionsArr)
  }, [selectedLang])

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
              <TextLabel>Languages:</TextLabel>
              <LangListWrapper>
                {
                  checked.map(item => (
                    <LangList key={item.id} onClick={() => selectLang(item.id)}>
                      <TextLabel>{item.lang}</TextLabel>
                      <Input type="checkbox" onChange={handleSelectLang} checked={item.selected} />
                    </LangList>
                  ))
                }
              </LangListWrapper>
            </InputField>

            <InputField>
              <Tabs
                items={selectedLang}
                solutionsList={solutionsList}
                setSolutionsList={setSolutionsList}
              />
            </InputField>
          </Form>
        </FormWrapper>
      </AdminContainer>
    </Styled.Container>
  )
}

export default AddTask