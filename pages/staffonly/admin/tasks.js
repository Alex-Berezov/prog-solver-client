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
  background: green;
  border: 1px solid green;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  cursor: pointer;
`

const PAGE_SIZE = 3

const Posts = () => {
  useWithCredentials()

  const [tasks, setTasks] = useState([])
  const [deleteModal, setDeleteModal] = useState(false)
  const [taskId, setTaskId] = useState('')
  const { loading, data, refetch } = useQuery(GET_TASKS)

  console.log('====================================');
  console.log('data >>', data);
  console.log('====================================');

  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    refetch()
  }, [deleteModal])

  useEffect(() => {
    const newTasksList = data && JSON.parse(JSON.stringify(data.getAllTasks))
    if (!loading) return setTasks(newTasksList)
  }, [data])

  const onClickDeleteTask = useCallback((id) => {
    setTaskId(id)
    setDeleteModal(true)
  })

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
              <Task key={task._id}>
                <TaskHeader>
                  <TaskTitle>{task.title}</TaskTitle>
                  <TaskButtons>
                    <Link
                      href={`/staffonly/admin/update-task/${encodeURIComponent(task.taskSlug)}`}
                      as={`/staffonly/admin/update-task/${task.taskSlug}`}
                    >
                      <TaskEditBtn>Edit</TaskEditBtn>
                    </Link>
                    <TaskDeleteBtn onClick={() => onClickDeleteTask(task._id)}>
                      Delete
                    </TaskDeleteBtn>
                  </TaskButtons>
                </TaskHeader>
                <TaskInfo>
                  <TaskInfoItem>Created: {task.created}</TaskInfoItem>
                  <TaskInfoItem>Views: 42</TaskInfoItem>
                </TaskInfo>
              </Task>
            ))
          }
        </TaskList>
        <Modal active={deleteModal} setActive={setDeleteModal} >
          <DeleteTaskModal setActive={setDeleteModal} taskId={taskId} />
        </Modal>
      </AdminContainer>
    </Styled.Container>
  );
};

export default Posts;