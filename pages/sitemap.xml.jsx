import * as fs from 'fs'
import { gql } from '@apollo/client'
import { GET_TASKS } from '../graphql/query/tasks'
import { client } from './_app';

const first = 20000
const delay = true

const Sitemap = () => {
  return null
}

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = 'http://localhost:3000'

  const staticPaths = fs
  .readdirSync("pages")
  .filter(staticPage => {
    return ![
      "api",
      "_app.js",
      "_document.js",
      "404.js",
      "sitemap.xml.js",
    ].includes(staticPage)
  })
  .map(staticPagePath => {
    return `${BASE_URL}/${staticPagePath.split('.')[0]}`
  })

  const { data } = await client.query(GET_TASKS, {first, delay})

  console.log('====================================');
  console.log('data >>', data);
  console.log('====================================');
  
  // useQuery(GET_TASKS, { variables: { first, delay } })  

  // const dynamicPaths = products.map(singleProduct => {
  //   return `${BASE_URL}/product/${singleProduct.id}`
  // })

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      // сюда мы будем писать урлы вашего сайта
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