import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import AdoptASteps from "./AdoptASteps";

function AdoptionA() {
    const data = {
        totalProg: 6,
        progressed: 6,
    }
    const [hlprog, sethlprog]=useState(0);
    return (<>
        <div className="w-50">
            A. Facilitation of Certificate declaring a child as legally
            avaliable for adoption (CDCLAA) pursuant to republic act 9523
        </div>
        <div className="cwf__process__container">
            <div className="cwf__proglabel">step  1 - 6</div>
            <div className="cwf__progSteps">
                <ProgressBar data={data} hlProg={hlprog} setHLprog={sethlprog} width="130"/>
            </div>
            <div className="cwf__pubpri ml-2">
                <div className="cwf__inputfields mt-3">
                    <AdoptASteps  currProg={hlprog} setHLprog={sethlprog}/>
                </div>
            </div>
        </div>
    </>);
}

export default AdoptionA;
