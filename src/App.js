import React from 'react'

import Sidebar from './components/Sidebar'

function App() {
  return (
    <React.Fragment>
    <div className="container">
    <Sidebar />

    <main>
     <h2>User Profile</h2>

     <div className="content">
      content comes here
     </div>
    </main>
    </div>

    </React.Fragment>
  );
}

export default App;
