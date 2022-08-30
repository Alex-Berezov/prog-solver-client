import { useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { AUTH } from '../graphql/mutations/user'
import { useRouter } from 'next/router'

export const useWithCredentials = () => {
  const router = useRouter()
  const [auth] = useMutation(AUTH)

  const fetchAuth = async (token, email) => {
    try {
      const approved = await auth({
        variables: {
          input: { email, token}
        }
      })
      .then(data => data.data.auth.approved)
      
      if (!approved) {
        router.push('/staffonly/super-fara')
      }      
    } catch (error) {
      console.log('Auth error on client >>', error)
      router.push('/staffonly/super-fara')
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    const email = localStorage.getItem('email')
    
    fetchAuth(token, email)
  }, [router])
}