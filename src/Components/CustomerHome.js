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
              <li className='topic'><a href='/locateMYFuel'>Locate Fuel Stations near me</a> </li>
              <li className='topic'><a href='/locateMYShop'>Locate Shop near me</a> </li>
              <li className='topic'><a href='/seeServices'>Available Services</a> </li>
              <li className='topic'><a href='/batteryCompare'>Battery Compare</a> </li>
              <li className='topic'><a href='/findInsurance'>Find Insurance</a> </li>
            </ul>
        </div>
    )

}

export default CustomerHome