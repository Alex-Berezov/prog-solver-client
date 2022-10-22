import { getServerSideSitemap } from 'next-sitemap'
import { GET_TASKS } from '../../graphql/query/tasks'
import { client } from '../_app'

export const getServerSideProps = async (ctx) => {
  const BaseURL = process.env.NODE_ENV === 'production' ? process.env.PROD_HOST : process.env.HOST

  const { data } = await client.query({query: GET_TASKS, variables: { first, delay }})

  const fields = data?.getAllTasks?.edges?.map(task => ({
    loc: `${BaseURL}/${task.node.taskSlug}`,
    lastmod: new Date().toISOString(),
    priority: 1
  }))

  return getServerSideSitemap(ctx, fields)
}

export default function Site() {}