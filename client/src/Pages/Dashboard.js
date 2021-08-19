import React, { Component } from 'react'
import CollapsibleTable from "../components/table"

import  { Redirect } from 'react-router-dom'
import SearchField from 'react-search-field';
import { Form, Button, Container } from 'react-bootstrap'
const axios = require('axios')

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    onChange = (e) => {
        console.log(e)
        this.setState({ ["query"]: e })
    }
    handleSubmit(event){

        axios.post('http://localhost:8000/api/v1/search/',{
            query: this.state.query,
        }).then(function (res){
            console.log(res)
            //localStorage.setItem('token', res.data.access);
                      
        }).catch(function (err){
            console.log(err)
        })

    }
    render() {
        if(!localStorage.getItem('token')){
            return <Redirect to='login'/>
        }
        return (
            <div>
                <Container style={{ marginTop: '150px' }}>
                    <div>
                    {localStorage.getItem('user')}

                    </div>

                    <div>

                    <SearchField 
                        placeholder='Search item'
                        onChange={this.onChange}
                        onSearchClick={this.handleSubmit}

                    />

                    <div>
                        <h3>History</h3>
                        <CollapsibleTable/>
                    </div>
                    </div>



                </Container>

            </div>
        )
    }
}