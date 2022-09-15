import React from 'react'
import * as Styled from './styles.js'

const Modal = ({ active, setActive, children }) => {
  return (
    <Styled.Root active={active} onClick={() => setActive(false)}>
      <Styled.Content active={active} onClick={e => e.stopPropagation()}>
        {children}
      </Styled.Content>
    </Styled.Root>
  )
}

export default Modal