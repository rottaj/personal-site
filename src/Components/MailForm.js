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
    console.log('else')
    io = socketIO('localhost:8080')
}


export default class MailForm extends React.Component {


    styles = {
        mainDiv: {
            'text-align': 'center'
        },
        area: {
            width: '100px',
            height: '100px'
        },
        text: {
            'font-size': '25px'
        }
    }

    sendState = (e) => {

        if(localStorage.userID === null || localStorage.userID === undefined) {
            console.log('swag')
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
            <Form style={this.styles.mainDiv} onSubmit={e => this.sendState(e)}>
                <Form.Field>
                    <label style={this.styles.text}>First Name:</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label style={this.styles.text}>Last Name:</label>
                    <input placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                    <label style={this.styles.text}>Email:</label>
                    <input placeholder='swagonrepeat@swag.swag' />
                </Form.Field>
                <Form.Field>
                    <label style={this.styles.text}>Subject:</label>
                    <input placeholder='contacting the sauce boss'/>
                </Form.Field>
                <Form.Field>
                    <label style={this.styles.text}>Message:</label>
                    <textarea placeholder='hallo'></textarea>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}
