import React, { useContext } from 'react'
import Layout from '../../component/layout/layout'
import myContext from '../../redux/data/myContext'

const Order = () => {
    const {name} = useContext(myContext)

  return (
    <Layout>{name}</Layout>
  )
}

export default Order