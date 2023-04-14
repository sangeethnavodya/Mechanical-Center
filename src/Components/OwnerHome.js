import React, { Component } from 'react'
import './ComponentCss/ownerHome.css'

function OwnerHome() {
    return (
        
        <div className='userHome'>
             <ul>
              <li className='topic'><a href="/createShop">Create a Shop</a></li>
              <li className='topic'><a href="/shopHome">View Your Shops</a></li>
              <li className='topic'><a href="/garageHome">Create a Garage</a></li>
              <li className='topic'><a href='/createdServices'>Created Services</a>  </li>
            </ul>
        </div>
    )

}

export default OwnerHome