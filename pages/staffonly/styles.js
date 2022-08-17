import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
`

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 40%;
`

export const Form = styled.form`
  background: #FFFFFF;
  border-radius: 15px;
  padding: 30px;
  max-width: 500px;
  width: 100%;
  min-height: 315px;
`

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

export const Input = styled.input`
  width: 100%;
  display: flex;
  border: 1px solid #E5E5E5;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  padding: 5px 10px;
`

export const TextLabel = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #222222;
  margin-bottom: 5px;
`

export const FormBtn = styled.button`
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

export const SwitchFormBtn = styled.div`
  margin-right: auto;
  padding-left: 30px;
`

export const SwitchButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`