import React from 'react';
import { Media} from 'reactstrap';
import { Loading } from './LoadingComponent';
import {Link} from 'react-router-dom';
import About from './AboutComponent';
    
   function RenderPlant({plant}){
    return (
        <div className="media-container">
        <Link to={`/home/${plant._id}`}>
        <Media tag="li">
            <Media left  middle>
                <Media object src={plant.img[0]} alt={plant.plant}  className="ver-center sm-hide"/>
            </Media>
            <Media body >
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
                                <h1 style={{color:"whitesmoke"}}>Don't worry,<br/>Dr. Green is here to help you</h1>
                           </div>
                      </div>
  
                      <div className="col-md-6 col-sm-12">
                           <div className="home-video">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <video width="320" height="240" controls>
                                        <source src="https://firebasestorage.googleapis.com/v0/b/plant-disease-detection-35389.appspot.com/o/VID-20210528-WA0000.mp4?alt=media&token=57adfa08-feca-447b-b347-225de03670c6" type="video/mp4"/>
                                        Your browser does not support the video tag.
                                        </video>
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
                              <h2>Plant Directory</h2>
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