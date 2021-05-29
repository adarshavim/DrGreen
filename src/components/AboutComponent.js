import React from 'react'
import {Card,CardImg} from 'reactstrap';
import Footer from './FooterComponent';
import { useLocation } from 'react-router-dom';

const GetPath=()=>{
     const location = useLocation();
     return location.pathname;
}

const About=(props)=>{
     
    return (
         <>
         <div id="about">
        <div className="container">
        <div className="row">

             <div className="col-md-4 col-sm-12">
                    <div className="section-title">
                            <h2>About our App</h2>
                            <span className="line-bar">...</span>
                     </div>
                     <p>In world of AI and machine learning, we also want to do something good for society. Keeping this in mind we are presenting our Plant Disease Detection App. As we are from rural area, we know its very hard for common people to identify the diseases in their plant and take right measures to cure it. So here we are, with our app which will predict the diseases in your plant.</p>
             </div>

             <div className="col-md-4 col-sm-12">
                       <div className="section-title">
                            <h2>About us</h2>
                            <span className="line-bar">...</span>
                       </div>
                       <p>We are the strangest thing on earth:)</p>
               </div>

             <div className=" col-md-4 col-sm-12" >
                         <div className="row col-content" >
                              <a href="https://www.linkedin.com/in/1398abhisingh911/"><Card>
                                   <CardImg src="https://firebasestorage.googleapis.com/v0/b/drgreen-2dec5.appspot.com/o/25354064_1808596335878604_8754163321395567872_n.jpg?alt=media&token=6e462deb-f131-4061-87bf-feccd7fde74d"></CardImg>
                              </Card>
                              </a>
                              <a href="https://www.linkedin.com/in/adarsh-maurya/">
                              <Card>
                                   <CardImg src="https://firebasestorage.googleapis.com/v0/b/drgreen-2dec5.appspot.com/o/pic.jpg?alt=media&token=cc8c166d-8c7e-4335-8ea0-9bc15f5561cc"></CardImg>
                              </Card>
                              </a>
                              <a href="https://www.linkedin.com/in/nitish705702/">
                              <Card>
                                   <CardImg src="https://firebasestorage.googleapis.com/v0/b/drgreen-2dec5.appspot.com/o/84545899_673457493442095_1786219337254699008_n.jpg?alt=media&token=1e43248a-36d3-4053-8872-9685a6be19d6"></CardImg>
                              </Card>
                              </a>
                         </div>
               </div>
             
        </div>
   </div>
   </div>
   {(GetPath()==="/About")?<Footer/>:(<></>)}
   </>
    );
}

export default About;