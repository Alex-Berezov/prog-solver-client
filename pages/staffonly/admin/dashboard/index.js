import React from 'react'
import { useWithCredentials } from '../../../../hooks/useWithCredentials.js'
import { useRouter } from 'next/router'

const Dashboard = () => {
  const { approved } = useWithCredentials()
  const router = useRouter()
  console.log('====================================');
  console.log('approved >>', approved);
  console.log('====================================');

  if (!approved) {
    router.push('/staffonly/super-fara')
  }

  return (
    <div>
      Dashboard page
    </div>
  )
}

export default Dashboard