import { client } from '../pages/_app'
import { GET_TASKS } from '../graphql/query/tasks'

export const getAllTaskSlugs = async () => {
  const first = 20000
  const delay = true
  const { data } = await client.query({query: GET_TASKS, variables: { first, delay }})

  const allSlugs = data?.getAllTasks?.edges?.map(task => {
    return {
      params: {
        taskSlug: task.node.taskSlug
      }
    }
  })

  return allSlugs
}
