import React, { useCallback, useState } from 'react'
import * as Styled from './styles.js'

const AddSolutionsFields = ({ lang, setSolutionsList, solutionsList }) => {

  const handleAddedsolution = useCallback((e) => {
    const ID = e.target.id
    const value = e.target.value

    const res = solutionsList?.solutions?.find(item => item.solution === value)
    if (res) return false

    solutionsList.map(item => {
      if (item.lang === lang) {
        item.solutions.map(el => {
          if (el.id === ID) {
            el.solution = value
          }
        })
      }
      
    })

    setSolutionsList([...Object.assign(solutionsList)])
  })

  return (
    <Styled.AddSolutionsFieldsWrapper>
      {
        solutionsList?.map(item => (
          item.lang === lang && item.solutions.map((elem, i) => (
            <div key={elem.id}>
              <Styled.AddSolutionsFieldsTitle>Solution #{i + 1}</Styled.AddSolutionsFieldsTitle>
              <Styled.AddSolutionsFieldsTextarea
                id={elem.id}
                onBlur={handleAddedsolution}
              >
                {elem.solution}
              </Styled.AddSolutionsFieldsTextarea>
            </div>
          ))
        ))
      }
    </Styled.AddSolutionsFieldsWrapper>
  )
}

export default AddSolutionsFields