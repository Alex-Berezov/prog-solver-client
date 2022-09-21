import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import * as Styled from '../../../styles/Theme/commonStyles.js'
import { useWithCredentials } from '../../../hooks/useWithCredentials'
import Header from '../../../components/Header/Header'
import Head from 'next/head'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'
import { useQuery } from '@apollo/client'
import { GET_TASKS } from '../../../graphql/query/tasks'
import Link from 'next/link.js'
import Modal from '../../../components/Modal/Modal'
import DeleteTaskModal from '../../../components/DeleteTaskModal/DeleteTaskModal'

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
`

const Task = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 5px;
  margin-top: 10px;
`

const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TaskTitle = styled.h3`
  margin: 0;
  font-weight: 400;
`

const TaskButtons = styled.div`
  display: flex;
  align-items: center;
`

const TaskEditBtn = styled.button`
  background: green;
  border: 1px solid green;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 10px;
`

const TaskDeleteBtn = styled.button`
  background: red;
  border: 1px solid red;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  cursor: pointer;
`

const TaskInfo = styled.div`
  display: flex;
  align-items: center;
`

const TaskInfoItem = styled.span`
  font-weight: 400;
  font-size: 12px;
  margin-right: 15px;
`

const AddTaskBtn = styled.button`
  margin-bottom: 10px;
  background: green;
  border: 1px solid green;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  cursor: pointer;
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

const first = 6
const delay = true

const Posts = () => {
  useWithCredentials()

  const [tasks, setTasks] = useState([])
  const [deleteModal, setDeleteModal] = useState(false)
  const [taskId, setTaskId] = useState('')
  const [hasNextPage, setHasNextPage] = useState(true)
  const [after, setAfter] = useState()
  
  const { error, loading, data, refetch, fetchMore } = useQuery(GET_TASKS, {
    variables: { first, delay },
    notifyOnNetworkStatusChange: true
  })

  useEffect(() => {
    setHasNextPage(true)
    refetch()
  }, [])

  useEffect(() => {
    refetch()
  }, [deleteModal])

  useEffect(() => {
    setAfter(data?.getAllTasks.pageInfo.endCursor)
    const newTasksList = data && JSON.parse(JSON.stringify(data.getAllTasks.edges))
    if (!loading) return setTasks(newTasksList)
  }, [data])

  const onClickDeleteTask = useCallback((id) => {
    setTaskId(id)
    setDeleteModal(true)
  })

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
      setTasks(data?.data?.getAllTasks?.edges)
      setHasNextPage(data?.data?.getAllTasks.pageInfo.hasNextPage)
      setAfter(data?.data?.getAllTasks.pageInfo.endCursor)
    })
  )

  return (
    <Styled.Container>
      <Head>
        <title>Posts</title>
      </Head>

      <Header />

      <AdminContainer>
        <Link href="/staffonly/admin/add-task">
          <AddTaskBtn>Add task</AddTaskBtn>
        </Link>
        <TaskList>
          {
            tasks?.map(task => (
              <Task key={task.node._id}>
                <TaskHeader>
                  <TaskTitle>{task.node.title}</TaskTitle>
                  <TaskButtons>
                    <Link
                      href={`/staffonly/admin/update-task/${encodeURIComponent(task.node.taskSlug)}`}
                      as={`/staffonly/admin/update-task/${task.node.taskSlug}`}
                    >
                      <TaskEditBtn>Edit</TaskEditBtn>
                    </Link>
                    <TaskDeleteBtn onClick={() => onClickDeleteTask(task.node._id)}>
                      Delete
                    </TaskDeleteBtn>
                  </TaskButtons>
                </TaskHeader>
                <TaskInfo>
                  <TaskInfoItem>Created: {task.node.created}</TaskInfoItem>
                  <TaskInfoItem>Views: 42</TaskInfoItem>
                </TaskInfo>
              </Task>
            ))
          }
        </TaskList>
        {
          hasNextPage &&
            <LoadMoreButton onClick={fetchMoreTasks}>
              Load more
            </LoadMoreButton>
        }
        <Modal active={deleteModal} setActive={setDeleteModal} >
          <DeleteTaskModal setActive={setDeleteModal} taskId={taskId} />
        </Modal>
      </AdminContainer>
    </Styled.Container>
  );
};

export default Posts;