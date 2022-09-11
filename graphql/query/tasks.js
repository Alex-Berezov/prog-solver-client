import { gql } from '@apollo/client'

export const GET_TASKS = gql`
  query {
    getAllTasks {
      _id
      created
      taskSlug
      title
      text
      solutionsList {id, solution}
      imgUrl
      imgAuthor
    }
  }
`

export const GET_TASK = gql`
  query getTask($taskSlug: String) {
    getTask(taskSlug: $taskSlug) {
      title
      text
      solutionsList {
        lang, solutions {
          id, solution
        }
      }
    }
  }
`