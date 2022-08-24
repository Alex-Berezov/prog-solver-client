import { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import { AUTH } from '../graphql/mutations/user'

export const useWithCredentials = () => {
  const [auth] = useMutation(AUTH)
  const [approved, setApproved] = useState()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const email = localStorage.getItem('email')

    try {
      auth({
        variables: {
          input: { email, token}
        }
      })
      .then(data => {
        setApproved(data.data.auth.approved)
      })
    } catch (error) {
      console.log('Auth error on client >>', error)
    }
  }, [])

  return { approved }
}