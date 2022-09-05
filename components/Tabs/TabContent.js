import React from 'react'
import * as Styled from './styles.js'
import AddSolutionsFields from './AddSolutionsFields'

const TabContent = ({ lang, content, setSolutions, solutions }) => {
  return (
    <Styled.TabContent>
      <Styled.Title>{`${lang} solutions`}</Styled.Title>
      <Styled.Content>
        {
          content
            ? content
            : <AddSolutionsFields setSolutions={setSolutions} solutions={solutions} />
        }
      </Styled.Content>
    </Styled.TabContent>
  )
}

export default TabContent