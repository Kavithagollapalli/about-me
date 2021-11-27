import React, { Component } from 'react'
import "./ResStyle.css";

export class WorkInfo extends Component {
    render() {
        return (
            <div>                
                 <h3 className="skills">Work experience</h3>
                 <div>
                     <div className="exp">
                         <div className="border border-3">
                     <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseOne">
                         <lable className="devp">Frontend Developer</lable>
                         <span className="aca">at Creative Agency</span>
                         <span className="date">May, 2015 - Present</span></a>
                         <div id="collapseOne" class="collapse" data-bs-parent="#accordion">
                            <p className="para">Leverage agile frameworks to provide a robust synopsis for high level overviews. 
                             Iterative approaches to corporate strategy foster collaborative 
                             thinking to further the overall value proposition.</p>
                         </div>
                         </div>
                    </div>
                    <div className="exp">
                        <div className="border border-3">
                        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
                         <lable className="devp">Graphic Designer</lable>
                         <span className="aca">at Design Studio</span>
                         <span className="date">Mar, 2013 - May, 2015</span></a>
                         <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
                            <p className="para">Override the digital divide with additional clickthroughs from DevOps. 
                            Nanotechnology immersion along the information 
                            highway will close the loop on focusing solely on the bottom line.</p>
                         </div>
                         </div>
                    </div>
                    <div className="exp">
                        <div className="border border-3">
                     <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
                         <lable className="devp">Junior Web Developer</lable>
                         <span className="aca">at Indie Studio</span>
                         <span className="date">Jan, 2011 - May, 2013</span></a>
                         <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
                            <p className="para">User generated content in real-time will have multiple touchpoints for 
                            offshoring. Organically grow the holistic world view of disruptive 
                            innovation via workplace diversity and empowerment.</p>
                         </div>
                         </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default WorkInfo
