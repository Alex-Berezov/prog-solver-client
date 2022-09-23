import React, { useCallback, useState } from 'react'
import * as Styled from './styles.js'
import { useQuery } from '@apollo/client'
import { SEARCH_TASK } from '../../graphql/query/tasks'

const SearchTask = ({ setSearchError, setTasks }) => {
  const [searchValue, setSearchValue] = useState('')

  const { data: searchData } = useQuery(SEARCH_TASK, {
    variables: {
      title: searchValue
    }
  })

  const handleSearchChange = useCallback((e) => {
    setSearchValue(e.target.value)
  })

  const handleSearch = useCallback((e) => {
    if (e.key === "Enter") {
      if (searchValue.length < 4) {
        setSearchError(true)
      } else {
        setSearchError(false)
        setTasks(searchData?.searchTask.edges || [])
      }      
      setTimeout(() => setSearchError(false), 3000)
    }
  })

  return (
    <Styled.SearchTask
      type="text"
      value={searchValue}
      onChange={handleSearchChange}
      onKeyDown={handleSearch}
      placeholder="Type query and press Enter"
    />
  )
}

export default SearchTask