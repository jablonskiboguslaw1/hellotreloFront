
import { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import {Nav,NavDropdown,Form,FormControl,Alert,Col,Row,Container,Jumbotron,Navbar} from 'react-bootstrap'
import Board from './Board'
import 'bootstrap/dist/css/bootstrap.min.css';

import UserList from './Components/UserList';
import UserInput from './Components/UserInput';
const table = [1, 2, 3, 4]

class App extends Component {
  render() {
    return (<div>
      <Board/>
      <UserList/>
      <UserInput/></div>)
    }
}

export default App;
