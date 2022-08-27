import { useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { AUTH } from '../graphql/mutations/user'
import { useRouter } from 'next/router'

export const useWithCredentials = () => {
  const router = useRouter()
  const [auth] = useMutation(AUTH)  

  useEffect(async() => {
  try {
    const token = localStorage.getItem('token')
    const email = localStorage.getItem('email')

    await auth({
      variables: {
        input: { email, token}
      }
    })
    .then(data => {
      const res = data.data.auth.approved
      if (!res) {
        router.push('/staffonly/super-fara')
      }
    })
  } catch (error) {
    console.log('Auth error on client >>', error)
  }
  }, [])
}