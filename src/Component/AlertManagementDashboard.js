import { Button, Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
import {UnorderedListOutlined, EllipsisOutlined, CaretUpOutlined, AlertOutlined} from "@ant-design/icons"
import React from "react";
import "./Style/Dashboard.css";

function AlertManagementDashboard(){
    return(
        <div className="dashboard-div">
            <div className="label-div">
                <label className="dashboard-label">MONITOR | OVERVIEW</label>
                <Button className="manage-workflow-btn" disabled> Manage Workflow <EllipsisOutlined /></Button>
                <Button className="label-btn" icon={<UnorderedListOutlined />} > Manage Alerts </Button>
                
            </div>
            <Row>
                <Col span={4}>
                { <Link to= "monitorallalerts">
                    <Card  className="dashboard-alert-card"
                        bordered={false}
                        >
                            <AlertOutlined  />
                            <label className="card-label">
                                All Alerts <br/>
                                43,833 <CaretUpOutlined style={{color: "#00B929"}} />
                                10%
                            </label>
                    </Card>
                    </Link>}
                </Col>
                <Col span={4}>
                {<Link to="alertsmanagement" relative="path">
                <Card  className="dashboard-alert-card"
                        bordered={false}
                        >
                            <AlertOutlined  />
                            <label className="card-label">
                            All Alert Rules <br/>
                                24 
                            </label>
                    </Card>
                    </Link>}
                </Col>
                <Col span={4}>
                <Card  className="dashboard-alert-card"
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
                    <Card  className="dash-avr-tm-crd"
                        bordered={false}
                        >
                            {/* <AlertOutlined  /> */}
                            <label className="dash-avr-tm-lbl">
                                Average wait time alert 
                                <p>A standard line chart provides a clear way to compare trends over time.</p>
                                                              
                            </label>
                    </Card>
                </Col>
                <Col span={9}>
                <Card  className="dash-avr-tm-crd"
                        bordered={false}
                        >
                            {/* <AlertOutlined  /> */}
                            <label className="dash-avr-tm-lbl">
                            Alert Volume Trends 
                               <p>A standard line chart provides a clear way to compare trends over time.</p>
                            </label>
                    </Card>
                </Col>
                <Col span={5}>
                <Card  className="dash-avr-tm-crd"
                        bordered={false}
                        >
                            {/* <AlertOutlined  /> */}
                            <label className="dash-team">
                               Team Matrics
                            </label>
                            <Row className="team-crd">
                                <Col >John</Col>
                                <Col style={{marginLeft:"50px", opacity:"0.6"}}>650</Col>
                                <Col style={{marginLeft:"40px"}}>15 min</Col>
                            </Row>
                            <Row className="team-crd-lbl">
                                <Col>John</Col>
                                <Col style={{marginLeft:"50px", opacity:"0.6"}}>650</Col>
                                <Col style={{marginLeft:"40px"}}>15 min</Col>
                            </Row>
                            <Row className="team-crd-lbl">
                                <Col>John</Col>
                                <Col style={{marginLeft:"50px", opacity:"0.6"}}>650</Col>
                                <Col style={{marginLeft:"40px"}}>15 min</Col>
                            </Row>
                            <Row className="team-crd-lbl">
                                <Col>John</Col>
                                <Col style={{marginLeft:"50px", opacity:"0.6"}}>650</Col>
                                <Col style={{marginLeft:"40px"}}>15 min</Col>
                            </Row>
                            <Row className="team-crd-lbl">
                                <Col>John</Col>
                                <Col style={{marginLeft:"50px", opacity:"0.6"}}>650</Col>
                                <Col style={{marginLeft:"40px"}}>15 min</Col>
                            </Row>
                            <Row className="team-crd-lbl">
                                <Col>John</Col>
                                <Col style={{marginLeft:"50px", opacity:"0.6"}}>650</Col>
                                <Col style={{marginLeft:"40px"}}>15 min</Col>
                            </Row>
                            <Row className="team-crd-lbl">
                                <Col>John</Col>
                                <Col style={{marginLeft:"50px", opacity:"0.6"}}>650</Col>
                                <Col style={{marginLeft:"40px"}}>15 min</Col>
                            </Row>
                            <Row className="team-crd-lbl">
                                <Col>John</Col>
                                <Col style={{marginLeft:"50px", opacity:"0.6"}}>650</Col>
                                <Col style={{marginLeft:"40px"}}>15 min</Col>
                            </Row>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col span={5}>
                    <Card  className="dash-avr-tm-crd"
                        bordered={false}
                        >
                            {/* <AlertOutlined  /> */}
                            <label className="dash-team">
                               Top Alerts Today
                            </label>
                    </Card>
                </Col>
                <Col span={9}>
                <Card  className="dash-avr-tm-crd"
                        bordered={false}
                        >
                            {/* <AlertOutlined  /> */}
                            <label className="dash-avr-tm-lbl">
                            Alert Volume By Trends
                            <p>A standard line chart provides a clear way to compare trends over time.</p>
                            </label>
                    </Card>
                </Col>
                <Col span={9}>
                <Card  className="dash-avr-tm-crd"
                        bordered={false}
                        >
                            {/* <AlertOutlined  /> */}
                            <label className="dash-avr-tm-lbl">
                                Average Response Time Alert
                                <p>A standard line chart provides a clear way to compare trends over time.</p>
                            </label>
                    </Card>
                </Col>
            </Row>
        </div>
    )
};

export default AlertManagementDashboard;
