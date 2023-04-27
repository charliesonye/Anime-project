import React from 'react'
import {NavLink} from 'react-router-dom'

const linkStyles = {
    display: "inline-block",
    fontFamily: 'Kongtext',
    borderRadius: "25px",
    width: "90px",
    padding: "12px",
    margin: "0 12px 6px",
    background: "orange",
    textDecoration: "none",
    color: "white",
  }; 

 function Navigation() {
  
  
    return (
   
        <div className="NavBar">
        <NavLink to='/'  style={linkStyles}>
            Quotes
        </NavLink>
        <NavLink to='/animes'  style={linkStyles}>
            Animes
        </NavLink>
        <NavLink to='/animes/new' style={linkStyles} >
          Add Anime
        </NavLink>
        <NavLink to='/questions'  style={linkStyles}>
            Anime Quiz
        </NavLink>
    </div>
    
  )
}

export default Navigation