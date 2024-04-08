import react, {useState} from "react";
import {Button, Card, Dropdown, Menu} from "antd";
import {CaretDownOutlined, CodepenCircleOutlined} from "@ant-design/icons";
import "./Style/AlertHandlers.css";

function AlertHandlers(){
    const AddAnotherHandler = (
        <Menu className="add-another-handler-dropdown-menu">
            <Menu.Item style={{color:"#383874"}}><CodepenCircleOutlined style={{marginRight:"5px"}}/>Post</Menu.Item>
            <Menu.Item style={{color:"#383874"}}><CodepenCircleOutlined style={{marginRight:"5px"}}/>tcp</Menu.Item>
            <Menu.Item style={{color:"#383874"}}><CodepenCircleOutlined style={{marginRight:"5px"}}/>exec</Menu.Item>
            <Menu.Item style={{color:"#383874"}}><CodepenCircleOutlined style={{marginRight:"5px"}}/>log</Menu.Item>
            <Menu.Item style={{color:"#383874"}}><CodepenCircleOutlined style={{marginRight:"5px"}}/>slack(default)</Menu.Item>
            <Menu.Item style={{color:"#383874"}}><CodepenCircleOutlined style={{marginRight:"5px"}}/>email</Menu.Item>
            <Menu.Item style={{color:"#383874"}}><CodepenCircleOutlined style={{marginRight:"5px"}}/>alert</Menu.Item>
            <Menu.Item style={{color:"#383874"}}><CodepenCircleOutlined style={{marginRight:"5px"}}/>hipchart</Menu.Item>
            <Menu.Item style={{color:"#383874"}}><CodepenCircleOutlined style={{marginRight:"5px"}}/>kafka (local host)</Menu.Item>
            <Menu.Item style={{color:"#383874"}}><CodepenCircleOutlined style={{marginRight:"5px"}}/>opsGenie</Menu.Item>
            <Menu.Item style={{color:"#383874"}}><CodepenCircleOutlined style={{marginRight:"5px"}}/>Pushover</Menu.Item>
        </Menu>
    )
    return(
        <div>
             <div className="rule-builder-form">
                <label className="alert-type-lbl">CONDITIONS</label>
            <Button disabled className="frm-rule-btn">Save Rule</Button>
            <Card className="cndtn-crd"
                 title="Send this Alert to :"
                 extra={
                    <div className="add-another-handler-dropdown">
                        <Dropdown overlay={AddAnotherHandler}  trigger={["click"]}  >
                            <div className="add-another-handler-dropdown-lbl">
                                Add another handler
                                <CaretDownOutlined className="cndtn-down-icon" style={{marginLeft:"5px"}}/></div>
                        </Dropdown>
                        {/* <label  className="cndtn-lbl">is</label>
                        <Dropdown overlay={compareItem} trigger={['click']}>
                            <div  className="cndtn-dropdwn">
                               { compare ? compare : "greater than" }
                            <CaretDownOutlined className="cndtn-down-icon"/></div>
                        </Dropdown>
                        <Input placeholder="Placeholder" style={{width:"35%"}}/> */}
                    </div>                    
                 }          
                 ></Card>
        </div>
        </div>
    )
};
export default AlertHandlers;