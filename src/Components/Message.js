import React from 'react'
const Message = (props) => (
        <div>
            {console.log(props.messages)}   
            {props.messages.map(msg => <p>{msg.msg_res}</p>)}
        </div>

)

export default Message