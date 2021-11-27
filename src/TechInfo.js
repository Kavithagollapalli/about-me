import React, { Component } from "react";
import "./ResStyle.css";

export class TechInfo extends Component {
  render() {
    return (
      <div>
        <h3 className="skills">Proffessional Info</h3>
        <div className="tech">
          <div className="col">
            <div>
              <label className="lbl">
                <span>HTML</span>
              </label>
              <div className="progress">
                <div className="progress-bar bg-primary" style={{ width: "90%" }}> 
                </div>
              </div>
              <br />
            </div>
            <div>
            <label className="lbl">
              <span>CSS</span>
            </label>
            <div className="progress">
                <div className="progress-bar bg-primary" style={{ width: "83%" }}> 
                </div>
              </div>
              <br />
            </div>
            <div>
            <label className="lbl">
              <span>JavaScript</span>
            </label>
            <br />
            <div className="progress">
                <div className="progress-bar bg-primary" style={{ width: "70%" }}> 
                </div>
              </div>
          </div>
          </div>
          <div className="colu">
              <div>
            <label className="lbl">
              <span>Adobe Photoshop</span>
            </label>
            <div className="progress">
                <div className="progress-bar bg-success" style={{ width: "80%" }}> 
                </div>
              </div>
            <br />
            </div>
            <div>
            <label className="lbl"> 
              <span>Sketch</span>
            </label>
            <div className="progress">
                <div className="progress-bar bg-success" style={{ width: "85%" }}> 
                </div>
              </div>
            <br />
            </div>
            <div>
            <label className="lbl">
              <span>Adobe XD</span>
            </label>
            <div className="progress">
                <div className="progress-bar bg-success" style={{ width: "70%" }}> 
                </div>
              </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default TechInfo;
