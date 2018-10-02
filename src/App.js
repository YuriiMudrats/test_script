import React, { Component } from 'react';
import NotAuth from './401NotAuthorized';
import PNF from './404PageNotFound'
import ISE from './500IntervalServerError'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      email:'',
      mobile:'',
      error: {}
    }
  }
  validEmail=()=>{
   const error={}
   console.log('mobile')
    const re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!this.state.email.match(re)){
      console.log('mobile')
      error.email='You have wrong number'
    }
    this.setState({error:error})
    return error
  }
  validMobPhone=()=>{
    const error={}
    console.log(/\d{2}/.test(this.state.mobile))
    if(!this.state.mobile.match(/\d{2}/)){
      console.log('email')
       error.mobile="Wrong email"
    }
    this.setState({error:error})
    return error
  }

  onChange=(e)=>{
       const {target}=e
       
      this.setState({[target.name]:target.value})
  }
  render() {
    const {email, mobile, error}= this.state
    return (
      // <div className="App">
      //  <div className='input-container'>
       
      //  <div>
      //  <label>Email :<input onBlur={this.validEmail} name='email' type='text' value={email} placeholder='pls send email' onChange={(e)=>this.onChange(e)}/></label>
      //  {error&&error.email? <p>You have wrong number</p>:null}
      //  </div>
      //  <div>
      //  <label>Mobile phone :<input onBlur={this.validMobPhone} name='mobile' type='text' value={mobile} placeholder='pls send mobile phone' onChange={(e)=>this.onChange(e)}/></label>
      //  {error&&error.mobile? <p>You have wrong email</p>:null}
      //  </div>
      //  </div>
      // </div>
      <div>
        <ISE/>
      </div>  
    );
  }
}

export default App;
