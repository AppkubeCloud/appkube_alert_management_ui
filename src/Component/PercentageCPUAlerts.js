import React from "react";
import {  Button, Layout, Tabs } from 'antd';
import { Link} from "react-router-dom";
import "./Style/PercentageCPUAlert.css"
import { Content } from "antd/es/layout/layout";

function PercentageCPUAlert(){
    return(
        <div className="maincpu-div">
            <div className="percentage-div">
                <label className="percentage-tittle">Alert : Percentage CPU</label>
                <Button className="percentage-btn">{<Link to="/"> Back </Link>}</Button>
            </div>  
            <Layout> 
                <Content>  
        <Tabs defaultActiveKey="1" className="percentage-tab" >
            <Tabs.TabPane  tab={<Link to="/summary" style={{color: "#383874"}}>Summary</Link> } key="1" />
            <Tabs.TabPane tab={<Link to="monitorallalerts/percentagecpualert/history"  style={{color: "#383874"}}>History</Link>}key="2" />
            <Tabs.TabPane tab={<Link to="monitorallalerts/percentagecpualert/diagnostics"  style={{color: "#383874"}}>Diagnostics</Link>}key="3" />
        </Tabs>
        </Content>  
        </Layout> 
        </div>
    );

};
export default PercentageCPUAlert;

