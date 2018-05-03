import React, { Component } from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import * as mysql from 'mysql';
 
class Comments extends React.Component {
    render() {
        return (
            <div className="col-md .col-md-offset-1 mt-5">
                <h4>Comments</h4>
                <div className="a-comment mt-2 mb-2">
                    <h6 className="pt-2 pr-2 pb-2 pl-3">Name: </h6>
                    <p className="pr-2 pb-2 pl-3">Comment text...</p>
                </div>
            </div>
        );
    }
}
 
export default Comments;