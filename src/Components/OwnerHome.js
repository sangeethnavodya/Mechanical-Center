import React, { Component } from 'react'
import './ComponentCss/ownerHome.css'

function OwnerHome() {
    return (

        <div className='userHome'>
            <div className='grid'>
                <a className='card' href='/createShop'>
                    <h3>Create a Shop</h3>
                </a>
                <a className='card' href='/shopHome'>
                    <h3>View Your Shops</h3>
                </a>
                <a className='card' href='/garageHome'>
                    <h3>Create a Garage</h3>
                </a>
                <a className='card' href='/createdServices'>
                    <h3>Created Services</h3>
                </a>
                <a className='card' href='/createInsurance'>
                    <h3>Create Your Insurance Company</h3>
                </a>
            </div>
        </div>

    )

}

export default OwnerHome