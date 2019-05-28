import React from 'react'
import Message from '../Components/Message'
import MessageForm from '../Components/MessageForm'

export default class MessageContainer extends React.Component {


    render() {
        console.log(this.props)
        return (
            <div>
                {console.log(this.props.messages)}
                {this.props.messages.map(msg => <Message message={msg}/>)}

            </div>
        )
    }
}