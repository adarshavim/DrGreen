import React from "react";
import { Loading } from './LoadingComponent';
import {Card,CardImg,Media} from 'reactstrap';
import {Link} from 'react-router-dom'

function RenderImage({img,plant}){
  return (
    <>
      <Card className="card">
        <CardImg width="100%" src={img} alt={plant} className="card-img"/>
      </Card>
    </>
  );
}

function RenderDesc({desc}){
  return (
    <div className="row">
    <p>
      <h3>Description</h3><br/>
        <p>
            {desc}
        </p>
      </p>
    </div>
  )
}
function RenderDiseaseCard({disease}){
  return (
      <div style={{marginLeft:"7%",marginBottom:"1%",border:"2px solid white",width:"100%"}}>
      <Link to={`/home/${disease._id}`}>
      <Media tag="li" style={{padding:"1px",border:"1px solid black"}}>
          <Media left  middle>
              <Media object src={disease.img[2]} alt={disease.diseaseName}  className="diseaseImg"/>
          </Media>
          <Media body className="ml-5">
              <Media heading style={{paddingTop:"3%"}}>{disease.diseaseName}</Media>
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
                <RenderImage img={image} plant={disease.plant}/>
              )
            })}
        </div>
        
        <div className="row">
            <RenderDesc desc={disease.desc}/>
        </div>

        <div className="row">
        <div className="row">
            <p>
            <h3>Symptoms</h3><br/>
              <p>1. {disease.symptoms[0]}</p>
              <p>2. {disease.symptoms[1]}</p>
              <p>3. {disease.symptoms[2]}</p>
            </p>
        </div>
        </div>
        <div className="row">
        <div className="row">
            <p>
            <h3>Pesticides</h3><br/>
              <p>1. {disease.pesticides[0]}</p>
              <p>2. {disease.pesticides[1]}</p>
            </p>
        </div>
        </div>
        <div className="row">
        <div className="row">
            <p>
            <h3>Buy Links</h3><br/>
              <p>1. <a href={disease.buyAt[0]}>{disease.buyAt[0]}</a></p>
              <p>2. <a href={disease.buyAt[1]}>{disease.buyAt[1]}</a></p>
            </p>
        </div>
        </div>
        <div className="row">
          <div className="row">
          <p>
          <h3>Readmore At</h3><br/>
              <p>
                  <a href={disease.readMore}>{disease.readMore}</a>
              </p>
          </p>
          </div>
        </div>
        </>
      );
 }

function RenderPlant({ plant,diseases }) {
  return (<>
      <div className="row">
        <h1>{plant.plant}</h1>
      </div>
    <div className="row">
        {plant.img.map(image=>{
          return (
            <RenderImage img={image} plant={plant.plant}/>
          )
        })}
    </div>
    
    <div className="row">
        <RenderDesc desc={plant.desc}/>
    </div>

    <div className="row">
    <div className="row">
        <p>
        <h3>Symptoms</h3><br/>
          <p>1. {plant.symptoms[0]}</p>
          <p>2. {plant.symptoms[1]}</p>
          <p>3. {plant.symptoms[2]}</p>
        </p>
    </div>
    </div>
    <div className="row">
      <div className="row">
      <p>
      <h3>Readmore At</h3><br/>
          <p>
              <a href={plant.readMore}>{plant.readMore}</a>
          </p>
      </p>
      </div>
    </div>
    <div className="row">
        <h2 style={{marginLeft:"40%",marginBottom:"1%"}}>Disease in this {plant.plant}</h2>
            {diseases.map(disease=>{
              if(disease.plant===plant.plant&&disease.diseaseName!==plant.diseaseName){
                return (<><RenderDiseaseCard disease={disease}/></>)
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
            <div className="container" style={{paddingTop:"5%"}}>
              <div><RenderPlant plant={props.plant} diseases={props.diseases.diseases} /></div>
            </div>
          </>
        );
  }
  return(
    <>
      <div className="container" style={{paddingTop:"5%"}}>
              <div><RenderDisease disease={props.plant} /></div>
      </div>
    </>
  )
}
};

export default PlantDetail;

