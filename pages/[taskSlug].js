import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import * as Styled from '../styles/Theme/commonStyles.js'
import Header from '../components/Header/Header'
import PageContainer from '../components/PageContainer/PageContainer'
import { useRouter } from 'next/router.js'
import { useQuery } from '@apollo/client'
import { GET_TASK } from '../graphql/query/tasks.js'
import Image from 'next/image'
import { H1 } from '../styles/Theme/commonStyles.js'

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
`

const Task = () => {
  const router = useRouter()
  const taskSlug = router?.asPath.substring(1)
  const { loading, data } = useQuery(GET_TASK, {
    variables: {
      taskSlug
    }
  })

  console.log('====================================');
  console.log('data?.getTask >>', data?.getTask);
  console.log('====================================');

  const title = data?.getTask?.title
  const description = data?.getTask?.text?.substring(0, 150).trim().replace(/\r?\n/g, ' ')

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
        <ImageWrapper>
          <Image
            src={`/${data?.getTask?.imgUrl}`}
            alt={title}
            layout="fixed"
            width={640}
            height={360}
          />
          <ImageText>
            Photo from
            {' '}
            <a href={`${data?.getTask?.imgAuthor}`}>Unsplash</a>
          </ImageText>
        </ImageWrapper>

        <TaskTitle>{data?.getTask?.title}</TaskTitle>
      </PageContainer>
      
    </Styled.Container>
  )
}

export default Task