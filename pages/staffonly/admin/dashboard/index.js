import React from 'react'
import { useWithCredentials } from '../../../../hooks/useWithCredentials'


const Dashboard = () => {
  useWithCredentials()

  return (
    <div>
      Dashboard page
    </div>
  )
}

export default Dashboard