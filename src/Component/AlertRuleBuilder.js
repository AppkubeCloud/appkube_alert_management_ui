import React from "react";
import "./Style/AlertRuleBuilder.css";
import {Radio, Button, Form, Input} from "antd";
import {Link } from 'react-router-dom';


function AlertRuleBuilder(){
    const { TextArea } = Input
    return(
       <div> 
            <div className="rule-builder-div">
                <label className="rule-builder-lbl">Alert rule builder</label>
                <Button type="primary" className="rule-builder-back-btn"><Link to="/alertsmanagement">Back</Link></Button>
            </div>
            <div className="radio-btn-div">
            <Radio.Group >
                <Radio.Button className="radio-btn" style={{color: "black", borderColor:"black"}}>Alert Details</Radio.Button>
                <Radio.Button className="radio-btn" style={{color: "black", borderColor:"black"}}>Alert Type</Radio.Button>
                <Radio.Button className="radio-btn" style={{color: "black", borderColor:"black"}}>Conditions</Radio.Button>
                <Radio.Button className="radio-btn" style={{color: "black", borderColor:"black"}}>Alert Handlers</Radio.Button>
                <Radio.Button className="radio-btn" style={{color: "black", borderColor:"black"}}>Message</Radio.Button>
            </Radio.Group>
           </div>
            <div className="rule-builder-form">
            <Button disabled className="frm-rule-btn">Save Rule</Button>
            <Form layout="vertical" className="rule-form">
                <Form.Item >
                    
                 <label className="rule-frm-lbl"> NAME THIS ALERT RULE </label>
                <Input placeholder="Placeholder" />
                 </Form.Item>
                <Form.Item>
                 <label  className="rule-frm-lbl">DISCRIPTION</label>
                <TextArea rows={5} placeholder="Placeholder"/>
                 </Form.Item>
                  
            </Form>
            <Form.Item style={{textAlign:"center"}}> 
                    <Button type="primary" className="frm-nxt-btn">Next</Button>
                </Form.Item>
            </div>
        </div>
    )
};
export default AlertRuleBuilder;