import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SingUpPage.css'; // Optional: Create a CSS file for custom styling

function SingUpPage() {
  return (
    <Container className="login-container">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <div className="login-form">
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form>
              <Form.Group controlId="formUsername" className='mb-1'>
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Control type="password" placeholder="Password" className='mb-1' />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
              <Button variant="dark" type="submit" className="w-100 mt-3">
                Sign Up
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SingUpPage;
