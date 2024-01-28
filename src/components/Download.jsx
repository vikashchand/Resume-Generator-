import { Component } from "react";
import "./Download.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

class Download extends Component {

  GoBackWard = (e) => {
    e.preventDefault();
    this.props.BackWard();
  };



  printPDF = () => {
    
    const input = document.getElementById("page");
    
    html2canvas(input).then((canvas) => {
      var PDF_Width = Math.round( input.clientWidth * 0.75);
      var PDF_Height = Math.round(input.clientHeight * 0.75);

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
      pdf.addImage(imgData, "JPG", 0, 0, PDF_Width, PDF_Height);
      pdf.save("download.pdf");

    });
  };


  render() {
    const { values } = this.props;

    return (
      <>
        <div className="rela-block page" id="page">
          <div className="rela-block top-bar">
            <div className="caps name">
              <div className="abs-center">
                {values.FirstName} {values.LastName}
              </div>
            </div>
          </div>
          <div className="side-bar">
            <div className="mugshot">
              <div className="logo">
                <svg viewBox="0 0 80 80" className="rela-block logo-svg">
                  <path
                    d="M 10 10 L 52 10 L 72 30 L 72 70 L 30 70 L 10 50 Z"
                    strokeWidth="2.5"
                    fill="none"
                  />
                </svg>
                <p className="logo-text">
                  {values.FirstName[0]}
                  {values.LastName[0]}
                </p>
              </div>
            </div>

            <p className="mb-1">
              <span style={{ paddingRight: "10px" }}>
                <i className="fas fa-envelope"></i>
              </span>
              {values.EmailId}
            </p>
            <p className="mb-1">
              <span style={{ paddingRight: "10px" }}>
                <i className="fas fa-phone-square-alt"></i>
              </span>
              {values.Phone}
            </p>

            <p className="rela-block caps side-header">Skills</p>
            <p className="rela-block list-thing">{values.Skill1}</p>
            <p className="rela-block list-thing">{values.Skill2}</p>
            <p className="rela-block list-thing">{values.Skill3}</p>
            <p className="rela-block list-thing">{values.Skill4}</p>
            <p className="rela-block list-thing">{values.Skill5}</p>

            <p className="rela-block caps side-header">Hobbies</p>
            <p className="rela-block list-thing">{values.Hobbie1}</p>
            <p className="rela-block list-thing">{values.Hobbie2}</p>
            <p className="rela-block list-thing">{values.Hobbie3}</p>
            <p className="rela-block list-thing">{values.Hobbie4}</p>
            <p className="rela-block list-thing">{values.Hobbie5}</p>
          </div>

          <div className="rela-block content-container">
            <div className="rela-block caps greyed">Profile</div>

            <p className="rela-block social mb-0">
              <span style={{ paddingRight: "15px", fontSize: "20px" }}>
                <i className="fas fa-globe"></i>
              </span>
              <a
                target="_blank"
                rel="noreferrer"
                href={`//${values.YourWebsite}`}
              >
                {values.YourWebsite}
              </a>
            </p>

            <p className="rela-block social mb-0">
              <span>
                <i className="fab fa-github"></i>
              </span>
              <a target="_blank" rel="noreferrer" href={`//${values.Github}`}>
                {values.Github}
              </a>
            </p>

            <p className="rela-block social mb-0">
              <span>
                <i className="fab fa-facebook"></i>
              </span>
              <a target="_blank" rel="noreferrer" href={`//${values.Facebook}`}>
                {values.Facebook}
              </a>
            </p>

            <p className="rela-block social mb-0">
              <span>
                <i className="fab fa-twitter-square"></i>
              </span>
              <a target="_blank" rel="noreferrer" href={`//${values.Twitter}`}>
                {values.Twitter}
              </a>
            </p>

            <p className="rela-block social mb-0">
              <span>
                <i className="fab fa-instagram"></i>
              </span>
              <a
                target="_blank"
                rel="noreferrer"
                href={`//${values.Instagaram}`}
              >
                {" "}
                {values.Instagaram}
              </a>
            </p>

            <p className="rela-block social mb-4">
              <span>
                <i className="fab fa-linkedin"></i>
              </span>
              <a target="_blank" rel="noreferrer" href={`//${values.LinkedIn}`}>
                {values.LinkedIn}
              </a>
            </p>

            <div className="rela-block caps greyed">Education</div>
                <h3 className="mb-0">{values.College}</h3>
                <p className="text-muted light mt-0 mb-1">
                  {values.StartDate}
                  <span className="mx-2">to</span>
                  {values.EndDate}
                </p>
                <p className="justified mt-0 mb-1" style={{ fontSize: "17px" }}>
                  {values.Qualification}
                </p>
                <p className="justified mt-0 mb-3" style={{ fontSize: "17px" }}>
                  {values.Grade}
                </p>
                <h3 className="mb-0">{values.School}</h3>
                <p className="text-muted light mt-0 mb-1">
                  {values.StartDate1}
                  <span className="mx-2">to</span>
                  {values.EndDate1}
                </p>
                <p className="justified mt-0 mb-1" style={{ fontSize: "17px" }}>
                  {values.Qualification1}
                </p>
                <p className="justified mt-0 mb-1" style={{ fontSize: "17px" }}>
                  {values.Grade1}
                </p>

            <div className="rela-block caps greyed">Experience</div>
            {((values.Duration1 === values.Duration2) === values.Duration3) ===
            "" ? (
              <>
                <h3>{values.Institute1}</h3>
                <p
                  className="text-muted light mt-1 mb-2"
                  style={{ fontSize: "17px" }}
                >
                  {values.Position1}
                  <span className="ml-5 pl-5">
                    Duration: {values.Duration1}
                  </span>
                </p>
                <p className="justified" style={{ fontSize: "17px" }}>
                  {values.Descripiton1}
                </p>

                <h3>{values.Institute2}</h3>
                <p
                  className="text-muted light mt-1 mb-2"
                  style={{ fontSize: "17px" }}
                >
                  {values.Position2}
                  <span className="ml-5 pl-5">
                    Duration: {values.Duration2}
                  </span>
                </p>
                <p className="justified" style={{ fontSize: "17px" }}>
                  {values.Descripiton2}
                </p>

                <h3>{values.Institute3}</h3>
                <p
                  className="text-muted light mt-1 mb-2"
                  style={{ fontSize: "17px" }}
                >
                  {values.Position3}
                  <span className="ml-5 pl-5">
                    Duration: {values.Duration3}
                  </span>
                </p>
                <p className="justified" style={{ fontSize: "17px" }}>
                  {values.Descripiton3}
                </p>
              </>
            ) : (
              <>
                <p className="justified">I am Fresher</p>
              </>
            )}

            <div className="rela-block caps greyed">Projects</div>

            <h3>{values.Project1}</h3>
            <p className="light mt-1 mb-2" style={{ fontSize: "17px" }}>
              <span className="mr-2">
                <i className="fas fa-link"></i>
              </span>
              {values.PLink1}
            </p>
            <p className="justified" style={{ fontSize: "17px" }}>
              {values.PDescripition1}
            </p>

            <h3>{values.Project2}</h3>
            <p className="light mt-1 mb-2" style={{ fontSize: "17px" }}>
              <span className="mr-2">
                <i className="fas fa-link"></i>
              </span>
              {values.PLink2}
            </p>
            <p className="justified" style={{ fontSize: "17px" }}>
              {values.PDescripition2}
            </p>

            <h3>{values.Project3}</h3>
            <p className="light mt-1 mb-2" style={{ fontSize: "17px" }}>
              <span className="mr-2">
                <i className="fas fa-link"></i>
              </span>
              {values.PLink3}
            </p>
            <p className="justified" style={{ fontSize: "17px" }}>
              {values.PDescripition3}
            </p>
          </div>
        </div>

        <div
          className="dflexEnd"
          style={{ width: "80%", margin: "0px auto 30px auto" }}
        >
          <button className="btn btn-right" onClick={this.GoBackWard}>
            &lt; Back
          </button>
          <button
            type="submit"
            className="btn btn-right"
            onClick={this.printPDF}
          >
            Download Resume
          </button>
        </div>
      </>
    );
  }
}

export default Download;
