import React, { Component } from 'react';
import axios from 'axios';
import './chat.css';

const ip = "192.168.2.96";
class Chat extends Component {
    constructor() {
        super()
        this.changehandler = this.changeHandler.bind(this);
        this.sendhandler = this.sendHandler.bind(this);
        this.refreshHandler = this.refreshHandler.bind(this);
        this.checkNewMessages = this.checkNewMessages.bind(this);
    }
    state = { 
        message: "",
        roomID: "100acffc-286d-4203-a8aa-80c76481102f",
        email: "",
        messages:[
            {email:"abc", message: "abcdef",nsfw: true},
            {email:"def", message: "defghi",nsfw: false}
        ]
     } 
     componentDidMount(){
        //axios.post(`http://127.0.0.1:5000/rooms/newroom`, {  })
        //.then(res => {
        //  this.setState({roomID: res.data.roomID})
        //  console.log(res.data);
        //})
       this.checkNewMessages();       
       setInterval(()=>{
           this.checkNewMessages();
       }, 1000);
     }
     changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    checkNewMessages(){
        this.refreshHandler()
    }
    sendHandler=async(e)=>{
        e.preventDefault();
        console.log("sent")
        await axios.post(`http://${ip}:5000/rooms/message`, { 
            roomID: this.state.roomID,
            email: this.state.email,
            message: this.state.message })
        .then(res => {
          console.log(res.data);
          this.setState({message: ""})
        })
    }
    refreshHandler=async(e)=>{
        if(e){
            e.preventDefault();
        }
        console.log("res");
        await axios.post(`http://${ip}:5000/rooms/getMessages`, { 
            roomID: this.state.roomID})
        .then(res => {
            console.log(res)
            console.log(this.state.messages)
          this.setState({messages: res.data.messagedata})
        })
    }
    render() { 
        return (<div className='chat'>
            <div className='navbar'><center>Chat app</center></div>
            <div className='chatarea'>
                {(this.state.messages===undefined)?null:this.state.messages.map((e)=>{
                    return(<div className={`indmessage ${this.state.email === e.email?`mymessage`:`notmymessage`}`}>{e.email} : {e.message} </div>)
                })}
            </div>
                <div className='data'><label className="label">Email :</label><input type="text" name="email" class="emailbox" value={this.state.email} onChange={this.changeHandler}/>     </div>
                <div className='data'><label className="label">Room ID :</label><input type="text" name="roomID" class="emailbox" value={this.state.roomID} onChange={this.changeHandler}/></div>

                <div className='chatsender'>
                <input type="text" name="message" className="messageboxinner" value={this.state.message} onChange={this.changeHandler}/>
                <button type="submit" name="send" className="sendbutton" onClick={this.sendHandler}>SEND</button>

            </div>
        </div>);
    }
}
 
export default Chat;
