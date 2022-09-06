import React, { useState } from 'react'
import * as Styled from './styles.js'
import TabContent from './TabContent.js'

const Tabs = ({ items, solutionsList, setSolutionsList }) => {
  const [ active, setActive ] = useState(0)

  const openTab = e => setActive(+e.target.dataset.index)

  console.log('====================================');
  console.log('items >>', items[active]);
  console.log('====================================');

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
              solutionsList={solutionsList}
              setSolutionsList={setSolutionsList}
            />
      }
    </div>
  )
}

export default Tabs