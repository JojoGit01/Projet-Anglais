import React, { useEffect, useState } from 'react'

import {
    PieChart, Pie, Cell,
} from 'recharts';
import Divider from '@material-ui/core/Divider';

import '../../styles/Charts.css'
import Axios from 'axios';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
        </text>
        )
    }
    
    const ComponentPieChart = React.memo(function () {
        const [france, setFrance] = useState([])
        const [russia, setRussia] = useState([])
        const [china, setChina] = useState([])
        const [boliva, setBoliva] = useState([])
        
        
        useEffect( () => { Axios.get('https://covid19-api.com/country?name=france&format=json').then(res => setFrance(res.data)) }, [])
        useEffect( () => { Axios.get('https://covid19-api.com/country?name=russia&format=json').then(res => setRussia(res.data)) }, [])
        useEffect( () => { Axios.get('https://covid19-api.com/country?name=china&format=json').then(res => setChina(res.data)) }, [])
        useEffect( () => { Axios.get('https://covid19-api.com/country?name=bolivia&format=json').then(res => setBoliva(res.data)) }, [])
        
        const data = []
        
        france.forEach(elm => data.push({ name: elm.country, value: elm.confirmed }))
        russia.forEach(elm => data.push({ name: elm.country, value: elm.confirmed }))
        china.forEach(elm => data.push({ name: elm.country, value: elm.confirmed }))
        boliva.forEach(elm => data.push({ name: elm.country, value: elm.confirmed }))
        
        return (
            <div className="componentPieChart">
            <h1 className="dashboardContainer____chart__title componentPieChart__title">4 random affected countries</h1>
            <PieChart width={300} height={300}>
            <Pie
            data={data}
            cx={140}
            cy={190}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            >
            {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
            </Pie>
            </PieChart>
            <Divider />
            <div className="legend">
            <h3 className="componentPieChart__legend__title">LEGEND</h3>
            <div className="legend__show">
            {   
                data.map( (d, index) => (
                    <div key={d.name} className="legend__show__div">
                    <div style={{background: COLORS[index % COLORS.length]}} className="legend__show__div__r" />
                    <p><span>{d.name}</span></p>
                    </div>
                    ))
                }
                </div>
                </div>
                </div>
                )
            }
            )
            export default ComponentPieChart
            