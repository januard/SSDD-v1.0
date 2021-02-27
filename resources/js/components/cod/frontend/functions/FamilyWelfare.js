import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { redirectRoute } from '../components/dataSet';
import FamilyLinks from './FamilyWelfare/FamilyLinks';
import Formfamily from './FamilyWelfare/FormFamily';
import ParentAssest from './FamilyWelfare/ParentAssest';
import Premarriage from './FamilyWelfare/Premarriage';
import ProvCertSteps from './FamilyWelfare/ProvCertSteps'; 
import ProvphilStep from './FamilyWelfare/ProvphilStep';

function FamilyWelfare({ auth }) {
    const {url} = useRouteMatch();
    
    return (
        <div className="cwf__container mt-4 mr-4 ml-4">
            <div className="cwf__title">FAMILY WELFARE PROGRAM</div>
            <Switch>
                <Route exact path={`${url}/parenting.assessment`} 
                component={()=>
                    redirectRoute(auth,
                        <Formfamily data={{totalProg: 4, progressed: 4}}
                        title="Parenting capability assessment report"
                        component={(evt)=><ParentAssest hlProg={evt.hlProg} setHLprog={evt.setHLprog}/>}
                        />,url)
                }
                />
                <Route exact path={`${url}/pre-marriage`} 
                component={()=>
                    redirectRoute(auth,
                        <Formfamily data={{totalProg: 5, progressed: 5}}
                        title="Pre-marriage counseling application"
                        component={(evt)=><Premarriage hlProg={evt.hlProg} setHLprog={evt.setHLprog}/>}
                        />,url)
                }
                />
                <Route exact path={`${url}/provision.cert.indegency`} 
                    component={()=>
                    redirectRoute(
                        auth,
                        <Formfamily data={{totalProg: 5, progressed: 5}} 
                        title='Provision of certificate of indigency (COI)'
                        component={(evt)=><ProvCertSteps hlProg={evt.hlProg} setHLprog={evt.setHLprog}/>}
                        />,url
                    )}
                />
                <Route exact path={`${url}/provision.philhealth`}
                    component={()=>
                    redirectRoute(
                        auth, 
                        <Formfamily data={{totalProg: 4, progressed: 4}}
                        title='PROVISION OF PHILHEALTH'
                        component={(evt)=><ProvphilStep hlProg={evt.hlProg} setHLprog={evt.setHLprog} />}
                        />, url)}
                />      
                <Route exact path={url} component={()=><FamilyLinks auth={auth} URL={url}/>}/>
            </Switch>
        </div>
    )
}

export default FamilyWelfare
