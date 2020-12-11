
import { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import {Nav,NavDropdown,Form,FormControl,Alert,Col,Row,Container,Jumbotron,Navbar} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';


const table = [1, 2, 3, 4]

class App extends Component {
  render() {
    return (
      <Jumbotron>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        <Alert variant='primary'> test</Alert>
        <Container>
          <Row>
            <Col md>
              <Alert variant='primary'> <Button>true </Button>
              <Button>true </Button>
              <Button>true </Button>test</Alert>
            </Col>
            <Col md>
              <Alert className variant='secondary'> test</Alert>
              <Alert variant='secondary'> test</Alert>
              <Alert variant='secondary'><Alert variant='primary'> test</Alert> test</Alert>
              <Alert variant='secondary'> test</Alert>
            </Col>
            <Col md>
              <Alert variant='success'> test</Alert>
            </Col>
            <Col md>
              <Alert variant='danger'> test</Alert>
            </Col>
          </Row>








        </Container>
      </Jumbotron>
    );
  }
}

export default App;
