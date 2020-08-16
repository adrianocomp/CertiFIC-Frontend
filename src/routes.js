import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';



import Logon from './pages/Logon';
import CreateUser from './pages/CreateUser';
import CreateCertificate from './pages/CreateCertificate';
import CertificateSearch from './pages/CertificateSearch';
import CertificateProfile from './pages/CertificateProfile';
import Profiles from './pages/Profiles';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {Logon} />
                <Route path="/profiles" component = {Profiles} />
                <Route path="/user/add" component = {CreateUser} />
                <Route path="/certificate/add" component = {CreateCertificate}/>
                <Route path="/certificate/search" component = {CertificateSearch}/>
                <Route path="/certificate/profile" component = {CertificateProfile}/>
            </Switch>
        </BrowserRouter>
    );
}