import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import socketIO from 'socket.io-client'

let io;
if(localStorage.getItem('userID')){
    console.log(localStorage.getItem('userID'))
    io = socketIO('localhost:8080', {
        transportOptions: {
            polling: {
            extraHeaders: {
                'Authorization': `Bearer ${localStorage.getItem('userID')}`
            }
            }
        }
    })
} else {
    io = socketIO('localhost:8080')
}


export default class MailForm extends React.Component {


    sendState = (e) => {

        if(localStorage.userID === null || localStorage.userID === undefined) {
            io.emit('session.new', {userContent: {
                first_name: e.target[0].value,
                last_name: e.target[1].value,
                email: e.target[2].value,
                subject: e.target[3].value,
                message: e.target[4].value
            }}, response => {
                console.log(`users id: ${response}`)
                io = socketIO('localhost:8080', {
                    transportOptions: {
                        polling: {
                        extraHeaders: {
                            'Authorization': `Bearer ${response}`
                        }
                        }
                    }
                })
                localStorage.setItem('userID', response)
            })
        } else {
            return null
        }
    }


    render() {
        return (
            <Form onSubmit={e => this.sendState(e)}>
                <Form.Field>
                    <label>First Name:</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name:</label>
                    <input placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                    <label>Email:</label>
                    <input placeholder='swagonrepeat@swag.swag' />
                </Form.Field>
                <Form.Field>
                    <label>Subject:</label>
                    <input placeholder='contacting the sauce boss'/>
                </Form.Field>
                <Form.Field>
                    <label>Message:</label>
                    <textarea placeholder='hallo'></textarea>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}
