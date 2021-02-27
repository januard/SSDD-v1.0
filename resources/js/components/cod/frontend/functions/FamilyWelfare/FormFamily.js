import React, { useState } from 'react'
import ProgressBar from '../ProgressBar';

function FormFamily({ title, data, defaultStep = 0, component, progBarWidth }) {
    const [hlprog, sethlprog]=useState(defaultStep);
    return (<>
      <div className="w-50">{title}</div>
        <div className="cwf__process__container">
            <div className="cwf__proglabel">step  1 - {data.totalProg}</div>
            <div className="cwf__progSteps">
                <ProgressBar data={data} hlProg={hlprog} setHLprog={sethlprog} width={progBarWidth}/>
            </div>
            <div className="cwf__pubpri ml-2">
                <div className="cwf__inputfields mt-3">
                    {component({hlProg: hlprog, setHLprog: sethlprog})}
                </div>
            </div>
        </div>         
    </>)
}

export default FormFamily
