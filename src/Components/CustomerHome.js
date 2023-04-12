import React, { Component } from 'react'
import './ComponentCss/ownerHome.css'

function CustomerHome() {
    return (
        
        <div className='customerHome'>
             <ul>
              <li className='topic'><a href="/seeShops">Find a Shop</a></li>
              <li className='topic'><a href="/seeFuel">Find a Fuel Station</a></li>
              <li className='topic'><a href="/seeFuel">Tire Compare</a></li>
              <li className='topic'><a href="/seeFuel">Find your oil</a></li>
              
            </ul>
        </div>
    )

}

export default CustomerHome