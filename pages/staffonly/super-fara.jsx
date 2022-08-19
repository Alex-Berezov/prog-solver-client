import { useState } from 'react'
import Head from 'next/head'
import * as Styled from './styles.js'
import { Header } from '../../components/Header/styles.js'
import { useMutation } from '@apollo/client'
import { CREATE_USER, LOGIN } from '../../graphql/mutations/user'

const SuperFara = () => {
  const [newUser] = useMutation(CREATE_USER)
  const [login] = useMutation(LOGIN)
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const sendForm = async () => {
    if (isLogin) {
      try {
        await login({
          variables: { email, password }
        })
        .then(data => {
          if (data.data.login.approved) {
            console.log('====================================');
            console.log('login data >>', data.data.login);
            console.log('====================================');
          }
        })
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
        setApproved(false)
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

      <Styled.FormWrapper>
          <Styled.FormHeader>
            { isLogin ? <h1>Login</h1> : <h1>Registration</h1> }
          </Styled.FormHeader>
          <Styled.Form onSubmit={e => e.preventDefault()}>
            <Styled.InputField>
              <Styled.TextLabel>E-mail:</Styled.TextLabel>
              <Styled.Input type="email" onChange={e => setEmail(e.target.value)} />
            </Styled.InputField>

            <Styled.InputField>
              <Styled.TextLabel>Password:</Styled.TextLabel>
              <Styled.Input type="password" onChange={e => setPassword(e.target.value)} />
            </Styled.InputField>

            { !isLogin &&
              <Styled.InputField>
                <Styled.TextLabel>Confirm password:</Styled.TextLabel>
                <Styled.Input onChange={e => setConfirmPassword(e.target.value)} />
              </Styled.InputField>
            }

            <Styled.FormBtn onClick={sendForm}>Go Go Go</Styled.FormBtn>
          </Styled.Form>

          <Styled.SwitchFormBtn>
            <Styled.SwitchButton onClick={() => setIsLogin(false)}>Registration</Styled.SwitchButton>
            {' / '}
            <Styled.SwitchButton onClick={() => setIsLogin(true)}>Login</Styled.SwitchButton>
          </Styled.SwitchFormBtn>
        </Styled.FormWrapper>
    </Styled.Container>
  )
};

export default SuperFara