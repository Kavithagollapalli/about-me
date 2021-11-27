import React, { Component } from 'react'
import "./ResStyle.css";

export class EducInfo extends Component {
    render() {
        return (
            <div>
                <h3 className="skills">Education</h3>
                 <div>
                     <div className="exp edc">
                         <div className="border border-3">
                     <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseOne">
                         <lable className="devp">Masters in Information Technology</lable>
                         <span className="aca">from International University</span>
                         <span className="date">2011 - 2013</span></a>
                         <div id="collapseOne" class="collapse" data-bs-parent="#accordion">
                            <p className="para">Leverage agile frameworks to provide a robust synopsis for 
                            high level overviews. Iterative approaches to corporate strategy foster 
                            collaborative thinking to further the overall value proposition.</p>
                         </div>
                         </div>
                    </div>
                    <div className="exp">
                        <div className="border border-3">
                     <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
                         <lable className="devp">Bachelor of Computer Science</lable>
                         <span className="aca">from Regional College</span>
                         <span className="date">2007 - 2011</span></a>
                         <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
                            <p className="para">Override the digital divide with additional clickthroughs 
                            from DevOps. Nanotechnology immersion along the information highway will 
                            close the loop on focusing solely on the bottom line.</p>
                         </div>
                         </div>
                    </div>
                    <div className="exp">
                        <div className="border border-3">
                     <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
                         <lable className="devp">Science and Mathematics</lable>
                         <span className="aca">from Mt. High Scool</span>
                         <span className="date">1995 - 2007</span></a>
                         <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
                            <p className="para">User generated content in real-time will have 
                            multiple touchpoints for offshoring. Organically grow the holistic world 
                            view of disruptive innovation via workplace diversity and empowerment.</p>
                         </div>
                         </div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default EducInfo
