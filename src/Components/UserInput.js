import { Component } from 'react'
import axios from 'axios'
import {Form,Button} from 'react-bootstrap'


export default class UserInput extends Component {

    state = {
        email: 'Jon@snow.com',
        name: 'jon',
        password: 'ice'
    };

createUser =(e) => {
    const user = {
        name: e.target.name.value,
        email: e.target.email.value,
         password: e.target.password.value,

    }
    return user


}
   
    handleSubmit = e => {

        e.preventDefault();
        console.log(e)
        


        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password

        }
        axios.post(`http://localhost:8080/user`, this.createUser(e))
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

            window.location.reload()
    };


    render() {
        return (
            
                
                <Form onSubmit={this.handleSubmit}> Input user
                    <Form.Group controlId='name'>
                        <Form.Label> Name: </Form.Label>
                        <Form.Control defaultValue='name'>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='email'>
                        <Form.Label> Name: </Form.Label>
                        <Form.Control defaultValue={this.state.email}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label> Name: </Form.Label>
                        <Form.Control  type = 'password' defaultValue={this.state.password}>
                        </Form.Control>
                    </Form.Group>
                    <Button type='submit'> Register</Button>
                </Form>
            
        )
    }
}