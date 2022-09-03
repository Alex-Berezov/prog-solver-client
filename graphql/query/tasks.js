import { gql } from '@apollo/client'

export const GET_TASKS = gql`
  query {
    getAllTasks {
      _id
      taskId
      created
      taskSlug
      title
      text
      languages
      solutionsList {
        lang
        solutions
      }
      imgUrl
      imgAuthor
      likes
    }
  }
`