//const express = require('express');
//const http = require('http');
const socketIO = require("socket.io");
const cors = require('cors');
const User = require('./src/models/User')
const Message = require('./src/models/Message')
const jwt = require('jsonwebtoken')

//const app = express();

const accountSid = 'ACffceed6a17f22a3e5cf34f8e171d6205';
const authToken = '7cfe81fe74440e8eaa050d955a163ae9';    // dont keep these variables dumbass
const client = require('twilio')(accountSid, authToken)

sendSmS = (msg, user) => {
    client.messages
    .create({
    body: `New message from ${user}: ${msg}`,
    from: '+18622597556',
    to: '9736687495'
    })
    .then(message => console.log(message.sid));
} // dont enable if you dont wanna be charged scrub

const io = socketIO(8080, {
    handlePreflightRequest: function (req, res) {
      var headers = {
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': true
      };
      res.writeHead(200, headers);
      res.end();
    }
  })

  io.on('connection', async socket => {
    console.log(socket.handshake.headers.authorization)
    if(socket.handshake.headers.authorization){
        let [ type, token ] = socket.handshake.headers.authorization.split(' ')
        let result = jwt.decode(token)
        this.userId = result.id
        console.log(`Token decoded to id: ${this.userId}`)
        //socket.emit('get.messages', {messages: 'test'})
    } else {
        //console.log('failed socket connection')
        socket.on('message.new', (req, res)=>{
            //sendSmS(req.messageContent.message, this.userId) // don't fuck with this if your not tryna get charged
            Message.create({message: req.messageContent.message, userID: this.userId, isJack: 'false'})
                .then( msg => {
                    console.log('message contents: ')
                    console.log(`new Message: ${msg.message} `)
                    console.log(`message uid: ${msg.userID}`)
                    console.log(`is Jack? : ${msg.isJack}`)
                    res({message: msg.message, id: msg.userID, isJack: msg.isJack})
                })
        })
        console.log(this.userId)
        socket.emit('get.messages', {messageHistory: await Message.findAll({where: {userID: this.userId}})})
        
    }
        socket.on('session.new', (req, res) => {
            console.log(req)
            // don't fuck with this if your not tryna get charged
            //sendSmS(req.userContent.message, `${req.userContent.first_name} ${req.userContent.last_name} (${this.userId})`)
            User.create({first_name: req.userContent.first_name, last_name: req.userContent.last_name, email: req.userContent.email, subject: req.userContent.subject, message: req.userContent.message})
                .then( user => {
                    console.log(`user saved to db: ${user}`)
                    console.log(`user id: ${user.id}`)
                    console.log(`user email: ${user.email}`)
                    res(user.token)
                })
        })
})

/*
app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
  
    twiml.message('The Robots are coming! Head for the hills!');
  
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
  });
  
  http.createServer(app).listen(1337, () => {
    console.log('Express server listening on port 1337');
  });
*/