import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import moment from 'moment';
export class InputDepuationLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            clientName: '',
            clientLocation: '',
            contactPerson: '',
            reportingDate: '',
            reportingTime: '',
            date: '',
            withWaterMark:false,
            withHeader:false,

            // validation variable
            showEmployeeName: '',
            showcontactPerson: '',
            showClientName: '',
            showClientLocation: '',
            showReportingDate: '',
            showReportingTime: '',
            showInvalidDate:''


        }
    }


    hideEmployeeName = () => {
        this.setState({
            showEmployeeName: false
        })
    }
    hideContactPerson = () => {
        this.setState({
            showcontactPerson: false
        })
    }
    hideClientName = () => {
        this.setState({
            showClientName: false
        })
    }
    hideClientLocation = () => {
        this.setState({
            showClientLocation: false
        })
    }
    hideReportingDate = () => {
        this.setState({
            showReportingDate: false
        })
    }
    hideReportingTime = () => {
        this.setState({
            showReportingTime: false
        })
    }

    hideInvalidDate = () => {
        this.setState({
            showInvalidDate: false
        })
    }



    componentDidMount() {

            const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];


      const nth = (d)=> {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
          case 1:  return "st";
          case 2:  return "nd";
          case 3:  return "rd";
          default: return "th";
        }
      }

        let today = new Date();
        let currentdate = today.getDate()+nth(today.getDate()) + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
        this.setState({
            date:  currentdate
        })

        var that = this;
        $(document).ready(function () {
            $('#generate').click(function (e) {
                let employeeName = (document.getElementById("employeeName").value).trim();
                let clientName = (document.getElementById("clientName").value).trim();
                let clientLocation = (document.getElementById("clientLocation").value).trim();
                let contactPerson = (document.getElementById("contactPerson").value).trim();
                let reportingDate = (document.getElementById("reportingDate").value)
                let reportingTime = (document.getElementById("reportingTime").value).trim();
                let selectedDate =new Date(reportingDate).setHours(23);
                let TodaysDate = new Date();
      
                 console.log("selected date =",selectedDate)
                 console.log("TodaysDate date =",TodaysDate)

                if (reportingTime === "") {
                    that.setState({ showReportingTime: true })
                }
                if (reportingDate === "") {
                    that.setState({ showReportingDate: true })
                }
                if (contactPerson === "") {
                    that.setState({ showcontactPerson: true })
                }

                if (clientLocation === "") {
                    that.setState({ showClientLocation: true })
                }
                if (clientName === "") {
                    that.setState({ showClientName: true })
                }
                if (employeeName === "") {
                    that.setState({ showEmployeeName: true })
                }

                console.log("dateeeeeeeeeeeee",)
                
                 let diff=selectedDate-TodaysDate
                 if(diff<0){
                    that.setState({
                        showInvalidDate:"true"
                    })

                   return false;
              }     

                if (reportingTime != "" && reportingDate != "" && contactPerson != "" && clientLocation !== "" && clientName != "" && employeeName != '') {
                    console.log("True return")
                    return true;

                }
                else {
                    return false;
                }
            });
        });
    }
    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)

        this.props.clicked(this.state)
        this.props.history.push('/DepuationLetter')
    }

    onCheckHandler=(event)=>{
        debugger;

         console.log("Checkbox value ==",event.target.value)
       if(event.target.value=='false'){
           this.setState({
               withWaterMark:true
           })
           console.log("if  ==",this.state.withWaterMark)
       }
       else{
           debugger;
           this.setState({
               withWaterMark: false
           })
           console.log("else  ==",this.state.withWaterMark)

       }
    }

    onChangeHeader=(event)=>{

        debugger;

        console.log("Checkbox value ==",event.target.value)
      if(event.target.value=='false'){
          this.setState({
              withHeader:true
          })
          console.log("if  ==",this.state.withHeader)
      }
      else{
          debugger;
          this.setState({
              withHeader: false
          })
          console.log("else  ==",this.state.withHeader)

      }


     }



      //edit
setValue=(data)=>{
    console.log("data is ",data)
this.setState({
    employeeName: data.employeeName,
    clientName:data.clientName,
    clientLocation: data.clientLocation,
    contactPerson: data.contactPerson,
    reportingDate: data.reportingDate,
    reportingTime: data.reportingTime,

})

}
//

    render() {
        if(this.props.getData!==''){
            this.setValue(this.props.getData)
        }
        return (
            <div>
                <Home buttonShow={false} />
                <div >
                    <div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-auto container mt-5 pb-5">
                                <div style={{ width: '500px' }} className="card m-auto shadow-lg mt-5">
                                    <div class="card-header" style={{ borderRadius: '0px !important', background: 'white' }} >
                                        <h3 className="text-center black-text font-bold ">Depuation Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>
                                            <div class="row">
                                                <div class="col-12">
                                                    <MDBInput autocomplete="off" value={this.state.employeeName} onKeyPress={this.hideEmployeeName} label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName" onChange={(event) => {
                                                        this.setState({
                                                            employeeName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            {this.state.showEmployeeName ? <div id="errordiv" className="container-fluid p-0">Please fill Employee Name field * </div> : null}
                                            <div class="row">
                                                <div class="col-12">
                                                    <MDBInput autocomplete="off" value={this.state.clientName} onKeyPress={this.hideClientName} type="text" label="Client Name" title="Client Name" name="clientName" id="clientName" onChange={(event) => {
                                                        this.setState({
                                                            clientName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            {this.state.showClientName ? <div id="errordiv" className="container-fluid p-0">Please fill Client Name field * </div> : null}
                                            <div className="row">
                                                <div class="col-6">
                                                    <MDBInput autocomplete="off" value={this.state.clientLocation} onKeyPress={this.hideClientLocation} type="text" label="Client Location" title="Client Name" name="clientLocation" id="clientLocation" onChange={(event) => {
                                                        this.setState({
                                                            clientLocation: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-6">
                                                    <MDBInput autocomplete="off" value={this.state.contactPerson} onKeyPress={this.hideContactPerson} type="text" label="Contact Person" title="Contact Person" name="contactPerson" id="contactPerson" onChange={(event) => {
                                                        this.setState({
                                                            contactPerson: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-6">
                                                    {this.state.showClientLocation ? <div id="errordiv" className="container-fluid p-0">Please fill out Client Location field * </div> : null}
                                                </div>
                                                <div className="col-6">
                                                    {this.state.showcontactPerson ? <div id="errordiv" className="container-fluid p-0">Please fill out Contact Person field * </div> : null}
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" value={this.state.reportingDate} onKeyPress={()=>{this.hideReportingDate();this.hideInvalidDate()}} onClick={()=>{this.hideReportingDate();this.hideInvalidDate()}} type="date" label="Reporting Date" title="Reporting Date" name="reportingDate" id="reportingDate" onChange={(event) => {
                                                        this.setState({
                                                            reportingDate: event.target.value
                                                        });this.hideReportingDate();this.hideInvalidDate();
                                                    }} />
                                                </div>
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" value={this.state.reportingTime} onKeyPress={this.hideReportingTime} onClick={this.hideReportingTime} type="time" label="Reporting Time" title="Reporting Time" name="reportingTime" id="reportingTime" onChange={(event) => {
                                                        this.setState({
                                                            reportingTime: event.target.value
                                                        });this.hideReportingTime();
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-6 p-0" >
                                                    {this.state.showReportingDate ? <div id="errordiv" className="container-fluid">Please fill out Reporting Date field * </div> : null}
                                                    {this.state.showInvalidDate ? <div id="errordiv" className="container-fluid">Reporting Date equal or greater than Today's date * </div> : null}

                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showReportingTime ? <div id="errordiv" className="container-fluid">Please fill out Reporting Time field * </div> : null}
                                                </div>
                                            </div>
                                           
                                           {/*  <div className="row">
                                                <div className="col-6">
                                                <div className="custom-control custom-checkbox custom-control-inline col-6">
  <input type="checkbox" value={this.state.withHeader} className="custom-control-input" onChange={(event) => {
                                                      this.onChangeHeader(event)
                                                    }} id="withLetterHead" />
  <label style={{whiteSpace: 'nowrap'}} className="custom-control-label" htmlFor="withLetterHead">With Letter Head</label>
</div>

                                                </div>
                                                <div className="col-6">
                                                <div className="custom-control custom-checkbox custom-control-inline col-6">
  <input type="checkbox" className="custom-control-input" value={this.state.withWaterMark} id="withWatermark"  onChange={(event) => {
                                                        this.onCheckHandler(event)
                                                    }} />
  <label style={{whiteSpace: 'nowrap'}} className="custom-control-label" htmlFor="withWatermark">With WaterMark</label>
</div>

                                                    </div>
                                            </div> */}
 

                                            <div className=" input-group w-50 container-fluid">
                                                <MDBBtn outline id='generate' type="submit" className=" form-control-plaintext  justify-content-center text-center" color="primary">Generate</MDBBtn>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(InputDepuationLetter)