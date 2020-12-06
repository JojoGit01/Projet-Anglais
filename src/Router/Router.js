import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../views/Home';
import Map from '../views/Map'
import Profil from '../views/Profil/Profil'
import EditProfil from '../views/Profil/EditProfil'
import Setting from '../views/Setting'

import Sidebar from '../components/SideBar/Sidebar';

import '../styles/App.css'

//import Register from '../views/Register';
//import Login from '../views/Login'

import RegistrationForm from '../components/RegistrationForm/RegistrationForm'
import LoginForm from '../components/LoginForm/LoginForm'


function router() {
    return (
        <div className="app__main">
            <BrowserRouter>
                <div className="app__sidebar">
                    <Sidebar />
                </div>
                <div className="app__navigation">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/map" component={Map} />
                        <Route path="/dashboard" component={Map} />
                        <Route path="/profil" component={Profil} />
                        <Route path="/editProfil" component={EditProfil} />
                        <Route path="/setting" component={Setting} />
                        <Route path="/register" component={RegistrationForm} />
                        <Route path="/login" component={LoginForm} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default router
