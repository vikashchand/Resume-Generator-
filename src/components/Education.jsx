import Heading from "./Heading";
import {TextField} from "@mui/material";
import { Component } from "react";
import  "./Personal.css";

class Edcation extends Component
{
  GoBackWard = (e) =>{
    e.preventDefault();
    this.props.BackWard();
  }

  GoForward = (e) =>{
    e.preventDefault();
    this.props.ForWard();
  } 

  render()
  {

    const{values} = this.props;

    return (
      <>
        <div className="main-div" style={{width:"85%"}}>
          <Heading text="Education" />

          <div className="dflexDiv">
            <section>
            <div className="tf">
            <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="College"
                  label="College/University"
                  fullWidth
                  autoComplete="off"
                  value={values.College}

                />
          </div>
  
          <div className="tf">
            <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="StartDate"
                  type="date"
                  label="From Date"
                  fullWidth
                  autoComplete="off"
                  value={values.StartDate}
                  InputLabelProps={{ shrink: true }}
                />
          </div>
  
          <div className="tf">
          <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="EndDate"
                  type="date"
                  label="To Date"
                  fullWidth
                  autoComplete="off"
                  value={values.EndDate}
                  InputLabelProps={{ shrink: true }}
                />
          </div>
  
          <div className="tf">
          <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Qualification"
                  label="Qualification"
                  fullWidth
                  autoComplete="off"
                  value={values.Qualification}

                />
          </div>
  
          <div className="tf">
              <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Grade"
                  label="Grade/CGPA/Percentage"
                  fullWidth
                  autoComplete="off"
                  value={values.Grade}

                />

          </div>

            </section>


            {/* Section2 */}
            <section>
            <div className="tf">
            <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="School"
                  label="School"
                  fullWidth
                  autoComplete="off"
                  value={values.School}

                />
          </div>
  
          <div className="tf">
            <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="StartDate1"
                  type="date"
                  label="From Date"
                  fullWidth
                  autoComplete="off"
                  value={values.StartDate1}
                  InputLabelProps={{ shrink: true }}
                />
          </div>
  
          <div className="tf">
          <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="EndDate1"
                  type="date"
                  label="To Date"
                  fullWidth
                  autoComplete="off"
                  value={values.EndDate1}
                  InputLabelProps={{ shrink: true }}
                />
          </div>
  
          <div className="tf">
          <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Qualification1"
                  label="Qualification"
                  fullWidth
                  autoComplete="off"
                  value={values.Qualification1}

                />
          </div>
  
          <div className="tf">
              <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Grade1"
                  label="Grade/CGPA/Percentage"
                  fullWidth
                  autoComplete="off"
                  value={values.Grade1}

                />

          </div>
            </section>
          </div>
  
          <div className="dflexEnd">
            <button className="btn btn-right" onClick={this.GoBackWard}>&lt;  Back</button>
            <button type="submit" className="btn btn-right" onClick={this.GoForward}>Next &gt;</button>
          </div>
          
        </div>
     
      </>
    );
  }

}

export default (Edcation);