import { gql } from '@apollo/client'

export const GET_TASKS = gql`
  query getAllTasks($offset: Int, $first: Int) {
    getAllTasks(offset: $offset, first: $first) {
      _id
      created
      taskSlug
      title
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

export const GET_TASK = gql`
  query getTask($taskSlug: String) {
    getTask(taskSlug: $taskSlug) {
      title
      taskSlug
      text
      solutionsList {
        lang solutions {
          id solution
        }
      }
    }
  }
`