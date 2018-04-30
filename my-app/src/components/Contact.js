import React, { Component } from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
 
class Contact extends React.Component {
  render() {
    return (
        <Container>
            <Row>
                <Col className="col-md .col-md-offset-1">
                    <h4 className="text-center mb-5">Leave a comment</h4>
                    <Form>
                        <FormGroup row>
                            <Label for="name" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="name" id="name" placeholder="Write your name here..." />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="email" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" id="email" placeholder="Write your email here..." />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="comment-text" sm={2}>Comment</Label>
                            <Col sm={10}>
                                <Input type="textarea" name="comment-text" id="comment-text" placeholder="Leave your comment here..." />
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button className="form-submit-btn mt-4">Submit</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
                <Col className="col-md .col-md-offset-1">
                    <h4 className="text-center">Comments</h4>

                </Col>
            </Row>
        </Container>
    );
  }
}
 
export default Contact;