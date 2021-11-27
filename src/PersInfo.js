import React, { Component } from 'react'
import "./ResStyle.css";

export class PersInfo extends Component {
    render() {
        return (
             <div className="aboutme">
                 <div className="box">
                     <h4 className="abt">About Me</h4>
                     <p>I am Oracle Certified Associate Java Programmer 8 . 
                         I have 5.9 years of software development experience in Java, Java script. 
                         I have worked on spring-boot, Angular 2/9 applications. 
                         I can work as a front end as well back end developer.</p>
                 </div>
                  <div className="box divTwo" >
                      <div> 
                      <label className="column1">Age</label>
                      <span className="table">27</span><br/>
                      </div>
                      <div className="layout">
                      <label className="column1">Email</label>
                      <span className="table">Narayana.bojja@gmail.com</span><br/>
                      </div>
                      <div className="layout">
                      <label className="column1">Phone</label>
                      <span className="table">8374630264</span><br/>
                      </div>
                      <div className="layout">
                      <label className="column1">Address</label>
                      <span className="table">Anantasagaram,Nelloredt.</span><br/>
                      </div>
                    </div>
             </div>

        )
    }
}

export default PersInfo
