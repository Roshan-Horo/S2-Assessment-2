import React from 'react'
import { Pie, Bar } from 'react-chartjs-2';

const Dashboard = () => {

    let dataPie = {
        
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        
    };

    let dataLine = {
        datasets: [{
            data: [{
                x: 10,
                y: 20
            }, {
                x: 15,
                y: 10
            }]
        }]
    }

    return (
        <React.Fragment>
            <div className="info">
            <h1>Dashboard</h1>
            </div>

            <div className="dashboard">
             <div className="pie">
              <div className="pie-head">
               <h2>Email Statistics</h2>
               <p>Last Campaign Performance</p>
              </div>

              <div className="pie-body">
              <Pie
              data={dataPie}
              width={350}
              height={400}
              options={{ maintainAspectRatio: false }}
            />
              </div>
              <p class="low" >Campaign set 2 day ago</p>
            
             </div>

             <div className="line">
             <div className="line-head">
             <h2>User Behavior</h2>
             <p>24 hours Performance</p>
            </div>

            <div className="line-body">
            
            <line
            data={dataLine}
            width={700}
            height={500}
            
          />
            </div>
            <p>updated 3 minutes ago</p>             
             </div>
            </div>
        </React.Fragment>
    )
}

export default Dashboard
