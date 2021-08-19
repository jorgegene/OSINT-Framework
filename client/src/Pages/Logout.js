import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
const axios = require('axios')


export default class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.props.isAuthed(false)
    }


    render() {
        return (
            <Container style={{ marginTop: '150px' }}>
                <div>Logged out</div>
            </Container>
        )
    }
}