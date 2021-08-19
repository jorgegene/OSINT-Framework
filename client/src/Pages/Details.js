import React, { Component } from 'react'
import CollapsibleTable from "../components/table"
import {useLocation} from "react-router-dom";

import  { Redirect } from 'react-router-dom'
import SearchField from 'react-search-field';
import { Form, Button, Container } from 'react-bootstrap'
const axios = require('axios')

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            query: props.location.state.query
        };

        console.log(props)
        this.loadData()
    }


    loadData  = () => {
        //let data = useLocation();
        //console.log(data); //state would be in data.state//    }

        axios.post('http://localhost:8000/api/v1/search/',{
            query: this.state.query,
        }).then(function (res){
            console.log(res)
            this.setState({data: {}})
            console.log(this.state)

                      
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


                    <div>
                        <h3>Query: {this.state.query}</h3>
                    </div>
                    
                    </div>



                </Container>

            </div>
        )
    }
}