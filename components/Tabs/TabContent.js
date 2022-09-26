import React from 'react'
import * as Styled from './styles.js'
import AddSolutionsFields from './AddSolutionsFields'
import DisplaySolutions from './DisplaySolutions';

const TabContent = ({ lang, content, setSolutionsList, solutionsList }) => {
  return (
    <Styled.TabContent>
      <Styled.Title>{`${lang} solutions`}</Styled.Title>
      <Styled.Content>
        {
          content
            ? <DisplaySolutions
              lang={lang}
              content={content}
            />
            : <AddSolutionsFields
                lang={lang}
                setSolutionsList={setSolutionsList}
                solutionsList={solutionsList}
              />
        }
      </Styled.Content>
    </Styled.TabContent>
  )
}

export default TabContent