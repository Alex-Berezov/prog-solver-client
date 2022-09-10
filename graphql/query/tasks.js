import { gql } from '@apollo/client'

export const GET_TASKS = gql`
  query {
    getAllTasks {
      _id
      created
      taskSlug
      title
      text
      solutionsList {
        lang
        solutions
      }
      imgUrl
      imgAuthor
    }
  }
`