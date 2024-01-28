import { Component } from "react";
import { TextField } from "@mui/material";
import Heading from "./Heading";
import "./Personal.css";

class Projects extends Component {
  GoBackWard = (e) => {
    e.preventDefault();
    this.props.BackWard();
  };

  GoForward = (e) => {
    e.preventDefault();
    this.props.ForWard();
  };

  render() {
    const { values } = this.props;

    return (
      <>
        <div className="main-div" style={{width:"85%"}}>
          <Heading text="Project Details" />

          <div className="dflexDiv">
            <section>
            <h3>Project 1</h3><hr/>
              <div className="tf">
                <TextField
                  onChange={this.props.handleChange}
                  variant="outlined"
                  name="Project1"
                  label="Project Name 1"
                  fullWidth
                  autoComplete="off"
                  value={values.Project1}
                />
              </div>

              <div className="tf">
                <TextField
                  onChange={this.props.handleChange}
                  variant="outlined"
                  name="PLink1"
                  label="Link 1"
                  fullWidth
                  autoComplete="off"
                  value={values.PLink1}
                />
              </div>

              <div className="tf">
                <TextField
                  onChange={this.props.handleChange}
                  variant="outlined"
                  name="PDescripition1"
                  label="Descripiton 1"
                  fullWidth
                  autoComplete="off"
                  value={values.PDescripition1}
                />
              </div>
            </section>

            <section>
              <h3>Project 2</h3><hr/>
              <div className="tf">
                <TextField
                  onChange={this.props.handleChange}
                  variant="outlined"
                  name="Project2"
                  label="Project Name 2"
                  fullWidth
                  autoComplete="off"
                  value={values.Project2}
                />
              </div>

              <div className="tf">
                <TextField
                  onChange={this.props.handleChange}
                  variant="outlined"
                  name="PLink2"
                  label="Link 2"
                  fullWidth
                  autoComplete="off"
                  value={values.PLink2}
                />
              </div>

              <div className="tf">
                <TextField
                  onChange={this.props.handleChange}
                  variant="outlined"
                  name="PDescripition2"
                  label="Descripiton 2"
                  fullWidth
                  autoComplete="off"
                  value={values.PDescripition2}
                />
              </div>
            </section>
          </div>

            <section style={{ width: "60%", margin: "auto" }}>
            <h3>Project 3</h3><hr/>
              <div className="tf">
                <TextField
                  onChange={this.props.handleChange}
                  variant="outlined"
                  name="Project3"
                  label="Project Name 3"
                  fullWidth
                  autoComplete="off"
                  value={values.Project3}
                />
              </div>

              <div className="tf">
                <TextField
                  onChange={this.props.handleChange}
                  variant="outlined"
                  name="PLink3"
                  label="Link 3"
                  fullWidth
                  autoComplete="off"
                  value={values.PLink3}
                />
              </div>

              <div className="tf">
                <TextField
                  onChange={this.props.handleChange}
                  variant="outlined"
                  name="PDescripition3"
                  label="Descripiton 3"
                  fullWidth
                  autoComplete="off"
                  value={values.PDescripition3}
                />
              </div>
            </section>


          <div className="dflexEnd">
            <button className="btn btn-right" onClick={this.GoBackWard}>
              &lt; Back
            </button>
            <button
              type="submit"
              className="btn btn-right"
              onClick={this.GoForward}
            >
              Next &gt;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
