import React from 'react'
import rooftop from '../rooftop.jpg'
import profile from '../profile.jpg'

const User = () => {
    return (
        <React.Fragment>
        <div className="info">
         <h1>User</h1>
        </div>
        <div className="card">
            <div className="card-img">
              <img src={rooftop} alt="rooftop_img"/>
            </div>
            <div className="card-body">
             <div className="profile-img">
              <img src={profile} alt="profile_pic" />
             </div>
             <h2>Mike Andrew</h2>
             <p>michael24</p>
             <p className="about">This is the short para about the user profile.</p>
            </div>
        </div>
        </React.Fragment>
    )
}

export default User
