
import { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import {Nav,NavDropdown,Form,FormControl,Alert,Col,Row,Container,Jumbotron,Navbar} from 'react-bootstrap'
import Board from './Board'
import 'bootstrap/dist/css/bootstrap.min.css';


const table = [1, 2, 3, 4]

class App extends Component {
  render() {
    return (
      <Board/>)
    }
}

export default App;
