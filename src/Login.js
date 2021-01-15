/*https://www.youtube.com/watch?v=qxh2c3aIKq4&list=PL8p2I9GklV44oDSE3j-E-OkvxFkz5a1d8&index=51           React js project in Hindi #11 login with mock api*/
/*react js project in Hindi with login and registration */
import { faHockeyPuck } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    login() {
        var name = this.state.name;
        var password = this.state.password;
        name = "myuser"
        password = "mypass"
        console.warn(this.state)
        fetch('http://localhost:8000/auth/login', {
            method: "POST",
            headers: {
                "Accept": "Application/json",
                "Content-Type": "Application/json",
               
            },


            body: JSON.stringify(this.state)
        }
        ).then((result) => {
            result.json().then((resp) => {
                //console.warn("token resp is" ,resp.success.token)
              console.log("token is", resp.access_token)

                if (resp.email) {
                    console.log('enter name')

                }
                if (resp.email) {
                    console.warn('email got')
                }
                console.warn("token resp hai", resp)
                if(resp.access_token){
                console.warn(this.props.history.push('list'))
                localStorage.setItem("login",JSON.stringify(resp.access_token))//resp.success.token
            }
                 
                
            })
        });
    }
    register() {
        var name = this.state.name;
        var password = this.state.password;
        console.warn(this.state)
        fetch('http://localhost:8000/register', {
            method: "POST",
            headers: {
                "Accept": "Application/json",
                "Content-Type": "Application/json",

            },


            body: JSON.stringify(this.state)
        }
        ).then((result) => {
            result.json().then((resp) => {
                //console.warn("token resp is" ,resp.success.token)
                console.log("token is", resp.success.token)

                if (!resp.name) {
                    console.log('Invalid name')

                }
                console.warn("token resp hai", resp)
                console.warn(this.props.history.push('list'))
                //  localStorage.setItem("login",JSON.stringify(resp.success.token))
            })
        });
    }





    render() {
        return (
            <div>
                <input type="text" placeholder="enter name" name="user" onChange={(event) => this.setState({ email: event.target.value })} /><br /><br />
                <input type="password" placeholder="enter password" name="password" onChange={(event) => this.setState({ password: event.target.value })} /><br /><br />

                <button onClick={() => { this.login() }}>Login</button>
                <button onClick={() => { this.register() }}>Register</button>
            </div>
        );
    }
}

export default Login;



