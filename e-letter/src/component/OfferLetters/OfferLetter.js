import React, { Component } from 'react'
import Home from '../home';
import moment from 'moment';
import '../CommonStyle.css'
import { withRouter } from 'react-router-dom';

export class OfferLetter extends Component {

    constructor(props) {
        super(props);
    
          
        this.state={
          employee:[ ]
       }
      }
    
       componentDidMount() {
    
            this.setState({
                employee: this.props.empData,
            })
    
        }

        nth = (d) => {
            if (d > 3 && d < 21)
              return 'th';
            switch (d % 10) {
              case 1: return "st";
              case 2: return "nd";
              case 3: return "rd";
              default: return "th";
            }
          }

    render() {
 
        let toDate=new Date()
        let toReportingDate=new Date(this.state.employee.reportingDate)


        if (this.props.empData == 0) {
            this.props.history.push("/cards")
        }
        if (this.props.empData) {
        return (
            <div>
                <Home buttonShow={true}/>
                <div className="card" id="pageA4">
                    <div className="card-body">
                    <div  className="waterMark">
                <span style={{color:'#263248',fontSize: '91px',
    fontFamily: 'sans-serif',position: 'absolute',opacity: '0.3',zIndex:'0'}}>TES<span style={{color: '#F8981C',fontSize: '91px',
    fontFamily: 'sans-serif'}}>TY</span>ANTRA</span>
                </div>
                        <div>
                            <p style={{ paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'left', paddingLeft: 30 }}><strong> {toDate.getDate()}<sup>{this.nth(toDate.getDate())}</sup>&nbsp;{moment(toDate).format('MMMM YYYY')}</strong></p>
                            <p style={{ paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'left', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'left', paddingLeft: 30 }}><strong>Dear  {this.state.employee.employeeName},</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>We are pleased to offer you an employment at Test Yantra Software Solutions (India) Pvt. Ltd. You have been offered as a <strong>{this.state.employee.designation}</strong> in our {this.state.employee.companyLocation} office. We extend this offer, and the opportunity it represents, with great confidence in your abilities.&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>Your Initial Posting will be at<strong> {this.state.employee.companyLocation}, India. </strong>However, your services are transferable to any other place or office of the Company or to any subsidiary or associate company; whether now existing or still to be formed. Such transfer / deputation will be in accordance with the company’s rules being in force at the time.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>You should complete and return the signed copy of your offer letter so that reference checks can be completed. Employment will be conditional on the receipt of references to the Company, prior to an agreed start date. A few original documents (or officially certified copies) must be mandatorily provided either before the commencement of employment, or no later than the morning of your first working day.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>Subject to the provisions contained in this offer, your services can be terminable by either party giving the other<strong> Three Months’ Notice. </strong>No notice of resignation will be effective if given during a period of leave of absence from the Company and you will also not be eligible to proceed on such leave during the notice period.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>However, for your income tax you shall be personally responsible for filing returns etc. The company will provide you the tax deductions certificate, if applicable at the end of each financial year.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>You will carry out all instructions of your superior(s) in the Company as regards your work, attendance, conduct, behavior, etc. and carry out diligently and honestly all duties that may be assigned to you by the Company from time to time notwithstanding the designation given above. Your days of work and working hours will be as per the working hours of the office in which you are for the time being posted and can be changed at the discretion of the management of the Company. Your individual remuneration is purely a matter between yourself and the company and has been arrived on the basis of your job, skills specific background and professional merit. We expect you to maintain this information and any changes made therein from time to time as personal and confidential.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>You shall, during your service with us, devote your whole time and attention to the Company’s business entrusted to you and you shall not engage yourself directly or indirectly in any business or service other than the Company’s business and service.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ paddingLeft: 30 }}>&nbsp;</p>
                        </div>
                    </div>
                </div>

                <div className="card" id="pageA4">
                    <div className="card-body">
                    <div  className="waterMark">
                <span style={{color:'#263248',fontSize: '91px',
    fontFamily: 'sans-serif',position: 'absolute',opacity: '0.3',zIndex:'0'}}>TES<span style={{color: '#F8981C',fontSize: '91px',
    fontFamily: 'sans-serif',fontWeight: "600"}}>TY</span>ANTRA</span>
                </div>
                        <div>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>Information pertaining to the Company’s operations shall remain secret and safeguarded by you. On joining the Company, a formal agreement to effect non-disclosure of confidential information and intellectual property etc., shall be executed by you.&nbsp; You will also keep us duly informed if you are bound by any confidentiality agreement with your previous employers, in which case you shall keep us indemnified against any breach thereof by you.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>You will abide by the rules and regulations of the Company which are in force from time to time and the Company shall have the right to vary or modify any or all of the above terms and conditions in service which shall be binding on you.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>Any act of dishonesty, disobedience, insubordination, incivility, intemperance, irregularity in attendance or other misconduct or neglect of duty, or incompetence in the discharge of duty on your part or the breach of any of the terms, conditions and stipulations contained herein will render you liable to termination of your employment without notice or compensation thereof.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>Breach of any of the above terms and conditions will render you liable to termination of your employment without notice or compensation thereof. The benefits provided by the Company as outlined herein and in the Company policies are subject to change at the discretion of the Company.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>You shall inform the company of any change in your personal data within 3 working days. Any notice required to be given to you shall be deemed to have been duly and properly given if delivered to you personally or sent to you by registered post to you at your address in India, as recorded with the Company.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>By signing below, you confirm that you are not bound by any agreement with any previous employer or any party, which restricts in any way your prospective employment by Company (for example, any non-compete or non-competition agreement, non-disclosure or confidentiality agreement, non-solicitation agreement, etc.).&nbsp; Such agreements may be contained in offer letters from previous employers, stock option grants, employment agreements, independent contractor agreements, agreements for the sale of a business etc.&nbsp; You represent that your employment with Company and the performance of your proposed duties for Company will not violate any obligations you have to such previous employer or other party.&nbsp; In your work for Company, you will not disclose or make use of any information or trade secrets in violation of any agreements with or rights of any such previous employer or other party, and you will not bring to Company premises any copies or other tangible embodiments of non-public information belonging to or obtained from any such previous employment or other party.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>In case any information furnished by you either in your application for employment or during the selection process is found to be incorrect/false, and /or if it is found that you have suppressed any material information in respect of your qualifications and past experience, the Company reserves the right to terminate your services any time without notice or compensation in lieu of notice.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                        </div>
                    </div>
                </div>

                <div className="card" id="AFourPage">
                    <div className="card-body">
                    <div  className="waterMark">
                <span style={{color:'#263248',fontSize: '91px',
    fontFamily: 'sans-serif',position: 'absolute',opacity: '0.3',zIndex:'0'}}>TES<span style={{color: '#F8981C',fontSize: '91px',
    fontFamily: 'sans-serif',fontWeight: "600"}}>TY</span>ANTRA</span>
                </div>
                        <div>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;At any given point of time, during your contract tenure, if the performance is found unsatisfactory, the company has all the rights to terminate from the service immediately without any prior notification. Based on your performance and the Company requirements, we will either extend your contract further, or may convert to fulltime Employment, else the contract period would end.&nbsp; This would be mutually discussed and in written communication prior to 7 days’ notice.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;&nbsp; Salary Information:</p>
                            <table style={{ width: 500, marginLeft: 30, marginRight: 'auto' }} border="1px">
                                <tbody>
                                    <tr  >
                                        <td style={{width:300}}><strong style={{fontWeight: 'bold'}}>Salary Compensation on Bench</strong></td>
                                        <td >&nbsp;<strong style={{ width: 150,fontWeight: 'bold' }}>{this.state.employee.salaryOnBench}</strong></td>
                                    </tr>
                                    <tr >
                                        <td style={{width:300}}><strong style={{fontWeight: 'bold',marginLeft:'-110px'}}>After Deployment</strong></td>
                                        <td >&nbsp;<strong style={{fontWeight: 'bold'}}>{this.state.employee.salaryAfterDeployment}</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p style={{ paddingLeft: 30, textAlign: 'left' }}><br />On selection to Project, you will be offered as Full Time Employment with Test Yantra Software Solutions. The Offer Terms &amp; Salary will be as per the Employment Agreement which will be shared to you. This will be effective on 1<sup>st</sup> of the following month post project deployment.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p style={{ paddingLeft: 30, textAlign: 'left' }}>&nbsp;</p>
                            <p style={{ paddingLeft: 30, textAlign: 'left' }}><em>&nbsp;</em>It is our hope that your acceptance of our offer will be just the beginning of a mutually beneficial relationship with our organization. We take great pleasure in welcoming you to our Organization and sincerely hope that your period of service with us will be long, pleasant and of mutual benefit.</p>
                            <p style={{ paddingLeft: 30, textAlign: 'left' }}>&nbsp;</p>
                            <p style={{ paddingLeft: 30, textAlign: 'left' }}><strong>Sincerely,</strong></p>
                            <p style={{ paddingLeft: 30, textAlign: 'left' }}><strong>&nbsp;</strong></p>
                            <p style={{ paddingLeft: 30, textAlign: 'left' }}><strong>For Test Yantra Software Solutions (India) Pvt Ltd&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong></p>
                            <p style={{ paddingLeft: 30, textAlign: 'left' }}><strong>&nbsp;</strong></p>
                            <p style={{ paddingLeft: 30, textAlign: 'left' }}><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></p>
                            <p style={{ paddingLeft: 30, textAlign: 'left' }}><strong>Authorized Signatory </strong></p>
                            <p style={{ paddingLeft: 30, textAlign: 'left' }}>&nbsp;</p>
                            <p style={{ paddingLeft: 30, textAlign: 'left' }}>I agree to accept the conditional offer and employment on the above-mentioned terms and conditions. I’ll report for duty on <strong>{toReportingDate.getDate()}<sup>{this.nth(toReportingDate.getDate())}</sup>&nbsp;{moment(toReportingDate).format('MMMM YYYY')}</strong></p>
                            <p style={{ paddingLeft: 30, textAlign: 'left' }}><strong>&nbsp;</strong></p>
                            <p style={{ paddingLeft: 30, textAlign: 'left' }}><strong>&nbsp;</strong></p>
                            <p style={{ paddingLeft: 30, textAlign: 'left' }}><strong>Employee Signature</strong></p>
                            <p style={{ paddingLeft: 30, textAlign: 'left' }}><strong>&nbsp;</strong></p>
                            <p style={{ paddingLeft: 30, textAlign: 'left' }}><strong>Date:</strong></p>
                            <p style={{ paddingLeft: 30, textAlign: 'left' }}><strong>&nbsp;</strong></p>
                            <p style={{ paddingLeft: 30, textAlign: 'left' }}><strong>&nbsp;</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        ) }else {
            return (<h1></h1>)
        }
    }
}

export default withRouter(OfferLetter)
