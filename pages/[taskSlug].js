import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import * as Styled from '../styles/Theme/commonStyles.js'
import Header from '../components/Header/Header'
import PageContainer from '../components/PageContainer/PageContainer'
import Image from 'next/image'
import { H1, H2 } from '../styles/Theme/commonStyles.js'
import hljs from 'highlight.js'
import Tabs from '../components/Tabs/Tabs'
import { scRespondTo } from '../utils/index'
import { getAllTaskSlugs, getTaskData } from '../lib/tasks';
import defaultImg from '../public/static/images/abdelrahman-sobhy-8LBLGdiKcu0-unsplash.jpg'

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

const Task = ({ taskData }) => {
  const [solutionsList, setSolutionsList] = useState([])

  useEffect(() => {
    hljs.highlightAll()
  }, [])

  useEffect(() => {
    const newSolutionsList = taskData && JSON.parse(JSON.stringify(taskData?.data?.getTask?.solutionsList || []))
    newSolutionsList?.forEach(item => {
      delete item.__typename
      item.solutions.forEach(el => {
        delete el.__typename
      })
    })
    setSolutionsList(newSolutionsList)
  }, [taskData])

  const title = taskData?.data?.getTask?.title
  const description = taskData?.data?.getTask?.text?.substring(0, 150).trim().replace(/\r?\n/g, ' ')

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
        <meta property="og:image" content={defaultImg} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={defaultImg} />
      </Head>

      <Header />

      <PageContainer>
        <Adds></Adds>

        <ImageWrapper>
          <Image
            src={`/static/images/${taskData?.data?.getTask?.imgUrl}`}
            alt={title}
            width={640}
            height={360}
            priority
          />
          <ImageText>
            Photo from
            {' '}
            <a href={`${taskData?.data?.getTask?.imgAuthor}`}>Unsplash</a>
          </ImageText>
        </ImageWrapper>

        <TaskTitle>{taskData?.data?.getTask?.title}</TaskTitle>

        <pre>
          <code class="language-plaintext">
            {taskData?.data?.getTask?.text}
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

export async function getStaticPaths() {
  const paths = await getAllTaskSlugs()

  return {
    paths,
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const { taskSlug } = params
  const taskData = await getTaskData(taskSlug)

   if (!taskData.data.getTask) {
    return {
      notFound: true,
    }
  }

  return { 
    props: {
      taskData,
    },
    revalidate: 10,
  }
}