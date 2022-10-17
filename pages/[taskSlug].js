import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import * as Styled from '../styles/Theme/commonStyles.js'
import Header from '../components/Header/Header'
import PageContainer from '../components/PageContainer/PageContainer'
import { useRouter } from 'next/router.js'
import { useQuery } from '@apollo/client'
import { GET_TASK } from '../graphql/query/tasks.js'
import Image from 'next/image'
import { H1, H2 } from '../styles/Theme/commonStyles.js'
import hljs from 'highlight.js'
import Tabs from '../components/Tabs/Tabs'
import { scRespondTo } from '../utils/index'

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ImageText = styled.p`
  margin-top: 5px;
  font-size: 12px;
  & a {
    color: blue;
  }
`

const TaskTitle = styled(H1)`
  text-align: center;
  font-weight: 500;
  font-size: 40px;
  line-height: 45px;
  letter-spacing: 0.21em;
  color: #000000;
  margin: 30px 0;
`

const SubTitle = styled(H2)`
  text-align: center;
  margin: 30px 0;
` 

const Adds = styled.div`
  display: block;
  margin-bottom: 30px;

  ${scRespondTo.preSm} {
    display: none;
  }
`

const Task = () => {
  const router = useRouter()
  const taskSlug = router?.asPath.substring(1)
  const { data } = useQuery(GET_TASK, {
    variables: {
      taskSlug
    }
  })

  const [solutionsList, setSolutionsList] = useState([])

  useEffect(() => {
    hljs.initHighlighting()
  }, [])

  useEffect(() => {
    const newSolutionsList = data && JSON.parse(JSON.stringify(data?.getTask?.solutionsList || []))
    newSolutionsList?.forEach(item => {
      delete item.__typename
      item.solutions.forEach(el => {
        delete el.__typename
      })
    })
    setSolutionsList(newSolutionsList)
  }, [data])

  const title = data?.getTask?.title
  const description = data?.getTask?.text?.substring(0, 150).trim().replace(/\r?\n/g, ' ')

  const langList = solutionsList?.map((item, i) => {
    if (item.solutions[0].solution !== '') {
      return { id: i, lang: item.lang }
    }
  }).filter(item => item !== undefined)

  return (
    <Styled.Container>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} key="title" />
        <meta property="og:description" content={description} key="description" />
      </Head>

      <Header />

      <PageContainer>
        <Adds></Adds>

        <ImageWrapper>
          <Image
            src={`/static/images/${data?.getTask?.imgUrl}`}
            alt={title}
            width={640}
            height={360}
            priority
          />
          <ImageText>
            Photo from
            {' '}
            <a href={`${data?.getTask?.imgAuthor}`}>Unsplash</a>
          </ImageText>
        </ImageWrapper>

        <TaskTitle>{data?.getTask?.title}</TaskTitle>

        <pre>
          <code class="language-plaintext">
            {data?.getTask?.text}
          </code>
        </pre>

        <SubTitle>Solutions</SubTitle>

        <Tabs
          items={langList}
          content={solutionsList}
        />
      </PageContainer>
      
    </Styled.Container>
  )
}

export default Task