import React from 'react'
import './Nav.css'

function Nav() {
    return (
        <div className="nav">
           <div className="navlogoContainer">
                <a className="navlogo" href=" "><span className="head1">Kanban board:</span> Task Management tool</a>
           </div>
           <div className="listcontainer">
               <ul className="list">
                   <li className="listitem"><a style={{textDecoration:'none', color:'inherit'}} href=" ">About us</a></li>
                   <li className="listitem"><a style={{textDecoration:'none', color:'inherit'}} href=" ">Contact us</a></li>
               </ul>
           </div>
        </div>
    )
}

export default Nav
