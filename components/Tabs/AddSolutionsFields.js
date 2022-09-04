import React, { useCallback, useState } from 'react'
import * as Styled from './styles.js'

const AddSolutionsFields = () => {
  const [solutions, setSolutions] = useState([''])

  const handleAddedsolution = useCallback(async (e) => {
    const ID = e.target.id
    let VALUE = e.target.value

    const res = await solutions.find(item => item === VALUE)
    console.log('====================================');
    console.log('res >>', res);
    console.log('====================================');
    if (res) return false

    setSolutions([solutions[ID] = VALUE, ...solutions])

    console.log('====================================');
    console.log('solutions[e.target.id] >>', solutions[e.target.id]);
    console.log('====================================');
  })

  const addNewField = useCallback(() => {
    setSolutions([...solutions, ''])
  })

  console.log('====================================');
  console.log('solutions >>', solutions);
  console.log('====================================');

  return (
    <Styled.AddSolutionsFieldsWrapper>
      {
        solutions.map((item, i) => (
          <div key={i}>
            <Styled.AddSolutionsFieldsTitle>Solution #{i + 1}</Styled.AddSolutionsFieldsTitle>
            <Styled.AddSolutionsFieldsInput
              id={i}
              onBlur={handleAddedsolution}
            >
              {item}
            </Styled.AddSolutionsFieldsInput>
          </div>
        ))
      }
      <button onClick={() => addNewField()}>Add field</button>
    </Styled.AddSolutionsFieldsWrapper>
  )
}

export default AddSolutionsFields