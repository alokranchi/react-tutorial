import React, { Component } from 'react';

class RestaurantCreate extends Component {
    constructor() {

        super();
        this.state = {
            name: null,
            email: null,
            address: null,
            rating: null
        }
    }
    create() {
        //console.warn(this.state)
        fetch('http://localhost:3000/restaurant',{
            method:"Post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)

        }).then((result)=>{
            result.json().then((resp)=>{
                alert("New restro created")
            console.warn(resp)
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Restaurant Create</h1>
                <div>

                    <input onChange={(Event) => { this.setState({ name: Event.target.value }) }}
                        placeholder="Add Restaurant Name" /><br /><br />
                    <input onChange={(Event) => { this.setState({ email: Event.target.value }) }}
                        placeholder="Email" /><br /><br />
                    <input onChange={(Event) => { this.setState({ addres: Event.target.value }) }}
                        placeholder="Address" /><br /><br />
                    <input onChange={(Event) => { this.setState({ rating: Event.target.value }) }}
                        placeholder="Raiting" /><br /><br />

                    <button onClick={() => { this.create() }}> Add new Restraurant</button>
                </div>
            </div>
        );
    }
}

export default RestaurantCreate;
