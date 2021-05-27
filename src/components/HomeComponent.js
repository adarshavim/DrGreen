import React from 'react';
import { Media} from 'reactstrap';
import { Loading } from './LoadingComponent';
import {Link} from 'react-router-dom';
import About from './AboutComponent';
    
   function RenderPlant({plant}){
    return (
        <div style={{margin:"50px",border:"2px solid white"}}>
        <Link to={`/home/${plant._id}`}>
        <Media tag="li" style={{padding:"2%"}}>
            <Media left  middle>
                <Media object src={plant.img[0]} alt={plant.plant}  className="ver-center"/>
            </Media>
            <Media body className="ml-5">
                <Media heading>{plant.plant}</Media>
                <p>{plant.desc}</p>
            </Media>
        </Media>
        </Link>
    </div>  );
   }

    const Home = (props) => {
        
        const listOfPlants=props.diseases.diseases.map(disease=>{
            if(disease.diseaseName==="Healthy (No Disease)"){
                return(
                    <div>
                        <RenderPlant plant={disease}/>
                    </div>
                )
            }
            return(<></>);
        })
        
        if (props.diseases.isLoading) {
            return(
                <div>            
                    <Loading />
                </div>
            );
        }
        else if (props.diseases.errMess) {
            return(
               
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.diseases.errMess}</h4>
                        </div>
                    </div>
                
            );
        }
        else{
        return (
        <>
            <section id="home" data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
                 <div className="row">
  
                      <div className="col-md-6 col-sm-12">
                           <div className="home-info">
                                <h1>We make beautiful websites for all people.</h1>
                                <a href="#about" className="btn section-btn smoothScroll">Start a project</a>
                                <span>
                                     CALL US (+66) 010-020-0340
                                     <small>For any inquiry</small>
                                </span>
                           </div>
                      </div>
  
                      <div className="col-md-6 col-sm-12">
                           <div className="home-video">
                                <div className="embed-responsive embed-responsive-16by9">
                                     <iframe src="https://www.youtube.com/embed/AqcjdkPMPJA"  title="DemoVedio"></iframe>
                                </div>
                           </div>
                      </div>
                      
                 </div>
            </div>
         </section>
        <About/>
        <section id="blog" data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row">
            <div className="col-md-12 col-sm-12">
                         <div className="section-title">
                              <h2>Our Services</h2>
                              <span className="line-bar">...</span>
                         </div>
            </div>
            {listOfPlants}
            </div>
          </div>
        </section>
        
       </> );
        }
    }

export default Home;