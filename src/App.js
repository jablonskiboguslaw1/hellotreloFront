import './App.css';
import Board from './Board'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './Components/UserList';
import UserInput from './Components/UserInput';

function App () {
  
    return (<div>
      <Board/>
      <UserList/>
      <UserInput/></div>);
    
}

export default App;
