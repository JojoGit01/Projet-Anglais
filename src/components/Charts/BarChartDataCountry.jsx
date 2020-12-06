import React, {useState, useMemo, useEffect} from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from 'axios'
import '../../styles/Charts.css'

const ComponentBarChartDataCountry = React.memo(function ({data}) {
    return (
        <div id="barchartDataCountry" className="barchartDataCountry">
            <h1 className="dashboardContainer____chart__title"><span>Data per country</span></h1>
            <BarChart className="barcharDataCounty_c"
              width={1200}
              height={550}
              data={data}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
            <CartesianGrid strokeDasharray="10 10" />
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="confirmed" fill="#ef5350" fontSize={25} />
          </BarChart>
      </div>
    )
})

function BarChartDataCountry () {
    
    const [countryData, setCountryData] = useState([])

    useEffect( () => {
        axios.get('https://covid19-api.com/country/all') 
            .then(res => setCountryData(res.data))           
    }, [])

    const ViewBarChartDataCountry = useMemo( () => {
        console.log(countryData)
        return ( <ComponentBarChartDataCountry data={countryData} /> )
    }, [countryData])


    return (
        <React.Fragment>
            {ViewBarChartDataCountry}
        </React.Fragment>
    )
}

export default BarChartDataCountry
