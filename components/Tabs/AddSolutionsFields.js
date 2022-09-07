import React, { useCallback, useState } from 'react'
import * as Styled from './styles.js'

const AddSolutionsFields = ({ lang, setSolutionsList, solutionsList }) => {

  console.log('====================================');
  console.log('solutionsList >>', solutionsList);
  console.log('====================================');

  const handleAddedsolution = useCallback((e) => {
    const ID = e.target.id
    let VALUE = e.target.value

    const res = solutionsList?.solutions?.find(item => item.solution === VALUE)
    if (res) return false

    const some = solutionsList.map(item => {
      if (item.lang === lang) {
        if (item.solutions[0].id === +ID) {
          item.solutions[0].solution = VALUE
        }
      }
      
    })

    console.log('====================================');
    console.log('some >>', some);
    console.log('====================================');

    setSolutionsList([...Object.assign(solutionsList)])
  })

  const addNewField = useCallback(() => {
    setSolutionsList([...solutionsList, {id: solutionsList.solutions.length, solution: ''}])
  })

  return (
    <Styled.AddSolutionsFieldsWrapper>
      {
        solutionsList.map((item, i) => (
          <div key={i}>
            <Styled.AddSolutionsFieldsTitle>Solution #{i + 1}</Styled.AddSolutionsFieldsTitle>
            <Styled.AddSolutionsFieldsTextarea
              id={item.id}
              onBlur={handleAddedsolution}
            >
              {item.solutionList?.solutions?.solution}
            </Styled.AddSolutionsFieldsTextarea>
          </div>
        ))
      }
      <button onClick={() => addNewField()}>Add field</button>
    </Styled.AddSolutionsFieldsWrapper>
  )
}

export default AddSolutionsFields