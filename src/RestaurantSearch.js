import React, { Component } from 'react';
import { NavItem } from 'react-bootstrap';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';


import { Table,Form,Container } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import {
    Link
} from 'react-router-dom'

class RestaurantSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchData: null,

            noData: null,
            lastsearch:"",
        }

    }
    search(key) {
        console.warn(key)
        this.setState({lastsearch:key})
        fetch("http://localhost:3000/restaurant?q=" + key).then((data) => {
            data.json().then((resp) => {
                console.warn("resp value is", resp)

                if (resp.length > 0) {
                    this.setState({ searchData: resp, noData: false })
                }
                else {
                    this.setState({ noData: true, searchData: null })
                }

            })
        })
    }

    delete(id) {
        //alert("Deleted")
        fetch('http://localhost:3000/restaurant/' + id,
            {
                method: "DELETE",
                // headers:{
                //     'Content-Type':'application/json'
                // },


            }).then((result) => {
                result.json().then((resp) => {
                    alert("Restrorent is deleted alok")
                    this.search(this.state.lastsearch)
                   // this.getData()
                    console.warn(resp)
                })
            })
    }
    render() {
        return (
            <Container>
                <h1>Restaurant Search</h1>
                
                <Form.Control type="text" onChange={(Event) => this.search(Event.target.value)} placeholder="restro name please" />
                <div>

                    {
                        this.state.searchData ?
                            <div>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                            <th>Rating</th>
                                            <th>Operations</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.searchData.map((item) =>
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.address}</td>
                                                    <td>{item.rating}</td>
                                                    <td><Link to={"/update/" + item.id}>Update<FontAwesomeIcon icon={faEdit} color="orange" /></Link>
                                                        <span onClick={() => this.delete(item.id)} > Delete<FontAwesomeIcon icon={faTrashAlt} color="red" /></span></td>
                                                </tr>

                                            )
                                        }
                                    </tbody>
                                </Table>
                            </div>
                            : ""
                    }

                    {
                        this.state.noData ? <h3>No data found</h3> : null
                    }
                </div>

            </Container>
        );
    }
}

export default RestaurantSearch;
