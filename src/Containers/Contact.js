import React from 'react'
import Navbar from '../Components/Navbar'
import MailForm from '../Components/MailForm'
import MessageContainer from './MessageContainer'
import MessageForm from '../Components/MessageForm'
//import socketIO from 'socket.io-client'
//const io = socketIO('localhost:3000/')

export default class Contact extends React.Component {

    render () {
        //this.sendSession()
        return (
            <div>
                <Navbar/>
                <MailForm/>
                <MessageForm/>
            </div>
        )
    }
}