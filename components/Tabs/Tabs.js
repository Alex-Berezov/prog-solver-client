import React, { useState } from 'react'
import * as Styled from './styles.js'
import TabContent from './TabContent.js'

const Tabs = ({ items }) => {
  const [ active, setActive ] = useState(0)

  // console.log('====================================');
  // console.log('items >>', items);
  // console.log('====================================');

  const openTab = e => setActive(+e.target.dataset.index)

  return (
    <div>
      <Styled.Tab>
        {
          items?.map((item, i) => (
            <Styled.Button
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
      {items && items[active] && <TabContent {...items[active]} />}
    </div>
  )
}

export default Tabs