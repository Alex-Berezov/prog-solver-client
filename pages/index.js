import React, { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import * as Styled from '../styles/Theme/commonStyles.js'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import Header from '../components/Header/Header'
import { GET_TASKS } from '../graphql/query/tasks'
import PageContainer from '../components/PageContainer/PageContainer'
import SearchTask from '../components/SearchTask/SearchTask'
import { H1, H3, Text } from '../styles/Theme/commonStyles.js'
import { scRespondTo } from '../utils/index'
import Image from 'next/image'
import SkeletonHomePage from '../components/Skeletons/SkeletonHomePage'
import defaultImg from '../public/static/images/abdelrahman-sobhy-8LBLGdiKcu0-unsplash.jpg'

const MainTitle = styled(H1)`
  font-size: 40px;
  text-align: center;

  ${scRespondTo.sm} {
    font-size: 60px;
  }

  ${scRespondTo.preMd} {
    font-size: 100px;
  }
`

const MainText = styled(Text)`
  margin: 35px 0 75px 0;
`

const TasksList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Task = styled.div`
  width: 100%;
  margin-bottom: 30px;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    border: 1px solid grey;
  }

  ${scRespondTo.sm} {
    width: 49%;
  }

  ${scRespondTo.preMd} {
    width: 32%;
  }
`

const TaskImage = styled.div`
  position: relative;
  width: 100%;
  height: 15em;
`

const TaskHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  padding: 10px;
  height: auto;
`

const TaskTitle = styled(H3)`
  margin: 0;
`

const LoadMoreButton = styled.button`
  width: 100%;
  background: #F7CBD7;
  border: 1px solid #F7CBD7;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  padding: 15px;
  cursor: pointer;

  font-family: 'Cousine';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.21em;
  color: #000000;
`

const SearchTaskWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
`

const SearchTaskToolTip = styled.div`
  font-size: 13px;
  visibility: visible;
  width: max-contents;
  background-color: lightgray;
  color: red;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 20px;
`

const Adds = styled.div`
  display: block;

  ${scRespondTo.preSm} {
    display: none;
  }
`


const title = "ProgSolver - solving programming tasks"
const description = "Ready-made solutions to programming tasks in all existing languages."

const first = 18
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
        <meta name="google-site-verification" content="lhi7QMw2TjULX_yhm8j_N86X0MiL7chbOD4HvTciM_U" />
      </Head>

      <Header />
      
      <PageContainer>
        <Adds></Adds>

        <MainTitle>
          There are no unsolvable tasks
        </MainTitle>

        <MainText>
          The site presents solutions to programming tasks. We don't want to contribute to cheating. 
          Therefore, before you look at the solution of the tasks, make sure that you have tried all possible options to solve it yourself.
        </MainText>

        <SearchTaskWrapper>
          {searchError && <SearchTaskToolTip>Minimum 4 characters</SearchTaskToolTip>}
          <SearchTask
            setSearchError={setSearchError}
            setTasks={setTasks}
          />
        </SearchTaskWrapper>
        <TasksList>
          {
            tasks?.length
              ? tasks?.map((task, i) => {
                return <Link
                  key={task.node._id}
                  href={`/${encodeURIComponent(task.node.taskSlug)}`}
                  as={`/${task.node.taskSlug}`}
                >
                  <Task>
                    <TaskImage>
                      <Image
                        src={`/static/images/${task.node.imgUrl}`}
                        alt={task.node.title}
                        layout='fill'
                        blurDataURL={defaultImg}
                        placeholder="blur"
                      />
                    </TaskImage>
                    <TaskHeader>
                      <TaskTitle>{task.node.title}</TaskTitle>
                    </TaskHeader>
                  </Task>
                </Link>
              })
              : <SkeletonHomePage />
          }
        </TasksList>
        {
          tasks?.length < first || hasNextPage &&
            <LoadMoreButton onClick={fetchMoreTasks}>
              Load more
            </LoadMoreButton>
        }
      </PageContainer>

    </Styled.Container>
  )
}

export default Home