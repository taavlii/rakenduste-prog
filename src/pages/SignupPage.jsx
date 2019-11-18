import React from "react";
import "./form.css";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

class SignupPage extends React.PureComponent {

    static propTypes={
        history:PropTypes.object.isRequired,
    };

    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
        };
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        console.log("submit",this.state);
        fetch("/api/v1/auth/signup", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(this.state),
        })
        .then(res=>res.json())
        .then(()=>{
            this.props.history.push("/login");
        })
        .catch(err=>{
            console.log("error", err);
        });
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    render(){
        return (
            <>
            <div><h1>Register</h1></div>
            <div className="form">
                <form className="register-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="email address"
                        name={"email"}
                        onChange={this.handleChange} />
                    <input 
                        type="password" 
                        placeholder="password"
                        name={"password"}
                        onChange={this.handleChange} />
                    {/* <input 
                        type="password" 
                        placeholder="password"
                        name={"confirmPassword"}
                        onChange={this.handleChange} /> */}
                    
                    <button>create</button>
                    <p className="message">Already registered? <Link to={"/login"}>Sign In</Link></p>
                </form>
            </div>
            </>
        );
    }
}

export default SignupPage;