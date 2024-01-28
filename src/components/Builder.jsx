import { Component } from "react";
import Personal from "./Personal";
import Links from "./Links";
import Education from "./Education";
import Projects from "./Projects";
import Experience from "./Experience";
import Download from "./Download";
import Skill from "./Skill";

class Builder extends Component {
  state = {
    step: 1,
    // Pesonal Details
    FirstName: "",
    LastName: "",
    EmailId: "",
    Phone: "",
    YourWebsite: "",

    //Links
    LinkedIn: "",
    Facebook: "",
    Instagaram: "",
    Twitter: "",
    Github: "",

    //Education
    College: "",
    StartDate: "",
    EndDate: "",
    Qualification: "",
    Grade: "",
    School: "",
    StartDate1: "",
    EndDate1: "",
    Qualification1: "",
    Grade1: "",

    //Projects
    Project1:"",
    PLink1:"",
    PDescripition1:"",
    Project2:"",
    PLink2:"",
    PDescripition2:"",
    Project3:"",
    PLink3:"",
    PDescripition3:"",

    Institute1: "",
    Position1: "",
    Duration1: "",
    Descripiton1: "",
    Institute2: "",
    Position2: "",
    Duration2: "",
    Descripiton2: "",
    Institute3: "",
    Position3: "",
    Duration3: "",
    Descripiton3: "",

    Skill1: "",
    Skill2: "",
    Skill3: "",
    Skill4: "",
    Skill5: "",
    Hobbie1: "",
    Hobbie2: "",
    Hobbie3: "",
    Hobbie4: "",
    Hobbie5: "",
  };

  ForWard = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  BackWard = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { step } = this.state;

    const {
      // Pesonal Details
      FirstName,
      LastName,
      EmailId,
      Phone,
      YourWebsite,

      //Links
      LinkedIn,
      Facebook,
      Instagaram,
      Twitter,
      Github,

      //Education
      College,
      StartDate,
      EndDate,
      Qualification,
      Grade,
      School,
      StartDate1,
      EndDate1,
      Qualification1,
      Grade1,

      Project1,
      PLink1,
      PDescripition1,
      Project2,
      PLink2,
      PDescripition2,
      Project3,
      PLink3,
      PDescripition3,

      Institute1,
      Position1,
      Duration1,
      Descripiton1,
      Institute2,
      Position2,
      Duration2,
      Descripiton2,
      Institute3,
      Position3,
      Duration3,
      Descripiton3,

      Skill1,
      Skill2,
      Skill3,
      Skill4,
      Skill5,
      Hobbie1,
      Hobbie2,
      Hobbie3,
      Hobbie4,
      Hobbie5,
    } = this.state;

    const values = {
      // Pesonal Details
      FirstName,
      LastName,
      EmailId,
      Phone,
      YourWebsite,

      //Links
      LinkedIn,
      Facebook,
      Instagaram,
      Twitter,
      Github,

      //Education
      College,
      StartDate,
      EndDate,
      Qualification,
      Grade,
      School,
      StartDate1,
      EndDate1,
      Qualification1,
      Grade1,


      //Projects
      Project1,
      PLink1,
      PDescripition1,
      Project2,
      PLink2,
      PDescripition2,
      Project3,
      PLink3,
      PDescripition3,

      Institute1,
      Position1,
      Duration1,
      Descripiton1,
      Institute2,
      Position2,
      Duration2,
      Descripiton2,
      Institute3,
      Position3,
      Duration3,
      Descripiton3,

      Skill1,
      Skill2,
      Skill3,
      Skill4,
      Skill5,
      Hobbie1,
      Hobbie2,
      Hobbie3,
      Hobbie4,
      Hobbie5,
    };

    switch (step) {
      case 1:
        return (
          <Personal
            ForWard={this.ForWard}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Links
            BackWard={this.BackWard}
            ForWard={this.ForWard}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Education
            BackWard={this.BackWard}
            ForWard={this.ForWard}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Projects
            BackWard={this.BackWard}
            ForWard={this.ForWard}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 5:
        return (
          <Experience
            BackWard={this.BackWard}
            ForWard={this.ForWard}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 6:
        return (
          <Skill
            BackWard={this.BackWard}
            ForWard={this.ForWard}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 7:
        return <Download   BackWard={this.BackWard} values={values}/>;

      default:
        return <div></div>;
    }
  }
}

export default Builder;
