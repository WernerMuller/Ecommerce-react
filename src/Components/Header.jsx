import React from 'react'
import logou from '../img/logo.png';

 const Header = () => {
  return (
    
      <div className='header'>
            
      <div className='logo'>
      <a href='/'>Gamer Forge</a>
      </div>

      <div className='links'>
            <a href='/list'>Products</a>
            <a href='/list'>Contact</a>
      </div>
            
    </div>
  )
}


export default Header;