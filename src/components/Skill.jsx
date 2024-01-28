import { Component } from "react";
import { TextField } from "@mui/material";
import Heading from "./Heading";


class Skill extends Component 
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
              <Heading text="Skills and Hobbies" />
    
              <div className="dflexDiv">
                <section>
                <div className="tf">
                <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Skill1"
                  label="Skill - 1"
                  fullWidth
                  autoComplete="off"
                  value={values.Skill1}

                />
              </div>
      
              <div className="tf">
              <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Skill2"
                  label="Skill - 1"
                  fullWidth
                  autoComplete="off"
                  value={values.Skill2}

                />
              </div>
      
              <div className="tf">
              <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Skill3"
                  label="Skill - 1"
                  fullWidth
                  autoComplete="off"
                  value={values.Skill3}

                />
              </div>
      
              <div className="tf">
              <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Skill4"
                  label="Skill - 1"
                  fullWidth
                  autoComplete="off"
                  value={values.Skill4}
                />
              </div>
      
              <div className="tf">
              <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Skill5"
                  label="Skill - 1"
                  fullWidth
                  autoComplete="off"
                  value={values.Skill5}

                />
              </div>
    
                </section>
    
    
                {/* Section2 */}
                <section>
                <div className="tf">
                <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Hobbie1"
                  label="Hobbie - 1"
                  fullWidth
                  autoComplete="off"
                  value={values.Hobbie1}

                />
              </div>
      
              <div className="tf">
              <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Hobbie2"
                  label="Hobbie - 2"
                  fullWidth
                  autoComplete="off"
                  value={values.Hobbie2}

                />
              </div>
      
              <div className="tf">
              <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Hobbie3"
                  label="Hobbie - 3"
                  fullWidth
                  autoComplete="off"
                  value={values.Hobbie3}

                />
              </div>
      
              <div className="tf">
              <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Hobbie4"
                  label="Hobbie - 4"
                  fullWidth
                  autoComplete="off"
                  value={values.Hobbie4}

                />
              </div>
      
              <div className="tf">
              <TextField
                 onChange={this.props.handleChange}
                  variant="outlined"
                  name="Hobbie5"
                  label="Hobbie - 5"
                  fullWidth
                  autoComplete="off"
                  value={values.Hobbie5}

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

export default(Skill);