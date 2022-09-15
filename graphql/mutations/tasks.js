import { gql } from '@apollo/client'

export const CREATE_TASK = gql`
  mutation addTask($input: TaskInput) {
      addTask (input: $input) {
        title
        taskSlug
        text
        solutionsList {
          lang solutions {
            id solution
          }
        }
        imgUrl
        imgAuthor
      }
    }
`

export const UPDATE_TASK = gql`
  mutation updateTask($taskSlug: String, $input: TaskUpdateInput) {
      updateTask (taskSlug: $taskSlug, input: $input) {
        title
        text
        solutionsList {
          lang solutions {
            id solution
          }
        }
      }
    }
`

export const DELETE_TASK = gql`
  mutation deleteTask($taskId: String) {
    deleteTask (taskId: $taskId) {
      title
      taskSlug
    }
  }
`