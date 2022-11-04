import React from 'react'
import styled from 'styled-components'
import { scRespondTo } from '../../utils/index'
import { H3 } from '../../styles/Theme/commonStyles'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonHomePage = () => {
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

  return (
    <>
      <Task>
        <TaskImage>
          <Skeleton width="100%" height="100%" />
        </TaskImage>
        <TaskHeader>
          <TaskTitle><Skeleton count={2} /></TaskTitle>
        </TaskHeader>
      </Task>
      <Task>
        <TaskImage>
          <Skeleton width="100%" height="100%" />
        </TaskImage>
        <TaskHeader>
          <TaskTitle><Skeleton count={2} /></TaskTitle>
        </TaskHeader>
      </Task>
      <Task>
        <TaskImage>
          <Skeleton width="100%" height="100%" />
        </TaskImage>
        <TaskHeader>
          <TaskTitle><Skeleton count={2} /></TaskTitle>
        </TaskHeader>
      </Task>
      <Task>
        <TaskImage>
          <Skeleton width="100%" height="100%" />
        </TaskImage>
        <TaskHeader>
          <TaskTitle><Skeleton count={2} /></TaskTitle>
        </TaskHeader>
      </Task>
      <Task>
        <TaskImage>
          <Skeleton width="100%" height="100%" />
        </TaskImage>
        <TaskHeader>
          <TaskTitle><Skeleton count={2} /></TaskTitle>
        </TaskHeader>
      </Task>
      <Task>
        <TaskImage>
          <Skeleton width="100%" height="100%" />
        </TaskImage>
        <TaskHeader>
          <TaskTitle><Skeleton count={2} /></TaskTitle>
        </TaskHeader>
      </Task>
    </>
  )
}

export default SkeletonHomePage