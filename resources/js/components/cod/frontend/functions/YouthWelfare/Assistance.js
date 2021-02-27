import React, { useState } from 'react'
import ProgressBar from '../ProgressBar';
import AssistSteps from './AssistSteps';

function Assistance() { 
    const data = {
        totalProg: 5,
        progressed: 5,
    }
    const [hlprog, sethlprog]=useState(0);
    return (<>
        <div className="w-50">Educational Assistance for indigent children and youth</div>
        <div className="cwf__process__container">
            <div className="cwf__proglabel">step  1 - 5</div>
            <div className="cwf__progSteps">
                <ProgressBar data={data} hlProg={hlprog} setHLprog={sethlprog} width="130"/>
            </div>
            <div className="cwf__pubpri ml-2">
                <div className="cwf__inputfields mt-3">
                    <AssistSteps hlProg={hlprog} setHLprog={sethlprog}/>
                </div>
            </div>
        </div>
    </>);
}

export default Assistance
