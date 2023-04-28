import React, { Component } from 'react'
import '../../Components/ComponentCss/ownerHome.css'

function AdminHomeNew() {
    return (

        <div className='userHome'>
            <div className='grid'>
                <a className='card' href='/adminHomeFuel'>
                    <h3>Create a Fuel Station</h3>
                </a>
                <a className='card' href='/shopCount'>
                    <h3>See shop count</h3>
                </a>
            </div>
        </div>

    )

}

export default AdminHomeNew