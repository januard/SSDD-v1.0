import React from 'react'
import {  Route, Switch, useRouteMatch } from 'react-router-dom'
import { redirectRoute } from '../components/dataSet';
import Assistance from './YouthWelfare/Assistance';
import CommBase from './YouthWelfare/CommBase';
import YouthWFLinks from './YouthWelfare/YouthWFLinks';

function YouthWelfare({ auth }) {
    const { url} = useRouteMatch(); 
    return (
        <div className="cwf__container mt-4 mr-4 ml-4">
            <div className="cwf__title">Youth Welfare Program</div>
            <Switch> 
                 <Route exact path={`${url}/community.base`} component={()=>redirectRoute(auth, <CommBase/>, url)}/>
                 <Route exact path={`${url}/educ.assistance`} component={()=>redirectRoute(auth, <Assistance/> , url)}/>
                 <Route exact path={url} component={()=><YouthWFLinks auth={auth} url={url}/>}/>
            </Switch>
        </div>
    )
}

export default YouthWelfare
