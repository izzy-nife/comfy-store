import React from 'react'
import { Hero } from '../components'
import { customFetch } from '../utils'
import FeaturedProducts from '../components/FeaturedProducts'


const url = '/products?featured=true'
export const loader = async() => {
const response = await customFetch(url)
const products = response.data.data
return { products }
}

const landing = () => {
  
  return (
    <div>
      <Hero/>
      <FeaturedProducts/>
    </div>
  )
}

export default landing