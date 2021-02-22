import React from 'react'
import {BrowserRouter, Route,Switch} from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Dashboard from './screen/Dashboard'
import User from './screen/User'
import Form from './screen/Form'
import Map from './screen/Map'

function App() {
  return (
    <BrowserRouter>
    <div className="container">
    <Sidebar />

    <main>
     <Switch>
     <Route path="/" component={Dashboard} exact />
     <Route path="/user" component={User}  />
     <Route path="/form" component={Form}  />
     <Route path="/map" component={Map}  />
    </Switch>
    </main>
    </div>

    </BrowserRouter>
  );
}

export default App;
