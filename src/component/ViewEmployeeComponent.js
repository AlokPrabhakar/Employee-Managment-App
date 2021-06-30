import React, { Component } from 'react'
import { Link } from "react-router-dom";
import EmployeeService from '../service/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card" style={{width:"28rem" ,marginLeft:"150px"}}>
                    <h3 className = " card-title text-center bg-warning"> View Employee Details</h3>
                   
                    <div className = "card-body">
                        <div className = "row ">
                            <div className="col-4  text-secondary"> <label> First Name : </label></div>
                            <div className="col-8"><span> { this.state.employee.firstName }</span></div>
                           
                            
                        </div>
                        <div className = "row mt-3">
                            <div className="col-4 text-secondary"><label>Last Name : </label></div>
                            <div className="col-8"> <div> { this.state.employee.lastName }</div></div>
                            
                           
                        </div>
                        <div className = "row mt-3">
                            <div className="col-4 text-secondary"> <label>Email ID : </label></div>
                            <div className="col-8"><div> { this.state.employee.emailId }</div></div>
                         </div>
                         <div className="text-center mt-3">
                              <Link className="text-center btn btn-primary" tag="a" to="/employees" >Back</Link>
                         </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent;