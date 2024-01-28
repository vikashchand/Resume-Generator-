import { TextField} from "@mui/material";
import Heading from "./Heading";
import "./Personal.css";
import { Component } from "react";



class Personal extends Component
{

  GoForward = e => {
    e.preventDefault ();
    this.props.ForWard ();
  };
  
  render(){
    const {values} = this.props;


    return (

      <>

            <div className="main-div">
              <Heading text="Personal Details" />
  
              <div className="tf">
                <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="FirstName"
                  label="FirstName"
                  fullWidth
                  autoComplete="off"
                  value={values.FirstName}

                />
              </div>
  
              <div className="tf">
                <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="LastName"
                  label="LastName"
                  fullWidth
                  autoComplete="off"
                  value={values.LastName}
                />
              </div>
  
              <div className="tf">
                <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="EmailId"
                  label="Email"
                  fullWidth
                  autoComplete="off"
                  type="email"
                  value={values.EmailId}
                />
              </div>
  
              <div className="tf">
                <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Phone"
                  label="Phone"
                  fullWidth
                  autoComplete="off"
                  type="tel"
                  value={values.Phone}
                />
              </div>
  
              <div className="tf">
                <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="YourWebsite"
                  label="Your Website"
                  fullWidth
                  autoComplete="off"
                  value={values.YourWebsite}
                />
              </div>
  
              <div className="dflex">
                <button className="btn btn-right" onClick={this.GoForward}>
                  Next &gt;
                </button>
              </div>
            </div>
      </>
    );
  }

}

export default (Personal);