import { gql } from '@apollo/client'

export const GET_TASKS = gql`
  query getAllTasks($first: Int, $after: String) {
    getAllTasks(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          _id
          created
          taskSlug
          title
          text
          solutionsList {
            lang
            solutions {
              id
              solution
            }
          }
          imgUrl
          imgAuthor
        }
      }
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
      imgUrl
      imgAuthor
    }
  }
`

export const SEARCH_TASK = gql`
  query searchTask ($title: String) {
    searchTask (title: $title) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          _id
          created
          taskSlug
          title
          text
          solutionsList {
            lang
            solutions {
              id
              solution
            }
          }
          imgUrl
          imgAuthor
        }
      }
    }
  }
`