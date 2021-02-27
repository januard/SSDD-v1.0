import React from 'react' 
import { ItemListStyle, routeLocation, slideBarList } from './SlideBarLists';

function SlideBar() {
    return (<ul className="nav nav-pills flex-column">
            {slideBarList.map((mainList, i)=>{
                let sublinkActive = null;
                 mainList.subItem.map((sublinks)=>{
                    if(sublinks.id == mainList.id){
                        routeLocation == sublinks.routes && [sublinkActive = true];
                    }
                });
            return (<ItemListStyle key ={i} itemList={mainList} 
                        location = {routeLocation} sublinks={sublinkActive} > {
                        mainList.subItem.map((subItemList, ii)=>{
                            let subSublinksActive = null;
                            subItemList.subItem.map((subsubItems)=>{
                                 if(subItemList.id==subsubItems.id){
                                    routeLocation == subsubItems.routes && [subSublinksActive = true];
                                }
                            })
                        return (<ItemListStyle key={ii} itemList={subItemList} 
                            location={routeLocation} sublinks={subSublinksActive}>
                                {(subItemList.subItem.map((subItemlists, inc)=>
                                    <ItemListStyle key={inc} itemList={subItemlists} location ={routeLocation} />
                                ))}
                        </ItemListStyle>)
                        })
                    }
                </ItemListStyle>)
            })}
    </ul>)
}

export default SlideBar
