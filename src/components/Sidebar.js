import React from 'react'

const Sidebar = () => {
    return (
        <React.Fragment>
           <aside>
            <div className="logo">Logo
     
            <button>toggle</button>
        </div>
        <nav>
        <ul>
         <li><a href="#">Dashboard</a></li>
               <li><a href="#">User Profile</a></li>
               <li><a href="#">Form</a></li>
         <li><a href="#">Map</a></li>
        </ul>
       </nav>
       </aside>
  
     
   </React.Fragment>
    )
}

export default Sidebar
