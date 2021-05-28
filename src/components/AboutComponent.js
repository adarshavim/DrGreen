import React from 'react'
import AboutImage from '../images/about-image.jpg';

const About=(props)=>{
    return (
         <>
         <section id="about" data-stellar-background-ratio="0.5" style={{marginBottom:"5%",backgroundColor:"#2db300"}}>
        <div className="container">
        <div className="row">

             <div className="col-md-5 col-sm-6">
                  <div className="about-info">
                       <div className="section-title">
                            <h2>Let us introduce</h2>
                            <span className="line-bar">...</span>
                       </div>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
             </div>

             <div className="col-md-3 col-sm-6">
                  <div className="about-info skill-thumb">

                       <strong>Web Design</strong>
                            <span className="pull-right">85%</span>
                                 <div className="progress">
                                      <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width:"85%"}}></div>
                                 </div>

                       <strong>Photography</strong>
                            <span className="pull-right">90%</span>
                                 <div className="progress">
                                      <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:"85%"}}></div>
                                 </div>

                       <strong>Content Marketing</strong>
                            <span className="pull-right">75%</span>
                                 <div className="progress">
                                      <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:"85%"}}></div>
                                 </div>

                       <strong>CMS Admin</strong>
                            <span className="pull-right">70%</span>
                                 <div className="progress">
                                      <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:"85%"}}></div>
                                 </div>

                  </div>
             </div>

             <div className="col-md-4 col-sm-12">
                         <div className="about-image">
                              <img id="about-img" src={AboutImage} className="img-responsive"  alt=""/>
                         </div>
               </div>
             
        </div>
   </div>
   </section>
   </>
    );
}

export default About;