import React from 'react'
import { useWithCredentials } from '../../../../hooks/useWithCredentials.js'

const Dashboard = () => {
  useWithCredentials()  

  return (
    <div>
      Dashboard page
    </div>
  )
}

export default Dashboard