import React, { useState } from 'react'
import * as Styled from './styles.js'
import TabContent from './TabContent.js'

const Tabs = ({ items, solutionsList, setSolutionsList, content }) => {
  const [ active, setActive ] = useState(0)

  const openTab = e => setActive(+e.target.dataset.index)

  return (
    <div>
      <Styled.Tab>
        {
          items?.map((item, i) => (
            <Styled.Button
              key={item.id}
              id={item.id}
              className={`${item.id === active ? 'active' : ''}`}
              onClick={openTab}
              data-index={item.id}
            >
              {item.lang}
            </Styled.Button>
          ))
        }
      </Styled.Tab>
      {
        items
        && items[active]
        && <TabContent
              {...items[active]}
              content={content}
              solutionsList={solutionsList}
              setSolutionsList={setSolutionsList}
            />
      }
    </div>
  )
}

export default Tabs