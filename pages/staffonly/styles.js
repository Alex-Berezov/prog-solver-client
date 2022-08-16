import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
`

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  background: #FFFFFF;
  border-radius: 15px;
  padding: 30px;
  max-width: 500px;
  width: 100%;
`

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
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