import React, { useEffect } from 'react'
import * as Styled from './styles.js'
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'

// import javascript from 'highlight.js/lib/languages/javascript'
// hljs.registerLanguage('javascript', javascript)

// import python from 'highlight.js/lib/languages/python'
// hljs.registerLanguage('python', python)

const DisplaySolutions = ({ lang, content }) => {

  console.log('====================================');
  console.log('content >>', content);
  console.log('====================================');

  console.log('====================================');
  console.log('lang >>', lang);
  console.log('====================================');

  useEffect(() => {
    // hljs.initHighlighting()
    hljs.highlightAll()
  }, [lang])

  return (
    <Styled.DisplaySolutionsWrapper>
      {
        content?.map(item => (
          item.lang === lang && item.solutions.map((elem, i) => (
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