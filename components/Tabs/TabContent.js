import React from 'react'
import * as Styled from './styles.js'
import AddSolutionsFields from './AddSolutionsFields'

const TabContent = ({ lang, content, setSolutionsList, solutionsList }) => {
  return (
    <Styled.TabContent>
      <Styled.Title>{`${lang} solutions`}</Styled.Title>
      <Styled.Content>
        {
          content
            ? content
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