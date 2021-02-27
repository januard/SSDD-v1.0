import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import AdoptionBSteps from "./AdoptionBSteps";

function AdoptionB() {
    const data = {
        totalProg: 5,
        progressed: 5,
    }
    const [hlprog, sethlprog]=useState(0);
    return (<>
        <div className=" w-50">
            B. Facilitation of issuance of Certificate of consent to adoption
        </div>
        <div className="cwf__process__container">
        <div className="cwf__proglabel">step  1 - 5</div>
        <div className="cwf__progStepSs">
            <ProgressBar data={data} hlProg={hlprog} setHLprog={sethlprog} width="130"/>
        </div>
        <div className="cwf__pubpri ml-2">
            <div className="cwf__inputfields mt-3">
                 <AdoptionBSteps currProg={hlprog} setHLprog={sethlprog}/>
            </div>
        </div>
    </div>
    </>);
}

export default AdoptionB;
