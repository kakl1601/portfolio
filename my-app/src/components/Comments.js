import React, { Component } from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
//import * as mysql from 'mysql';
 
class Comments extends React.Component {
    render() {
        console.log(typeof(this.props.comment))

        return (
            <div className="col-md .col-md-offset-1 mt-5">
                <h4>Comments</h4>
                <div className="comment-box"><div className="comment-box-in">
                    {this.props.comment.length<1 ? <p>Be the first to comment!</p> :
                    this.props.comment.map((value) => {
                        return (
                            <div key={value.ID} className="a-comment mt-2 mb-2">
                            <h6 className="pt-2 pr-2 pb-1 pl-3">From: {value.name}</h6>
                            <p className="pr-2 pb-2 pl-3">{value.comments}</p>
                            </div>
                    
                    
                        );

                    }) 
        
                    }
                    </div>       
                </div>
            </div>
        );

} 
}
 
export default Comments;