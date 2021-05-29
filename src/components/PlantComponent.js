import React from "react";
import { Loading } from './LoadingComponent';
import {Card,CardImg,Media} from 'reactstrap';
import {Link} from 'react-router-dom'
import Footer from './FooterComponent';
function RenderImage({plantimg,plantname}){
  return (
    <>
      <Card className="card">
        <CardImg width="100%" src={plantimg} alt={plantname} className="card-img"/>
      </Card>
    </>
  );
}

function RenderDesc({desc}){
  return (
    <div className="row">
    <div>
      <h3>Description</h3><br/>
        <div>
            {desc}
        </div>
      </div>
    </div>
  )
}
function RenderDiseaseCard({dis}){
  return (
      <div style={{border:"2px solid white",width:"100%",backgroundColor:"#00b159"}}>
      <Link to={`/home/${dis._id}`}>
      <Media tag="li" style={{padding:"1px",border:"1px solid black"}}>
          <Media left  middle>
              <Media object src={dis.img[2]} alt={dis.diseaseName}  className="diseaseImg"/>
          </Media>
          <Media body className="ml-5">
              <Media heading style={{paddingTop:"3%",color:"black"}}>{dis.diseaseName}</Media>
          </Media>
      </Media>
      </Link>
  </div>  );
 }
 function RenderDisease({disease}){
        return (<>
          <div className="row">
            <h1>{disease.diseaseName}</h1>
          </div>
        <div className="row">
            {disease.img.map(image=>{
              return (
                <RenderImage plantimg={image} plantname={disease.plant}/>
              )
            })}
        </div>
        
        <div className="row" style={{marginTop:"40px"}}>
            <RenderDesc desc={disease.desc}/>
        </div>

        <div className="row">
        <div className="row">
            <div>
            <h3>Symptoms</h3><br/>
              1. {disease.symptoms[0]}<br/><br/>
              2. {disease.symptoms[1]}<br/><br/>
              3. {disease.symptoms[2]}<br/><br/>
            </div>
        </div>
        </div>
        <div className="row">
        <div className="row">
            <div>
            <h3>Pesticides</h3><br/>
              1. {disease.pesticides[0]}<br/><br/>
              2. {disease.pesticides[1]}<br/><br/>
            </div>
        </div>
        </div>
        <div className="row">
        <div className="row">
            <div>
            <h3>Buy Links</h3><br/>
              1. <a href={disease.buyAt[0]}>{disease.buyAt[0]}</a><br/><br/>
              2. <a href={disease.buyAt[1]}>{disease.buyAt[1]}</a><br/><br/>
            </div>
        </div>
        </div>
        <div className="row">
          <div className="row">
          <div>
          <h3>Readmore At</h3><br/>
              <p>
                  <a href={disease.readMore}>{disease.readMore}</a>
              </p>
          </div>
          </div>
        </div>
        </>
      );
 }

function RenderPlant({ plants,diseases }) {
  return (<>
      <div className="row">
        <h1>{plants.plant}</h1>
      </div>
    <div className="row">
        {plants.img.map(image=>{
          return (
            <RenderImage plantimg={image} plantname={plants.plant}/>
          )
        })}
    </div>
    
    <div className="row" style={{marginTop:"40px"}}>
        <RenderDesc desc={plants.desc}/>
    </div>

    <div className="row">
    <div className="row">
        <div>
        <h3>Symptoms</h3><br/>
              1. {plants.symptoms[0]}<br/><br/>
              2. {plants.symptoms[1]}<br/><br/>
              3. {plants.symptoms[2]}<br/><br/>
        </div>
    </div>
    </div>
    <div className="row">
      <div className="row">
      <div>
      <h3>Readmore At</h3><br/>
          <p>
              <a href={plants.readMore}>{plants.readMore}</a>
          </p>
      </div>
      </div>
    </div>
    <div className="row">
        <h2 style={{margin:"1%",display:"flex",justifyContent:"center"}}>Diseases in {plants.plant}</h2>
            {diseases.map(disease=>{
              if(disease.plant===plants.plant&&disease.diseaseName!==plants.diseaseName){
                return (<><RenderDiseaseCard dis={disease}/></>)
              }
              return <></>
            }
            )}
          </div>
    </>
  );
}

const PlantDetail = props => {
  if (props.isLoading) {
    return (<>
          <Loading />
        </>
      
    );
  } else if (props.errMess) {
    return (
      
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
     
    );
  } 
  else if (props.plant != null){
    if(props.plant.diseaseName==="Healthy (No Disease)"){
        return (
          <>
          <div className="plants">
              <RenderPlant plants={props.plant} diseases={props.diseases.diseases} />
          </div>
          <Footer/>
          </>
        );
  }
  return(
    <>
    <div className="plants">
        <RenderDisease disease={props.plant} />
    </div>
    <Footer/>
    </>
  )
}
};

export default PlantDetail;

