import { Component } from 'react'
import axios from 'axios'

export default class UserInput extends Component {

    state = {
        email: 'Jon@snow.com',
        name: 'jon',
        password: 'ice'
    };

    handleChange = event => {
        this.setState({
            name: event.target.value,
            email: event.target.email,
            password: event.target.password
        })

    }
    handleSubmit = e => {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password

        }
        axios.post(`http://localhost:8080/user`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                    <input type='text' name='name' onChange={this.handleChange}></input>
                </label>
                <label>Password
                    <input type='password' name='npassword' onChange={this.handleChange}></input>
                </label>
                <label>Email
                    <input type='text' name='email' onChange={this.handleChange}></input>
                </label>
                <button type='submit'>add</button>
            </form>
        )
    }
}