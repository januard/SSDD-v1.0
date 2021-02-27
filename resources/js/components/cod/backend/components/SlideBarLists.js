import React from 'react';
import { Link } from "react-router-dom";


export const routeLocation = window.location.pathname;
export const itemLists = ({id = 0, labelTitle = '', routes = "#",
 icons = '', dataTarget ="", attri, subItem = []}) => {
    return {
        id : id,
        labelTitle : labelTitle,
        routes: routes,
        dataTarget: dataTarget,
        icons: icons,
        attri: attri,
        subItem: subItem
    }
}

export const limitString = (counts)=>{
    let letters = "";
    for(let count = 0 ; count < counts.length; count++){
        if(count < 19) {
            letters += counts[count]
        } else if(count === 19){
            letters += '...';
        }
    }
    return letters;
}

export const ItemListStyle = ({ itemList, location, sublinks, children }) => {
   return(<li className="nav-item">
        { itemList.subItem.length > 0 ? (<>
            <a href="#" className={`nav-link nav-collapse-link${sublinks!=null?' sub-link-active' : ''}`} 
                data-target={`#${itemList.dataTarget}`} data-toggle="collapse" aria-expanded="true">
                <span className="icon">
                    <i className={`fas ${itemList.icons}`}></i>
                </span>
                <span className="label">{limitString(itemList.labelTitle)}</span>
            </a>
            <div className="sublink-container no-animation collapse" id={itemList.dataTarget}>
                <ul className="nav nav-pills flex-column">
                    {children}
                </ul>
            </div>
        </>) : (
            <Link to={itemList.routes} className={`nav-link sub-nav-link${location===itemList.routes?' active':''}`}>
                <span className="icon">
                    <i className={`fas ${itemList.icons}`}></i>
                </span>
                <span className="label">{limitString(itemList.labelTitle)}</span>
            </Link>)
        }
    </li>)};

export const slideBarList = [
    itemLists({
        id: 1,
        labelTitle: 'Child Welfare',
        icons: 'fa-school',
        routes: '#',
        dataTarget: "childwelf",
        attri: 'cwfpc',
        subItem: [
            itemLists({
                id: 1,
                labelTitle: `Protective serivces – Rescue 
                Operation/Case Referrence`,
                routes: '/cod/protective.services',
                icons: '',
                dataTarget: "",
                attri: 'cwfpc',
                subItem: []
            }),
            itemLists({
                id: 1,
                labelTitle: 'Recognition to Operate Public/Private (CDC/LC)',
                routes: '/cod/recog.cdc-lc',
                icons: '',
                subItem: []
            }),
        ]
    }),
    itemLists({
        id: 2,
        labelTitle: `Adoption`,
        routes: "#",
        icons: 'fa-ad',
        dataTarget: "adoptTarget",
        subItem: [
            itemLists({
                id: 2,
                labelTitle: `A. Facilitation of Certificate
                 declaring a child as legally avaliable for
                  adoption (CDCLAA) pursuant to republic act 9523`,
                routes: '/cod/faci.cdclaa',
                icons: '',
                dataTarget: "",
                subItem: []
            }),
            itemLists({
                id: 2,
                labelTitle: `B. Issuarance Certificate of 
                consent to adoption`,
                routes: '/cod/cert.consent-adoption',
                subItem: []
            })
        ]
    }),
    itemLists({
        id: 3,
        icons: 'fa-chart-bar',
        labelTitle: 'Youth Welfare',
        routes: '#',
        dataTarget: "youthWelf",
        subItem: [
            itemLists({
                id: 3, 
                labelTitle: "Educational Assistance for indigent children and youth",
                routes: '/cod/educ.assist',
                subItem: []
            }),
            itemLists({
                id: 3,
                labelTitle: `Community-based diversion/Intervation program of
                 Child-in-Conflict with the law`,
                routes: '/cod/community.based',
                subItem: []
            })
        ]
    }),
    itemLists({
        id: 4, 
        icons: 'fa-house-damage',
        labelTitle: 'Family Welfare',
        routes: '#',
        dataTarget: 'familywelf',
        subItem: [
            itemLists({
                id: 4,
                labelTitle: `Provision of philhealth`,
                routes: '/cod/prov.philhealth',
                subItem: []
            }),
            itemLists({
                id: 4,
                labelTitle: `Provision of certificate of indigency (COI)`,
                routes: '/cod/prov.cert-coi',
                subItem: []
            }),
            itemLists({
                id: 4,
                labelTitle: `Pre-marriage counseling application`,
                routes: '/cod/pre-marriage',
                subItem: []
            }),
            itemLists({
                id: 4,
                labelTitle: `Parenting capability assessment report`,
                routes: '/cod/parenting-assess',
                subItem: []
            }),
        ]

    })
];