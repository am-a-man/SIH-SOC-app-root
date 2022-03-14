import react from 'react';
import axios from 'axios';
import './auth.css';

class Auth extends react.Component {
    constructor() {
        super();
        this.state={
            username:"",
            email:"",
            firstname: "",
            lastname: "",
            machash: "",
            loginemail: "",
            UID: ""

        }
        this.changeHandler = this.changeHandler.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    handleLogin = async(e)=>{
        e.preventDefault();
        const data = {
            email: this.state.email,
            UID: this.state.UID
        }
        await axios.post(`http://127.0.0.1:5000/auth/login`, data).then((res)=>{
            if(res.status==="OK"){
                this.setState({message:"Cannot find user"});
            } else {
                this.setState({message:"Logging In..."});
                this.props.authenticate(res.data)
                // Send res.data as props to chat components
            }
        });
    }
    handleRegister = async(e)=>{
        e.preventDefault();
        if(this.state.rpassword !== this.state.rcpassword){
            this.setState({message:"The passwords do not match"});
        }
        const data = {
            username  : this.state.rusername,
            firstname : this.state.rfirstname,
            lastname  : this.state.rlastname,
            email     : this.state.remail,
            UID       : this.state.machash
        }
        await axios.post(`http://127.0.0.1:5000/auth/signup`, data).then((res)=>{
            if(res.data === "Success"){
                this.setState({message:"User successfully registered"});
            }
            this.setState({
                username: "",
                firstname: "",
                lastname: "",
                email: ""
            });
        });
    }
    render(){
        return (<div className='authscreen'>
            <div className='loginscreen loginarea1'>
                <center>
                    <br/><label className='loginlabel'>Email</label>
                    <br/><input type="text" className='logininput' name="email" onChange={this.changeHandler} value={this.state.email}/>
                    <br/><label className='loginlabel'>UID</label>
                    <br/><input type="text" className='logininput' name="UID" onChange={this.changeHandler} value={this.state.UID}/>
                    <br/><button type="submit" onClick={this.handleLogin} className="loginbtn">Login</button><br/>
                </center>
            </div>
        </div>);
    }
}

export default Auth;