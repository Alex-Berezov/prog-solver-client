import React from 'react'
import * as Styled from './styles.js'
import AddSolutionsFields from './AddSolutionsFields'

const TabContent = ({ lang, content }) => {
  return (
    <Styled.TabContent>
      <Styled.Title>{`${lang} solutions`}</Styled.Title>
      <Styled.Content>
        {
          content
            ? content
            : <AddSolutionsFields />
        }
      </Styled.Content>
    </Styled.TabContent>
  )
}

export default TabContent