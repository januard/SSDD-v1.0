import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChildWelfare from "./ChildWelfare";
import RequestDialog from "../components/RequestDialog";
import YouthWelfare from "./YouthWelfare";
import FamilyWelfare from "./FamilyWelfare";
import Userlogin from "../components/Userlogin";    
import { useDataSet } from "../components/dataSet";  
const Menu = (set_active = {}) => {
    return { 
        cwf: false,
        ywf: false,
        fyf: false,
        ...set_active,
    }
} 
const auth = (data , setlogin ) => {
    return {
        users: data,
        login: ()=> setlogin && $("#Dialoglogin-id").modal({keyboard: false})
    }
}
function App() {
    const [{ users }, dispatch] = useDataSet();
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/qc.cod/family-welfare">
                        <Header users={users} menulist = {Menu} setActive={Menu({fyf: true })} />
                        <FamilyWelfare auth = {users.length > 0 ? auth(users, false): auth([], true)}/>
                    </Route>
                    <Route path="/qc.cod/youth-welfare">
                        <Header users={users} menulist = {Menu} setActive={Menu({ywf: true })} />
                        <YouthWelfare auth = {users.length > 0 ? auth(users, false): auth([], true)}/>
                    </Route>
                    <Route path="/qc.cod/child-welfare">
                        <Header users={users} menulist = {Menu} setActive={Menu({cwf: true })} />
                        <ChildWelfare auth = {users.length > 0 ? auth(users, false): auth([], true)}/>
                    </Route>
                    <Route path="/qc.cod" >
                        <Header users={users} menulist = {Menu} setActive={Menu()}/>
                    </Route>
                </Switch>
                <RequestDialog />
                <Userlogin/>
            </Router>
        </>
    );
}

export default App;
