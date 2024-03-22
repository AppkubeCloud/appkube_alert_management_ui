import React from "react";
import {  Button, Layout, Tabs } from 'antd';
import { Link, Route, Router} from "react-router-dom";
import Summary from "./Pages/Summary";
import History from "./Pages/History";
import Diagnostics from "./Pages/Diagnostics";
import "./Style/PercentageCPUAlert.css"
import { Content } from "antd/es/layout/layout";

function PercentageCPUAlert(){
    return(
        <div className="maincpu-div">
            <div className="percentage-div">
                <label className="percentage-tittle">Alert : Percentage CPU</label>
                <Button className="percentage-btn">{<Link to="/monitorallalerts"> Back </Link>}</Button>
                
                
            </div>  
            <Layout> 
                <Content>  
        <Tabs defaultActiveKey="1" className="percentage-tab" >
            <Tabs.TabPane  tab={<Link to="/percentagecpualert/summary" style={{color: "#383874"}}>Summary</Link> } key="1" />
            <Tabs.TabPane tab={<Link to="/percentagecpualert/history"  style={{color: "#383874"}}>History</Link>}key="2" />
            <Tabs.TabPane tab={<Link to="/percentagecpualert/diagnostics"  style={{color: "#383874"}}>Diagnostics</Link>}key="3" />
        </Tabs>
        </Content>  
        </Layout> 
       {/* <Summary/>
       <History/>
       <Diagnostics/>
         */}
        </div>
    );

};
export default PercentageCPUAlert;

