import React, { Component } from 'react';
import { Table } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import {
    Link
} from 'react-router-dom'
class Restaurantlist extends Component {
    constructor() {

        super();
        this.state = {
            list: null,
            id: null
        }

    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        fetch("http://localhost:3000/restaurant").then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({ list: result })
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
                    this.getData()
                    console.warn(resp)
                })
            })
    }
    render() {
        //console.warn(this.state)

        return (
            <div>
                <h1>Restaurant List</h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th># </th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Rating</th>
                                        <th>Operations</th>
                                    </tr>
                                </thead>
                                <tbody>


                                    {
                                        this.state.list.map((item, i) =>
                                            // <div className="list-wrapper">
                                            //     {/*  Hello Alok following are list of restaurant /> */}



                                            //     <span> {item.name}</span>
                                            //     <span> {item.email}</span>
                                            //     <span> {item.address}</span>
                                            //     <span> {item.rating}</span>


                                            // </div>
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

                        : <p>please wait for some time</p>
                }
            </div>

        );
    }
}

export default Restaurantlist;
