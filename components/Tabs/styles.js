import styled from 'styled-components'
import { H3 } from '../../styles/Theme/commonStyles.js'

export const Tab = styled.div`
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
`

export const Button = styled.button`
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;

  &:hover {
    background-color: #ddd;
  }

  &.active {
    background-color: #ccc;
  }
`

export const TabContent = styled.div`
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
`

export const Title = styled(H3)``

export const Content = styled.div``

export const AddSolutionsFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const AddSolutionsFieldsTitle = styled(H3)`
  margin: 30px 0 10px 0;
`

export const AddSolutionsFieldsInput = styled.textarea`
  width: 100%;
  display: flex;
  border: 1px solid #E5E5E5;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  padding: 5px 10px;
  min-height: 100px;
  resize: none;
`