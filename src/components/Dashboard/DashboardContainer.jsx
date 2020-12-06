import React from 'react'
import ComponentPieChart from '../Charts/PieChart'
import ChartLineDay from '../Charts/ChartLineDay'
import BarChartDataCountry from '../Charts/BarChartDataCountry'

function DashboardContainer() {
    return (
        <div className="dashboardContainer">
            <h1 className="dashboardContainer__title"><span>View data by graph</span></h1>
            <BarChartDataCountry />
            <div className="dashboardContainer__content">
                <ChartLineDay />
                <ComponentPieChart />
            </div>
        </div>
    )
}

export default DashboardContainer
