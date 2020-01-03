
import React, { Component } from 'react';
import Home from './component/home';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import InputHRLetter from './component/HrLetter/InputHRLetter';
import Cards from './component/Cards';
import HRLetter from './component/HrLetter/HRLetter';
import Test from './component/IncrementLetter/test';
import InputConfirmationLetter from './component/ConfirmationLetter/InputConfirmationLetter';
import ConfirmationLetter from './component/ConfirmationLetter/ConfirmationLetter';
import InputCertificateLetter from './component/CertificateLetter/InputCertificateLetter';
import CertificateLetter from './component/CertificateLetter/CertificateLetter';
import InputDepuationLetter from './component/DepuationLetter/InputDepuationLetter';
import DepuationLetter from './component/DepuationLetter/DepuationLetter';
import InputIncrementLetter from './component/IncrementLetter/InputIncrementLetter';
import IncrementLetter from './component/IncrementLetter/IncrementLetter';
import InputDesignationLetter from './component/DesignationLetter/InputDesignationLetter';
import DesignationLetter from './component/DesignationLetter/DesignationLetter';
import InputOfferLetter from './component/OfferLetters/InputOfferLetter';
import OfferLetter from './component/OfferLetters/OfferLetter';
import InputRelivingLetter from './component/RelivingLetter/InputRelivingLetter';
import RelivingLetter from './component/RelivingLetter/RelivingLetter';
import InputExitLetter from './component/ExitLetter/InputExitLetter';
import ExitLetter from './component/ExitLetter/ExitLetter';
import Login from './component/Login/Login';
import { TrainingLetter } from './component/TrainingLetter/TrainingLetter';
import TrainingCommit from './component/TrainingCommit/TrainingCommit';
import { InputTrainingCommitLetter } from './component/TrainingCommit/InputTrainingCommit';
import { InputTrainingLetter } from './component/TrainingLetter/InputTrainingLetter';
import { InternshipLetter } from './component/InternshipLetter/InternshipLetter';
import { InputIntershipLetter } from './component/InternshipLetter/InputIntershipLetter';
import Dropdown from './component/dropdown';
import { InputOffer2Letter } from './component/Offer Letter2/InputOffer2';
import Offer2 from './component/Offer Letter2/OfferLetter2';
import Intent from './component/LetterOfIntent/Intent';
import InputIntentLetter from './component/LetterOfIntent/InputIntentLetter';
import Example from './component/Example';
import MailComponent from './component/Email/MailComponent';
import Form from './component/Form1';
import Form1 from './component/Form1';
import Temp from './component/HrLetter/Temp';
export class App extends Component{
  
         
          constructor(props){
            super(props);
            localStorage.setItem("checkHR",false)
            this.state={
              emp:'',
              show:'',
              emp:''
            }

          }

          employee = (data) => {
            console.log("==============",data)
            this.setState({
              emp :data
            })
          }

          showWatermark=(data)=>{
             
            this.setState({
              show:data
            },()=>{console.log("watermark",this.state.show)})
             
          }
        
          
//  emp=(data)=>{
//   console.log("==============",data)
//   this.setState({
//     emp :data
//   },()=>this.props.history.push("/TrainingCommit"))
  
// }

// emp2=(data)=>{
//   console.log("==============",data)
//   this.setState({
//     emp :data
//   },()=>this.props.history.push("/TrainingLetter"))
  
// }
 sendData(data){
  this.setState({
    emp:data
  },()=>{ setTimeout(this.setState({
    emp:''
  }), 100)
  })
 }

    render(){
  return (

    <div className="App">

      <Route exact path='/' component={Login}></Route>

      <Route exact path='/cards' component={Cards}></Route>
      <Route exact path='/drop' component={Dropdown}></Route>
     
      <Route exact path='/hr'  render={() => { return <InputHRLetter getData={this.state.emp} clicked={this.employee.bind()} empData={this.state.emp} /> }}></Route>
      <Route exact path='/hrLetter'  render={() => { return <HRLetter sendData={(data)=>this.sendData(data)} empData={this.state.emp} navBarData={this.state.show} /> }}></Route>

      <Route exact path='/inputConfirmation'  render={() => { return <InputConfirmationLetter clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/confirmationLetter'   render={() => { return <ConfirmationLetter empData={this.state.emp} /> }}></Route>

      <Route exact path='/InputcertificateLetter'  render={() => { return <InputCertificateLetter clicked={this.employee.bind()} /> }}></Route>
      <Route exact path='/certificateLetter' render={() => { return <CertificateLetter empData={this.state.emp} /> }}></Route>

      <Route exact path='/InputDepuationLetter'  render={() => { return <InputDepuationLetter clicked={this.employee.bind()} /> }}></Route>
      <Route exact path='/DepuationLetter'  render={() => { return <DepuationLetter empData={this.state.emp} /> }}></Route>

      <Route exact path='/InputDesignationLetter'  render={() => { return <InputDesignationLetter clicked={this.employee.bind()} /> }}></Route>
      <Route exact path='/DesignationLetter' render={() => { return <DesignationLetter empData={this.state.emp} /> }}></Route>

      <Route exact path='/InputIncrementLetter' render={() => { return <InputIncrementLetter clicked={this.employee.bind()} /> }}></Route>
      <Route exact path='/IncrementLetter'  render={() => { return <IncrementLetter empData={this.state.emp} /> }}></Route>

      <Route exact path='/InputOfferLetter'  render={() => { return <InputOfferLetter clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/OfferLetter' render={() => { return <OfferLetter empData={this.state.emp} /> }}></Route>
   
      <Route exact path='/InputRelivingLetter'  render={() => { return <InputRelivingLetter clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/RelivingLetter' render={() => { return <RelivingLetter empData={this.state.emp} /> }}></Route>

      <Route exact path='/InputTrainingCommitLetter' render={() => { return <InputTrainingCommitLetter history={this.props.history} clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/TrainingCommit'  render={() => { return <TrainingCommit history={this.props.history} empData={this.state.emp} /> }} ></Route>

   {/*  */}

      <Route exact path='/InputExitLetter' render={() => { return <InputExitLetter clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/ExitLetter'  render={() => { return <ExitLetter empData={this.state.emp} /> }} ></Route>

      <Route exact path='/InputInternship' render={() => { return <InputIntershipLetter  history={this.props.history} clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/IntershipLetter'  render={() => { return <InternshipLetter  history={this.props.history} empData={this.state.emp} /> }} ></Route>

      <Route exact path='/InputOfferLetter2' render={() => { return <InputOffer2Letter  history={this.props.history} clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/Offerletter2'  render={() => { return <Offer2  history={this.props.history} empData={this.state.emp} /> }} ></Route>

      <Route exact path='/InputIntentLetter' render={() => { return <InputIntentLetter  history={this.props.history} clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/IntentLetter'  render={() => { return <Intent  history={this.props.history} empData={this.state.emp} /> }} ></Route>

     <Route exact path='/withWaterMark' render={() => { return <Example  showWatermark={this.showWatermark.bind()} /> }} ></Route>
     
     
     <Route exact path='/form' component={Form1}></Route>

     <Route exact path='/email' component={MailComponent}></Route>

      <Route exact path='/test' component={Temp}></Route>

     
    </div>
  );
}
}

export default withRouter(App);
