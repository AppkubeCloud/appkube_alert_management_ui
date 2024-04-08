import React from "react";
import {Form, Input} from "antd";

function Post (){
    return(
        <div>
            <p>Parameters For This Alert Handler</p>
            <Form>
                <label>HTTP endpoint for POST request</label>
                <Input placeholder="Placeholder"/>
                <div style={{display:"flex", width:"50%"}}>
                <label>Header Key</label>
                <Input placeholder="Placeholder"/>
                <label>Header value</label>
                <Input placeholder="Placeholder"/>
                </div>
            </Form>
        </div>
    )
};
export default Post;