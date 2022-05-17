import React from 'react'
import Slider from '../../Components/carousel'
import { ListProducts } from '../Products/ListProducts'

const Home = props => {
  return (
    
    <div className='home'>


      <Slider />

      <div className='Content'>

        <ListProducts />

      </div>

    </div>
  )
}



export default Home