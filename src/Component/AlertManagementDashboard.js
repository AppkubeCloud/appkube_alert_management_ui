import { Button, Row, Col, Card } from "antd";
import {UnorderedListOutlined, EllipsisOutlined, CaretUpOutlined, AlertOutlined} from "@ant-design/icons"
import React from "react";
import "./Style/Dashboard.css";

function AlertManagementDashboard(){
    return(
        <div className="dashboard-div">
            <div className="label-div">
                <label className="dashboard-label">MONITOR | OVERVIEW</label>
                <Button className="manage-workflow-btn">Manage Workflow <EllipsisOutlined /></Button>
                <Button className="label-btn" icon={<UnorderedListOutlined />}>Manage Alerts</Button>
                
            </div>
            <Row>
                <Col span={4}>
                    <Card  className="alert-card"
                        bordered={false}
                        >
                            <AlertOutlined  />
                            <label className="card-label">
                                Total Alerts <br/>
                                43,833 <CaretUpOutlined style={{color: "#00B929"}} />
                                10%
                            </label>
                    </Card>
                </Col>
                <Col span={4}>
                <Card  className="alert-card"
                        bordered={false}
                        >
                            <AlertOutlined  />
                            <label className="card-label">
                            Total Alert Rules <br/>
                                24 
                            </label>
                    </Card>
                </Col>
                <Col span={4}>
                <Card  className="alert-card"
                        bordered={false}
                        >
                            <AlertOutlined  />
                            <label className="card-label">
                                Workflows <br/>
                                64 
                            </label>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col span={9}>
                    <Card  className="alert-card"
                        bordered={false}
                        >
                            {/* <AlertOutlined  /> */}
                            <label>
                                Average wait time alert 
                                <p>A standard line chart provides a clear way to compare trends over time.</p>
                                                              
                            </label>
                    </Card>
                </Col>
                <Col span={9}>
                <Card  className="alert-card"
                        bordered={false}
                        >
                            <AlertOutlined  />
                            <label className="card-label">
                            Total Alert Rules <br/>
                                24 
                            </label>
                    </Card>
                </Col>
                <Col span={5}>
                <Card  className="alert-card"
                        bordered={false}
                        >
                            <AlertOutlined  />
                            <label className="card-label">
                                Workflows <br/>
                                64 
                            </label>
                    </Card>
                </Col>
            </Row>
        </div>
    )
};

export default AlertManagementDashboard;
