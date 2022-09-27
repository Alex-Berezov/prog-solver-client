import React, { useEffect } from 'react'
import * as Styled from './styles.js'
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'

const DisplaySolutions = ({ lang, content }) => {

  useEffect(() => {
    hljs.highlightAll()
  }, [lang])

  return (
    <Styled.DisplaySolutionsWrapper>
      {
        content?.map(item => (
          item.lang === lang && item.solutions.map((elem, i) => (
            elem.solution !== '' &&
            <Styled.DisplaySolution key={elem.id}>
              <Styled.DisplaySolutionTitle>Solution #{i + 1}</Styled.DisplaySolutionTitle>
              <pre>
                <code className={`language-${lang.toLowerCase()}`}>
                  {elem.solution}
                </code>
              </pre>
            </Styled.DisplaySolution>
          ))
        ))
      }
    </Styled.DisplaySolutionsWrapper>
  )
}

export default DisplaySolutions