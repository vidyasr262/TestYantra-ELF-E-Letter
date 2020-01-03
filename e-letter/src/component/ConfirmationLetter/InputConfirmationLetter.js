import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import moment from 'moment'

export class InputConfirmationLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            employeeId: '',
            designation: '',
            joiningDate: '',
            probationEndDate: '',
            date: '',
            withWaterMark:false,
            withHeader:false,
            //validation variable

            showEmployeeName: '',
            showEmployeeId: '',
            showDesignation: '',
            showJoiningDate: '',
            showProbationEndDate: '',
            showInvalidDate:''

        }
    }

    componentDidMount() {

        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];


        const nth = (d) => {
            if (d > 3 && d < 21) return 'th';
            switch (d % 10) {
                case 1: return "st";
                case 2: return "nd";
                case 3: return "rd";
                default: return "th";
            }
        }

        let today = new Date();
        let currentdate = today.getDate() + nth(today.getDate()) + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
        this.setState({
            date: currentdate
        })

        var that = this;
        $(document).ready(function () {
            $('#generate').click(function (e) {
                let joiningDate = (document.getElementById("joiningDate").value).trim();
                let designation = (document.getElementById("designation").value).trim();
                let employeeId = (document.getElementById("employeeId").value).trim();
                let employeeName = (document.getElementById("employeeName").value).trim();
               // let ProbationEndDate = (document.getElementById("probationEndDate").value).trim()

                 that.setState({
                      probationEndDate:joiningDate
                 })

                console.log('probation date ===',that.state.probationEndDate)

                console.log("Inside Validation", joiningDate, employeeName, designation, employeeId);

                if (joiningDate === "") {
                    that.setState({ showJoiningDate: true })
                }

                /* if (ProbationEndDate === "") {
                    that.setState({ showProbationEndDate: true })
                } */
                if (designation === "") {
                    that.setState({ showDesignation: true })
                }
                if (employeeId === "") {
                    that.setState({ showEmployeeId: true })
                }

                if (employeeName === "") {
                    that.setState({ showEmployeeName: true })
                }

               /*  if(selectedProbationEndDate<selectedJoiningDate){
                    that.setState({
                        showInvalidDate:"true"
                    })

                   return false;
              }      
 */
                if (joiningDate != "" && designation != "" && employeeId != "" && employeeName !== "") {
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
        this.props.history.push('/confirmationLetter')

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


    hideEmployeeName = () => {
        this.setState({
            showEmployeeName: false
        })
    }
    hideEmployeeId = () => {
        this.setState({
            showEmployeeId: false
        })
    }
    hideJoiningDate = () => {
        this.setState({
            showJoiningDate: false
        })
    }
    hideDesignation = () => {
        this.setState({
            showDesignation: false
        })
    }

    hideProbationEndDate = () => {
        this.setState({
            showProbationEndDate: false
        })
    }

    hideInvalidDate = () => {
        this.setState({
            showInvalidDate: false
        })
    }


     //edit
setValue=(data)=>{
    console.log("data is ",data)
this.setState({
    salute: data.salute,
    employeeName: data.employeeName,
    employeeId:data.employeeId,
    designation: data.designation,
    joiningDate: data.joiningDate
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
                                        <h3 className="text-center black-text font-bold ">Confirmation Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" value={this.state.employeeName} onKeyPress={this.hideEmployeeName} label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName" onChange={(event) => {
                                                        this.setState({
                                                            employeeName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" value={this.state.employeeId} onKeyPress={this.hideEmployeeId} label="Employee Id" className="w-100" name="employeeId" title="Employe Id" id="employeeId" onChange={(event) => {
                                                        this.setState({
                                                            employeeId: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-6 p-0" >
                                                    {this.state.showEmployeeName ? <div id="errordiv" className="container-fluid">Please fill out Name field * </div> : null}
                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showEmployeeId ? <div id="errordiv" className="container-fluid">Please fill out ID field * </div> : null}
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <MDBInput autocomplete="off" value={this.state.joiningDate} onKeyPress={this.hideJoiningDate} onClick={this.hideJoiningDate} type="date" label="Joined Date" title="Joining Date" name="joiningDate" id="joiningDate" onChange={(event) => {
                                                        this.setState({
                                                            joiningDate: event.target.value
                                                        }); this.hideJoiningDate();
                                                    }} />
                                                </div>
                                               
                                            </div>
                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-6 p-0" >
                                                    {this.state.showJoiningDate ? <div id="errordiv" className="container-fluid">Please fill out JoiningDate field * </div> : null}


                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                  {/*   {this.state.showProbationEndDate ? <div id="errordiv" className="container-fluid">Please fill out ProbationEndDate field * </div> : null}
                                                    {this.state.showInvalidDate ? <div id="errordiv" className="container-fluid">ProbationEndDate equal or greater than Today's date * </div> : null} */}
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-12">
                                                    <MDBInput autocomplete="off" value={this.state.designation} onKeyPress={this.hideDesignation} label="Designation" type="text" name="designation" id="designation" title="designation" onChange={(event) => {
                                                        this.setState({
                                                            designation: event.target.value
                                                        })
                                                    }} />
                     
                                                </div>


                                            </div>
                                            {this.state.showDesignation ? <div id="errordiv" className="container-fluid p-0">Please fill out Designation field * </div> : null}

                                            {/* <div className="row">
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
  <input type="checkbox" value={this.state.withWaterMark} className="custom-control-input" id="withWatermark"  onChange={(event) => {
                                                          this.onCheckHandler(event)
                                                    }} />
  <label style={{whiteSpace: 'nowrap'}} className="custom-control-label" htmlFor="withWatermark">With WaterMark</label>
</div>

                                                    </div>
                                            </div> */}


                                            <div className=" input-group w-50 container-fluid">
                                                <MDBBtn outline id="generate" type="submit" className=" form-control-plaintext  justify-content-center text-center" color="primary">Generate</MDBBtn>
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
export default withRouter(InputConfirmationLetter)
