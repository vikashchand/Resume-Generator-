import { Component } from "react";
import { TextField} from "@mui/material";
import Heading from "./Heading";
import "./Personal.css";

class Experience extends Component
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
              <Heading text="Experience Details" />
      
              <div className="dflexDiv">
              
              <section>
                <h3>Experience 1</h3>
                <hr />
              <div className="tf">
                <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Institute1"
                  label="Institute/Organization"
                  fullWidth
                  autoComplete="off"
                  value={values.Institute1}
                />
              </div>
      
              <div className="tf">
                <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Position1"
                  label="Position"
                  fullWidth
                  autoComplete="off"
                  value={values.Position}
                />
              </div>
      
              <div className="tf">
                <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Duration1"
                  label="Duration"
                  fullWidth
                  autoComplete="off"
                  value={values.Duration}
                />
              </div>

              <div className="tf">
                <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Descripiton1"
                  label="Descripiton"
                  fullWidth
                  autoComplete="off"
                  value={values.Descripiton}
                />
              </div>

              
              </section>

              {/* section 2 */}
              <section>
              <h3>Experience 2</h3>
              <hr />
              <div className="tf">
                <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Institute2"
                  label="Institute/Organization"
                  fullWidth
                  autoComplete="off"
                  value={values.Institute2}
                />
              </div>
      
              <div className="tf">
                <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Position2"
                  label="Position"
                  fullWidth
                  autoComplete="off"
                  value={values.Position2}
                />
              </div>
      
              <div className="tf">
                <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Duration2"
                  label="Duration"
                  fullWidth
                  autoComplete="off"
                  value={values.Duration2}
                />
              </div>

              <div className="tf">
                <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Descripiton2"
                  label="Descripiton"
                  fullWidth
                  autoComplete="off"
                  value={values.Descripiton2}
                />
              </div>

              
              </section>
              </div>
      
              <section style={{width:"60%", margin:"auto"}}>
                <h3>Experience 3</h3>
                <hr />
              <div className="tf">
                <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Institute3"
                  label="Institute/Organization"
                  fullWidth
                  autoComplete="off"
                  value={values.Institute3}
                />
              </div>
      
              <div className="tf">
                <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Position3"
                  label="Position"
                  fullWidth
                  autoComplete="off"
                  value={values.Position3}
                />
              </div>
      
              <div className="tf">
                <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Duration3"
                  label="Duration"
                  fullWidth
                  autoComplete="off"
                  value={values.Duration3}
                />
              </div>

              <div className="tf">
                <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Descripiton3"
                  label="Descripiton"
                  fullWidth
                  autoComplete="off"
                  value={values.Descripiton3}
                />
              </div>

              
              </section>
    
    
      
              <div className="dflexEnd">
                <button className="btn btn-right" onClick={this.GoBackWard}>&lt;  Back</button>
                <button type="submit" className="btn btn-right" onClick={this.GoForward}>Next &gt;</button>
              </div>
              
            </div>

         
          </>
        );
    }
}

export default  (Experience);