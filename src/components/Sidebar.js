import React,{useState} from 'react'
import {BrowserRouter, Link} from 'react-router-dom'



const Sidebar = () => {
    const [isFullNav,setFullNav] = useState(false)

    const showFullNav = () => {
        setFullNav(!isFullNav)  
    }

    return (
        <React.Fragment>
        <aside className={isFullNav ? "aside-width": null}>
            <div className="logo">
             <p>Logo</p>
             <button className="right" onClick={showFullNav}><i class={isFullNav?"fas fa-chevron-right fa-2x arrow-reverse": "fas fa-chevron-right fa-2x arrow"}></i></button>
            </div>

        <nav>

        <ul>
        <li><Link class="nav-link" to="/" ><i className="fas fa-chart-line fa-2x"></i><span className={isFullNav?"text-nav show-text":"text-nav"}> Dashboard </span></Link></li>
        <li><Link  to="/user" class="nav-link"><i className="fas fa-user-circle fa-2x"></i><span className={isFullNav?"text-nav show-text":"text-nav"}>  User</span></Link></li>
        <li><Link class="nav-link" to="/form" ><i className="fas fa-envelope fa-2x"></i> <span className={isFullNav?"text-nav show-text":"text-nav"}> Form</span></Link></li>
        <li><Link class="nav-link" to="/map" ><i className="fas fa-map-marked-alt fa-2x"></i><span className={isFullNav?"text-nav show-text":"text-nav"}> Map</span></Link></li>
        </ul>
   
        

       </nav>
       </aside>
  
     
   </React.Fragment>
    )
}

export default Sidebar
