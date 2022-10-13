import { GET_TASKS } from '../graphql/query/tasks'
import { client } from './_app';

const first = 20000
const delay = true

const Sitemap = () => {
  return null
}

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = 'https://prog-solver'

  const { data } = await client.query({query: GET_TASKS, variables: { first, delay }})

  const dynamicPaths = data?.getAllTasks.edges.map(task => {
    return `${BASE_URL}/${task.node.taskSlug}`
  })

  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${dynamicPaths.map(url => (
        `<url>
          <loc>${url}</loc>
          <changefreq>yearly</changefreq>
          <priority>1.0</priority>
        </url>`
      ))}
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default Sitemap