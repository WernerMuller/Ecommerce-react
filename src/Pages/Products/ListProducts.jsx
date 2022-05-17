import React from 'react'

import keycorsair from '../../img/keyboard-corsair.jpg';
import Mouse from '../../img/mouse.jpg';
import psu from '../../img/psu.jpg';



export const ListProducts = () => {


  const  products = {
        Product1: { img: keycorsair ,name: 'Product1', description: 'Product1 Description', price:"100"},
        Product2: { img: Mouse ,name: 'Product2', description: 'Product2 Description' , price:"100"},
        Product3: { img: psu ,name: 'Product3', description: 'Product3s Description' , price:"100"},
        Product4: { img: psu ,name: 'Product3', description: 'Product3s Description' , price:"100"},
        Product5: { img: psu ,name: 'Product3', description: 'Product3s Description' , price:"100"},
        Product6: { img: psu ,name: 'Product3', description: 'Product3s Description' , price:"100"},
        Product7: { img: psu ,name: 'Product3', description: 'Product3s Description' , price:"100"},
    }


    const productList = Object.keys(products).map(key => {
        return(
            <div className='Product' key={key}>
                <img src={products[key].img} alt={products[key].name} />
                <h2>{products[key].name}</h2>
                <p>{products[key].description}</p>
                <p>${products[key].price}</p>
            </div>
        )
    })

    
  return (
       <div>
            <div className='titulo'>
             <h2 >Productos a la venta</h2>
             </div>

             <div className='ListProducts'>
            {productList}
            </div>
    </div>
        

    
  )

}
