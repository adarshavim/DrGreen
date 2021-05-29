import React from 'react';
import { Media} from 'reactstrap';
import { Loading } from './LoadingComponent';
import {Link} from 'react-router-dom';
import About from './AboutComponent';
import Footer from './FooterComponent';
   function RenderPlant({plant}){
    return (
        <div className="row plant-content">
        <Link to={`/home/${plant._id}`}>
        <Media tag="li" className="row">
            <Media left  middle className="col-md-3 col-sm-12" style={{margin:"2%"}}>
                <Media object src={plant.img[0]} alt={plant.plant} className="card-img"/>
            </Media>
            <Media body className="col-sm-12">
                <Media><h3>{plant.plant}</h3></Media>
                <p className="sm-hide">{plant.desc}</p>
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
               
                    <div> 
                        <div>
                            <h4>{props.diseases.errMess}</h4>
                        </div>
                    </div>
                
            );
        }
        else{
        return (<>
            <div id="home">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                         <div className="col-md-6 col-sm-12 home-info">
                                <div>
                                        <h1>Don't worry,<br/>Dr. Green is here to help you</h1>
                                </div>
                         </div>
                         <div className="col-md-1 col-sm-0"></div>
                         <div className="col-md-5 col-sm-12">
                                    <video controls>
                                        <source src="https://firebasestorage.googleapis.com/v0/b/plant-disease-detection-35389.appspot.com/o/VID-20210528-WA0000.mp4?alt=media&token=57adfa08-feca-447b-b347-225de03670c6" type="video/mp4"/>
                                        Your browser does not support the video tag.
                                    </video>
                        </div>
                    </div>
                </div>
            </div>
         
         <div>
             <About/>
         </div>
        <div id="plant-directory">
            <div className="row row-content" style={{margin:"0",paddingBottom:"0"}}>
                <h1>Plant Directory</h1>
            </div>
            <div className="row row-content" style={{margin:"0",}}>
                <span className="plant-bar">...</span>
            </div> 
            <div className="row">
                <div className="col-md-2 col-sm-0"></div>
                <div className="col-md-8 col-sm-12">
                {listOfPlants}
                </div>
            </div>
                
        </div>
        <Footer />
       </> );
        }
    }

export default Home;