import React, {useState, useEffect} from 'react'
import Divider from '@material-ui/core/Divider';
import {GiConfirmed} from 'react-icons/gi'
import axios from 'axios'

function ComponentDashboardHeader({name, dataSend, datadiffSend, updateTime, classeC}) {
    return (
        <div className="dashboardHeader__content">
            <div className="dashboardHeader__content_view">
                <div className="dashboardHeader__content__img">
                    <GiConfirmed className={classeC}/>
                </div>
                <div className="dashboardHeader__content__text">
                    <p className="dashboardHeader__content__text__name">{name}</p>
                    <p className="dashboardHeader__content__text_dataSend">{new Intl.NumberFormat().format(dataSend)}</p>
                    <p className="dashboardHeader__content__text_dataSend">+ {new Intl.NumberFormat().format(datadiffSend)}</p>
                </div>
            </div>
            <div className="dashboardHeader__content__time">
                <Divider />
                <p className="dashboardHeader__content__udpateTime">Last update : {updateTime}</p>
            </div>
        </div>
    )
}

function DashboardHeader() {
    const [data, setData] = useState(0)
    
    useEffect( () => {
        axios.get(`https://covid-api.com/api/reports/total?date=2020-12-02`)
            .then(res => setData(res.data.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="dashboardHeader">
            <ComponentDashboardHeader name={"Confirmed"} dataSend={data.confirmed} datadiffSend={data.confirmed_diff} updateTime={data.last_update} classeC={"dashboardHeader__content__red"} />
            <ComponentDashboardHeader name={"Active"} dataSend={data.active} datadiffSend={data.active_diff} updateTime={data.last_update} classeC={"dashboardHeader__content__orange"} />
            <ComponentDashboardHeader name={"Recovered"} dataSend={data.recovered} datadiffSend={data.recovered_diff} updateTime={data.last_update} classeC={"dashboardHeader__content__green"} />
            <ComponentDashboardHeader name={"Deaths"} dataSend={data.deaths} datadiffSend={data.deaths_diff} updateTime={data.last_update} classeC={"dashboardHeader__content__black"} />
        </div>
    )
}

export default DashboardHeader
