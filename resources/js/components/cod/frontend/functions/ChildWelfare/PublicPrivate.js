import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import ListStepsCwfPubPriv from "./ListStepsCwfPubPriv";

function PublicPrivate() {
    const data = {
        totalProg: 8,
        progressed: 8,
    }
    const [hlprog, sethlprog]=useState(0);
    return (<>
        <div className="cwf__subtitle">Recognition to Operate Public/Private (CDC/LC)</div>
        <div className="cwf__process__container">
            <div className="cwf__proglabel">step 1 - 8</div>
            <div className="cwf__progSteps">
                <ProgressBar data={data} hlProg={hlprog} setHLprog={sethlprog} width="100"/>
            </div>
            <div className="cwf__pubpri ml-2">
                <div className="cwf__inputfields mt-3">
                    <ListStepsCwfPubPriv currProg={hlprog} sethlprog={sethlprog}/>
                </div>
            </div>
        </div>
    </>);
}

export default PublicPrivate;
