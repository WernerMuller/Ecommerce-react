import React from 'react'

export const SingleProduct = (props) => {

  return (

    <div className='Product' key={props.key}>
        <img src={products[key].img} alt={products[key].name} />
        <h2>{products[key].name}</h2>
        <p>{products[key].description}</p>
    </div>

  )

}
