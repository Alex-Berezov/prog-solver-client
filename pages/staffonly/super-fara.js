import { useState } from 'react'
import styled from 'styled-components'
import * as Styled from '../../styles/commonStyles.js'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../../components/Header/Header'
import { useMutation } from '@apollo/client'
import { CREATE_USER, LOGIN } from '../../graphql/mutations/user.js'

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 40%;
`

const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Approved = styled.p`
  color: red;
  margin: 0;
`

const Form = styled.form`
  background: #FFFFFF;
  border-radius: 15px;
  padding: 30px;
  max-width: 500px;
  width: 100%;
  min-height: 315px;
`

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
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

const TextLabel = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #222222;
  margin-bottom: 5px;
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

const SwitchFormBtn = styled.div`
  margin-right: auto;
  padding-left: 30px;
`

const SwitchButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`

const SuperFara = () => {
  const [newUser] = useMutation(CREATE_USER)
  const [login] = useMutation(LOGIN)
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter()

  const sendForm = async () => {
    if (isLogin) {
      try {
        await login({
          variables: {
            input: { email, password }
          }
        })
        .then(data => {
          if (data.data.login.approved) {
            localStorage.setItem('token', data.data.login.token)
            localStorage.setItem('email', data.data.login.email)
          }
        })
        .then(() => router.push('/staffonly/admin/dashboard'))
      } catch (error) {
        console.log('Login error on client >>', error)
      }
    } else {
      try {
        await newUser({
          variables: {
            input: { email, password, confirmPassword }
          }
        })
        
      } catch (error) {
        console.log('Add user error on client >>', error)
      }
    }
  }

  return (
    <Styled.Container>
      <Head>
        <title>Login | Registration</title>
      </Head>

      <Header />

      <FormWrapper>
          <FormHeader>
            { isLogin ? <h1>Login</h1> : <h1>Registration</h1> }
          </FormHeader>
          <Form onSubmit={e => e.preventDefault()}>
            <InputField>
              <TextLabel>E-mail:</TextLabel>
              <Input type="email" onChange={e => setEmail(e.target.value)} />
            </InputField>

            <InputField>
              <TextLabel>Password:</TextLabel>
              <Input type="password" onChange={e => setPassword(e.target.value)} />
            </InputField>

            { !isLogin &&
              <InputField>
                <TextLabel>Confirm password:</TextLabel>
                <Input type="password" onChange={e => setConfirmPassword(e.target.value)} />
              </InputField>
            }

            <FormBtn onClick={sendForm}>Go Go Go</FormBtn>
          </Form>

          <SwitchFormBtn>
            <SwitchButton onClick={() => setIsLogin(false)}>Registration</SwitchButton>
            {' / '}
            <SwitchButton onClick={() => setIsLogin(true)}>Login</SwitchButton>
          </SwitchFormBtn>
        </FormWrapper>
    </Styled.Container>
  )
};

export default SuperFara