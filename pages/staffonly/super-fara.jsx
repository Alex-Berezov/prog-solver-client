import { useState } from 'react'
import * as Styled from './styles'

const superFara = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Styled.Container>
      <FormWrapper>
          <Form onSubmit={e => e.preventDefault()}>
            <InputField>
              <TextLabel>E-mail:</TextLabel>
              <Input onChange={e => setEmail(e.target.value)} />
            </InputField>

            <InputField>
              <TextLabel>Password:</TextLabel>
              <Input onChange={e => setPassword(e.target.value)} />
            </InputField>

            <FormBtn onClick={login}>Go Go Go</FormBtn>
          </Form>
        </FormWrapper>
    </Styled.Container>
  );
};

export default superFara