import React from 'react'
import DashboardHeader from './DashboardHeader'
import '../../styles/Dashboard.css'
import DashboardContainer from './DashboardContainer'

function Dashboard() {
    return (
        <div>
            <div className="dashboard">
                <DashboardHeader />
                <DashboardContainer />
            </div>
        </div>
    )
}

export default Dashboard
