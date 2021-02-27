import React from "react";
import {  Route, Switch, useRouteMatch } from "react-router-dom"; 
import AdoptionB from "./ChildWelfare/AdoptionB";
import AdoptionA from "./ChildWelfare/AdoptionA";
import CwfListLinks from "./ChildWelfare/CwfListLinks";
import ListTableCwf from "./ChildWelfare/ListTableCwf";
import ProcessReq from "./ChildWelfare/ProcessReq";
import PublicPrivate from "./ChildWelfare/PublicPrivate";
import { redirectRoute } from "../components/dataSet";

function ChildWelfare({ auth }) {
    const {path, url} = useRouteMatch()
    
    return (
        <div className="cwf__container mt-4 mr-4 ml-4">
            <div className="cwf__title">Child Welfare Program</div>
            <Switch>
                <Route exact path={`${url}/Adoption/b`} component={()=>
                redirectRoute(auth, <AdoptionB/> , url)}/>

                <Route exact path={`${url}/Adoption/a`} component={()=>
                redirectRoute(auth, <AdoptionA/>, url)}/>

                <Route exact path={`${url}/child.dev.center-learning.center`} 
                component={()=>redirectRoute(auth, <PublicPrivate auth={auth}/>, url)}/>
                
                <Route exact path={`${url}/protective.services`} component={()=>
                redirectRoute(auth, <ListTableCwf auth={auth} url={url}/>, url)
                }/>

                <Route exact path={`${path}/:name/:id`} component={()=>
                    redirectRoute(auth, <ProcessReq/>, url)}/>
                    
                <Route exact path={`${url}`} component={()=><CwfListLinks auth={auth} url={url}/>}/>
            </Switch>
        </div>
    );
}

export default ChildWelfare;
