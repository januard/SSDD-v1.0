import React,{ useEffect, useState } from 'react' 
import { useHistory, useLocation } from 'react-router-dom';
import ProgressBar from '../ProgressBar';
import ListStepsCwf from './ListStepsCwf';
const useQuery = ()=> new URLSearchParams(useLocation().search);
function ProcessReq() {
    const data = {
        totalProg: 5,
        progressed: 5,
    }
     
    const [hlprog, sethlprog] = useState(0);
    const query = useQuery();
  
    
    return (
        <div className="cwf__process__container">
            <div className="cwf__proglabel">step 1 - 5, {query.get('req')}</div>
            <div className="cwf__progSteps">
                <ProgressBar data={data} hlProg={hlprog} setHLprog={sethlprog} />
            </div>  
            <div className="cwf__progForms">
                <div className="cwf__inputfields mt-4">
                    <ListStepsCwf curProg={hlprog}/>
                </div>
            </div>
        </div>
    )
}

export default ProcessReq
