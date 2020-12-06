import React, {useState, useEffect, useMemo} from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import ChartList from './ChartList';
import axios from 'axios'
import '../../styles/Charts.css'

const ComponentChartLineDay = React.memo(function ({reports}) {
    return (
        <LineChart
            className="dashboardContainer__LineChart"
            width={800}
            height={500}
            data={reports}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Cases" stroke="#e53935" />
        </LineChart>
    )
})

const ChartLineDay = React.memo(function () {

    const [name, setName] = useState("France")
    const [dataCountry, setDataCountry] = useState([])
    const [reports, setReports] = useState([])

    useEffect( () => {
        axios.get('https://api.covid19api.com/countries')
            .then(res => setDataCountry(res.data))
    })

    useEffect( () => {
        axios.get(`https://api.covid19api.com/total/country/${name}/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-12-01T00:00:00Z`)
            .then(res => setReports(res.data))
    }, [name])


    const ViewChartList = useMemo( () => {
        return <ChartList dataCountry={dataCountry} setNameCountry={setName}/> 
    }, [dataCountry])

    const ViewChartLineDay = useMemo( () => {
        return ( <ComponentChartLineDay reports={reports} />)
    }, [reports])


    return (
        <div id="dashboardContainer__chartLinedAY" className="dashboardContainer__chartLinedAY">
            <h1 className="dashboardContainer____chart__title">People confirmed per day</h1>
            {ViewChartList}
            {ViewChartLineDay}
        </div>
        )
    })
    
    export default ChartLineDay
    