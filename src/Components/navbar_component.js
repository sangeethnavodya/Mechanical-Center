import React,{Component} from 'react'
import './ComponentCss/navbar.css'

export default class Navbar extends Component{
    render(){
        return(
            <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        )
    }
}