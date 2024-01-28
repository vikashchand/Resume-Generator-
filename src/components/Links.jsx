import { Component } from "react";
import {TextField} from "@mui/material";
import Heading from "./Heading";
import "./Personal.css";

class Links extends Component {

  GoBackWard = (e) =>{
    e.preventDefault();
    this.props.BackWard();
  }

  GoForward = (e) =>{
    e.preventDefault();
    this.props.ForWard();
  }

  render() {
    const{values} = this.props;

    return (
      <div className="main-div">
        <Heading text="Profile Links" />

        <div className="tf">
          <TextField
            type="url"
            onChange={this.props.handleChange}
            variant="outlined"
            name="LinkedIn"
            label="LinkedIn"
            fullWidth
            autoComplete="off"
            value={values.LinkedIn}
          />
        </div>

        <div className="tf">
          <TextField
            type="url"
            onChange={this.props.handleChange}
            variant="outlined"
            name="Facebook"
            label="Facebook"
            fullWidth
            autoComplete="off"
            value={values.Facebook}
          />
        </div>

        <div className="tf">
          <TextField
            type="url"
            onChange={this.props.handleChange}
            variant="outlined"
            name="Instagaram"
            label="Instagaram"
            fullWidth
            autoComplete="off"
            value={values.Instagaram}
          />
        </div>

        <div className="tf">
          <TextField
            type="url"
            onChange={this.props.handleChange}
            variant="outlined"
            name="Twitter"
            label="Twitter"
            fullWidth
            autoComplete="off"
            value={values.Twitter}
          />
        </div>

        <div className="tf">
          <TextField
            type="url"
            onChange={this.props.handleChange}
            variant="outlined"
            name="Github"
            label="Github"
            fullWidth
            autoComplete="off"
            value={values.Github}
          />
        </div>

        <div className="dflexEnd">
          <button className="btn btn-right" onClick={this.GoBackWard}>
            &lt; Back
          </button>
          <button type="submit" className="btn btn-right" onClick={this.GoForward}>
            Next &gt;
          </button>
        </div>
      </div>
    );
  }
}

export default (Links);