import React from 'react'
import Navbar from './components/Navbar'


function App() {

const Cards = ({children})=>(<div className="card mt-4">
    <div className="card-body">
        {children}
    </div>
</div>);
const setItem = ({id = 0, itemName = ''})=> { return {
    id: id, itemName: itemName
}}
const itemList =[
    setItem({
        id: 1,
        itemName: `1. Original and updated, and/or
        Certified True Photocopy of Clinical Abstract/ Medical
        certificate with date of issuance, full name, signature
        and license number of attending physician (issued not later than 3 months)`
    }),
    setItem({
        id: 2,
        itemName: `2. Original and updated doctor’s prescription with
        the date of issuance and name of patient 
        (signed by the attending physician with 
        license number indicated)`
    }),
    setItem({
        id: 3,
        itemName: `3. Original and updated, and/or Certified 
        True Photocopy of Barangay Certification 
        of Indigency certified by the Punong Barangay;
         and/ or For and by the Authority of any elected 
         barangay officials`
    }),
    setItem({
        id: 4,
        itemName: `4. Photocopy of any valid Government Issued ID of
        the patient and person to be interviewed.`
    })
];
const burialItemList = [
    setItem({
        id: 1,
        itemName: `1. Interview, assessment and evaluation`
    }),
    setItem({
        id: 2,
        itemName: `2. Counseling / Procedural Guidelines`
    }),
    setItem({
        id: 3,
        itemName: `3. Requisition of Cash Advance for medicines of clients`
    }),
    setItem({
        id: 4,
        itemName: `4. Coordination of Medical Social Service of different hospitals`
    }),
    setItem({
        id: 5,
        itemName: `5. Presentation of official receipts and procured medicines to
         Fiscal Control Unit and City General Services Department for auditing purposes`
    }),
    setItem({
        id: 6,
        itemName: `6. Extension of procured medicines to clients`
    }),
    setItem({
        id: 7,
        itemName: `7. Submission of Report on Findings, Official receipt, latest
         prescription signed by the physicians with license number and latest 
         clinical abstract for liquidation purposes`
    })
]

const burialRequirements = [
    setItem({
        id: 1,
        itemName: `1. Certified True Xerox Copy of Death Certificate`
    }),
    setItem({
        id: 2,
        itemName: `2. Cremation Permit`
    }),
    setItem({
        id: 3,
        itemName: `3. Original Barangay Certification of Indigency 
        of the bereaved family/ deceased (BURIAL/FINANCIAL ASSISTANCE) 
        certified by the Punong Barangay; and/or For and by the Authority
         of any elected barangay officials.`
    }),
    setItem({
        id: 4,
        itemName: `4. Duly Notarized Funeral Contract.`
    }),
    setItem({
        id: 5,
        itemName: `5.Photocopy of any valid Government Issued ID 
        of the deceased and person to be interviewed`
    }),
]
const ListView = ({content}) => (<li className="list-group-item">{content}</li>)

    return (<>
        <Navbar/>
        <div className="container mt-4" >
            <Cards>
                <h4>Medical Assistance</h4>
                    <hr/>
                    <h3>
                        <small>Process</small>
                    </h3>
                    <p>
                        For individuals who are confined in hospital and who are 
                        in crisis situation through the purchase of prescribed
                         medicines not readily available at the Quezon City
                          Pharmacy of QC Health Department
                    </p>
                    <h3>
                        <small>Requirements</small>
                    </h3>
                    <ul className="list-group list-group-flush">
                        {itemList.map((itemlists, i)=><ListView key={i} content={itemlists.itemName}/>)}
                    </ul>
                    <p className="mt-5"><b>PRESENT ALL REQUIREMENTS</b> to the Officer on duty at the 
                    <a href="#0"> SOCIAL SERVICES DEVELOPMENT DEPARTMENT </a>
                        at the Quezon City Hall compound
                     </p>
            </Cards>
            <Cards>
                <h4>Burial Assistance</h4>
                <hr/>
                <p>Povision of burial assistance to the bereaved families or
                     relatives to lessen their economic burden due to the
                      death of one family member through a Guarantee Letter,
                       Murang Palibing, Diretsong Palibing, Referrals to the
                        different funeral parlors of Quezon City</p>
                <i>Burial Assistance Activity</i>
                <ul className="list-group list-group-flush">
                    {burialItemList.map((subItem, i)=><ListView key={i} content={subItem.itemName}/>)}
                </ul>
                <h3>
                    <small>Requirements</small>
                </h3>
                <ul className="list-group list-group-flush">
                    {burialRequirements.map((itemlist,i)=><ListView key={i} content={itemlist.itemName}/>)}
                </ul>
                <p><b>PRESENT ALL REQUIREMENTS</b> to the Officer In on 
                    duty at the <b>SOCIAL SERVICES DEVELOPMENT DEPARTMENT</b> at 
                    Molave Building Quezon City</p>
            </Cards>
        </div>
    </>);
}

export default App
