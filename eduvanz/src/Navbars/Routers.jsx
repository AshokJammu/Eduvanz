import React from "react"
import { Route } from "react-router-dom";
import Home from "../components/Home";
import Register from "../components/Register";
import RegisterList from "../components/RegisterList"
import Reports from "../components/Reports"

const Routers =()=>{
    return(
        <>
            <Route path="/" component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/userdetails" component={RegisterList}/>
            <Route path="/reports" component={Reports}/>
        </>
    )
}
export default Routers