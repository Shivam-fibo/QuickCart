import React, { useContext } from 'react'
import Layout from '../../component/layout/layout'

import HeroSection from '../../component/herosection/HeroSection'
import Filter from '../../component/filter/Filter'
import ProductCard from '../../component/productCard/ProductCard'
import Track from '../../component/track/Track'

const Home = () => {
 
  return (
    <Layout>
        <HeroSection/>
        <Filter/>
        <ProductCard/>
        <Track/>
    </Layout>
  )
}

export default Home