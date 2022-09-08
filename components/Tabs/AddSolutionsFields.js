import React, { useCallback, useState } from 'react'
import * as Styled from './styles.js'

const AddSolutionsFields = ({ lang, setSolutionsList, solutionsList }) => {
  const [, forceUpdate] = useState()

  const handleAddedsolution = useCallback((e) => {
    const ID = e.target.id
    let VALUE = e.target.value

    const res = solutionsList?.solutions?.find(item => item.solution === VALUE)
    if (res) return false

    solutionsList.map(item => {
      if (item.lang === lang) {
        item.solutions.map(el => {
          if (el.id === +ID) {
            el.solution = VALUE
          }
        })
      }
      
    })

    setSolutionsList([...Object.assign(solutionsList)])

    forceUpdate()
  })

  const addNewField = useCallback(() => {
    solutionsList.map(item => {
      if (item.lang === lang) {
        item.solutions = [...item.solutions, {id: item.solutions.length + 1, solution: ''}]
      }      
    })

    setSolutionsList([...Object.assign(solutionsList)])

    forceUpdate()
  })

  console.log('====================================');
  console.log('solutionsList >>', solutionsList);
  console.log('====================================')

  return (
    <Styled.AddSolutionsFieldsWrapper>
      {
        solutionsList?.map((item, i) => (
          item.lang === lang &&
          <div key={item.lang + i}>
            <Styled.AddSolutionsFieldsTitle>Solution #{i + 1}</Styled.AddSolutionsFieldsTitle>
            <Styled.AddSolutionsFieldsTextarea
              id={i}
              onBlur={handleAddedsolution}
            >
              {item.solutionList?.solutions?.solution}
            </Styled.AddSolutionsFieldsTextarea>
          </div>
        ))
      }
      <button onClick={addNewField}>Add field</button>
    </Styled.AddSolutionsFieldsWrapper>
  )
}

export default AddSolutionsFields