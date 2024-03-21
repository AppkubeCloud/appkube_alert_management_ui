import React from "react";
import { Row, Col, Divider} from "antd";
import "../Style/History.css"

function Diagnostics(){
    return(
        <div className="history-div">
            <label>Percentage CPU</label>
            <Row className="history-card" >
            <Col span={4} order={1} style={{marginBottom:"0px"}} >
                <label className="history-data">Name</label>
                {/* <Input classNames="serverity-input" value="High" name="" variant="borderless" className="input-border"readOnly={true}/> */}
            </Col>
            <Col span={4} order={2} >
                <label className="history-data">Severity</label>
                {/* <Input value="Prod_DB_SYN14" name="" variant="borderless" className="input-border"readOnly={true}/> */}
            </Col>
            <Col span={4} order={2} >
                <label className="history-data">Monitor Condition</label>
                {/* <Input value="Prod_DB_SYN14" name="" variant="borderless" className="input-border"readOnly={true}/> */}
            </Col>
            <Col span={4} order={2} >
                <label className="history-data">Alert State</label>
                {/* <Input value="Prod_DB_SYN14" name="" variant="borderless" className="input-border"readOnly={true}/> */}
            </Col>
            <Col span={4} order={2} >
                <label className="history-data">Affected Resource</label>
                {/* <Input value="Prod_DB_SYN14" name="" variant="borderless" className="input-border"readOnly={true}/> */}
            </Col>
            </Row>
            <Divider dashed/>
            <Row >
             <Col span={4} order={1} style={{marginBottom:"0px"}} >
                <label className="history-data">Percentage CPU</label>
                {/* <Input classNames="serverity-input" value="High" name="" variant="borderless" className="input-border"readOnly={true}/> */}
            </Col>
            <Col span={4} order={2} >
                <label className="history-data">High</label>
                {/* <Input value="Prod_DB_SYN14" name="" variant="borderless" className="input-border"readOnly={true}/> */}
            </Col>
            <Col span={4} order={2} >
                <label className="history-data">Fired</label>
                {/* <Input value="Prod_DB_SYN14" name="" variant="borderless" className="input-border"readOnly={true}/> */}
            </Col>
            <Col span={4} order={2} >
                <label className="history-data">New</label>
                {/* <Input value="Prod_DB_SYN14" name="" variant="borderless" className="input-border"readOnly={true}/> */}
            </Col>
            <Col span={4} order={2} >
                <label className="history-data">Prod_DB_SYN14</label>
                {/* <Input value="Prod_DB_SYN14" name="" variant="borderless" className="input-border"readOnly={true}/> */}
            </Col>
            </Row>
            <Divider dashed/>
        </div>
    )
};
export default Diagnostics;