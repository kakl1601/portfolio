import React, { Component } from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
 
class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          author: 'Your name',
          body: 'Your comment'
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
  
        this.setState({
            [name]: value
        });
          //console.log(target.value);
    }
    
    handleSubmit(event) {

        fetch('http://localhost:8080/api/comments')
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
        });


        fetch('http://localhost:8080/api/comments',
        {
            method: "POST",
            body: JSON.stringify({author: this.state.author, body: this.state.body})
        })
        .then(function(res){ 
            console.log(res);
        })
        .catch(function(res){ 
            console.log(res); 
        })
  
        alert('A message by: ' + this.state.author + ' has been posted and it contained: ' + this.state.body);
        event.preventDefault();

        console.log(this.state.author);

    }
    
    render() {
        return (
            <Form action="/comments" onSubmit={this.handleSubmit} method="post">
                <FormGroup row>
                    <Label for="author" sm={2}>Name</Label>
                    <Col sm={10}>
                        <Input name="author" id="author" type="text" value={this.state.value} onChange={this.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="body" sm={2}>Comment</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="body" id="body" value={this.state.value} onChange={this.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button type="submit" value="Submit" className="form-submit-btn mt-4">Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}
 
export default ContactForm;