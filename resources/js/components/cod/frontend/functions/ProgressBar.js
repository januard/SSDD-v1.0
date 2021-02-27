import React from 'react'

function ProgressBar({data, hlProg, setHLprog, width = '130'}) {
    return (
        <React.Fragment>
        {Array(data.totalProg).fill().map((_, index, arr)=><svg key={index} height="30" width={width}>
            <g style={data.progressed>=index+1?{cursor: 'pointer'}:{cursor:'not-allowed'}} 
                onClick={data.progressed>=index+1?()=>setHLprog(index):()=>{}}>
                <circle  cx="15" cy="15" r="10" style={{cursor: 'inherit'}} stroke="black" strokeWidth="1" fill={hlProg>=index?'black':'none'}/>
                <text x="10.4" y="20" fill={hlProg>=index?'white':'black'}>{index + 1}</text>
            </g> 
            {index!==arr.length-1&&<line x1="28" y1="15" x2="100%" y2="15" stroke="black" strokeWidth="1"/>}
        </svg>)}
        </React.Fragment>
    )
}

export default ProgressBar
