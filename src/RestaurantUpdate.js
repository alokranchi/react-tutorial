import React, { Component } from 'react';

class RestaurantUpdate extends Component {
    constructor() {

        super();
        this.state = {
            name: null,
            email: null,
            address: null,
            rating: null,
            id :null
        }
    }
    componentDidMount()
    {
      fetch('http://localhost:3000/restaurant/' + this.props.match.params.id).then((response) => {
        response.json().then((result) => {
            console.warn(result)
            //this.setState({ list: result })
            this.setState({ name:result.name ,
                id:result.id,
                email:result.email , 
                address:result.address,
                 rating:result.rating })
           
        })
    })
    
    }
    update()
    {
        fetch('http://localhost:3000/restaurant/' +this.state.id,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)

        }).then((result)=>{
            result.json().then((resp)=>{
                alert("New restro updated")
            console.warn(resp)
            })
        })
    }
    render() {
       // console.warn(this.props.match.params.id);
       console.warn(this.state);
        return (
            <div>
                    <h1>Restaurant Update</h1>
                    <div>

                    <input onChange={(Event) => { this.setState({ name: Event.target.value }) }}
                        placeholder="Add Restaurant Name" value={this.state.name}/><br /><br />
                    <input onChange={(Event) => { this.setState({ email: Event.target.value }) }}
                        placeholder="Email" value={this.state.email}/><br /><br />
                    <input onChange={(Event) => { this.setState({ address: Event.target.value }) }}
                        placeholder="Address" value={this.state.address} /><br /><br />
                    <input onChange={(Event) => { this.setState({ rating: Event.target.value }) }}
                        placeholder="Raiting" value={this.state.rating} /><br /><br />

                    <button onClick={() => { this.update() }}> Update Restraurant data</button>
                </div>
            </div>
        );
    }
}

export default RestaurantUpdate;
