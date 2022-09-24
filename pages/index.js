import React, { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import * as Styled from '../styles/Theme/commonStyles.js'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import Header from '../components/Header/Header'
import { GET_TASKS } from '../graphql/query/tasks'
import HomePageContainer from '../components/HomePageContainer/HomePageContainer'

const TasksList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Task = styled.div`
  width: 32%;
  margin-bottom: 30px;
  border: 1px solid grey;
  cursor: pointer;
`

const TaskImage = styled.img`
  width: 100%;
  height: auto;
`

const TaskHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  padding: 10px;
  height: 100px;
`

const TaskTitle = styled.h3`
  font-weight: 400;
  margin: 0;
`

const TaskLangWrapper = styled.div`
  display: flex;
  margin-top: auto;
`

const TaskLang = styled.div`
  padding: 3px 5px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightpink;
  color: black;
  font-weight: 300;
  font-size: 12px;
  margin-right: 5px;
`

const LoadMoreButton = styled.button`
  background: yellow;
  border: 1px solid yellow;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  padding: 5px 10px;
  cursor: pointer;
`


const title = "ProgSolver - solving programming tasks"
const description = "Ready-made solutions to programming tasks in all existing languages."

const first = 6
const delay = true

const Home = () => {
  const [tasks, setTasks] = useState([])
  const [hasNextPage, setHasNextPage] = useState(false)
  const [after, setAfter] = useState()
  const [searchError, setSearchError] = useState(false)
  const { loading, error, data, refetch, fetchMore } = useQuery(GET_TASKS, {
    variables: { first, delay }
  })

  useEffect(() => {
    setHasNextPage(true)
    refetch()
  }, [])

  useEffect(() => {
    setAfter(data?.getAllTasks.pageInfo.endCursor)
    const newTasksList = data && JSON.parse(JSON.stringify(data.getAllTasks.edges))
    if (!loading) return setTasks(newTasksList || [])
  }, [data])

  if (error) {
    console.log(error.message)
    return <div>An error occurred</div>
  }

  const fetchMoreTasks = useCallback(() => 
    fetchMore({
      variables: {
        first,
        after,
        delay
      }
    })
    .then(data => {
      setTasks(data?.data?.getAllTasks?.edges || [])
      setHasNextPage(data?.data?.getAllTasks.pageInfo.hasNextPage)
      setAfter(data?.data?.getAllTasks.pageInfo.endCursor)
    })
  )

  return (
    <Styled.Container>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} key="title" />
        <meta property="og:description" content={description} key="description" />
      </Head>

      <Header />
      
      <HomePageContainer>
        <TasksList>
          {
            tasks?.length
              ? tasks.map(task => (
                <Link key={task.node._id} href="/">
                  <Task>
                    <TaskImage src={task.node.imgUrl} />
                    <TaskHeader>
                      <TaskTitle>{task.node.title}</TaskTitle>
                      <TaskLangWrapper>
                        {
                          task.node.solutionsList.map(solution => (
                            <TaskLang>{solution.lang}</TaskLang>
                          ))
                        }
                      </TaskLangWrapper>
                    </TaskHeader>
                  </Task>
                </Link>
              ))
              : <p>No results</p>
          }
        </TasksList>
        {
          tasks?.length < first || hasNextPage &&
            <LoadMoreButton onClick={fetchMoreTasks}>
              Load more
            </LoadMoreButton>
        }
      </HomePageContainer>

    </Styled.Container>
  )
}

export default Home