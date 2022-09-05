import React, { useCallback, useState } from 'react'
import * as Styled from './styles.js'

const AddSolutionsFields = ({ setSolutions, solutions }) => {
  const handleAddedsolution = useCallback((e) => {
    const ID = e.target.id
    let VALUE = e.target.value

    const res = solutions.find(item => item.solution === VALUE)
    if (res) return false

    solutions.map(item => {
      if (item.id === +ID) {
        item.solution = VALUE
      }
    })

    setSolutions([...Object.assign(solutions)])
  })

  const addNewField = useCallback(() => {
    setSolutions([...solutions, {id: solutions.length, solution: ''}])
  })

  return (
    <Styled.AddSolutionsFieldsWrapper>
      {
        solutions.map((item, i) => (
          <div key={i}>
            <Styled.AddSolutionsFieldsTitle>Solution #{i + 1}</Styled.AddSolutionsFieldsTitle>
            <Styled.AddSolutionsFieldsInput
              id={item.id}
              onBlur={handleAddedsolution}
            >
              {item.solution}
            </Styled.AddSolutionsFieldsInput>
          </div>
        ))
      }
      <button onClick={() => addNewField()}>Add field</button>
    </Styled.AddSolutionsFieldsWrapper>
  )
}

export default AddSolutionsFields