import React, { useCallback } from 'react'
import * as Styled from './styles.js'
import { useMutation } from '@apollo/client'
import { DELETE_TASK } from '../../graphql/mutations/tasks'
import { useRouter } from 'next/router.js'

const DeleteTaskModal = ({ setActive, taskId }) => {
  const [deleteTask] = useMutation(DELETE_TASK)
  const router = useRouter()

  const handleDeleteTask = useCallback(async () => {
    try {
      await deleteTask({
        variables: {
          taskId
        }
      })
      .then(() => router.push('/staffonly/admin/tasks'))
      .then(() => setActive(false))
    } catch (error) {
      console.log('Delete task error on client >>', error)
    }
  })

  return (
    <Styled.Root>
      <Styled.Header onClick={() => setActive(false)}>X</Styled.Header>
      <Styled.Content>Delete task?</Styled.Content>
      <Styled.Buttons>
        <Styled.YesButton onClick={handleDeleteTask}>Yes</Styled.YesButton>
        <Styled.NoButton onClick={() => setActive(false)}>No</Styled.NoButton>
      </Styled.Buttons>
    </Styled.Root>
  )
}

export default DeleteTaskModal