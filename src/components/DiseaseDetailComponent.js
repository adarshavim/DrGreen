import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from './LoadingComponent';


function RenderDisease({ disease }) {
  return (
      <div className="container">
    <div className="row">
        <div className="col-12 col-md-4">
            <img src={disease.img[0]} alt={disease.name} width="100%" height="200px"/>
        </div>
        <div className="col-12 col-md-4">
            <img src={disease.img[1]} alt={disease.name} width="100%" height="200px"/>
        </div>
        <div className="col-12 col-md-4">
            <img src={disease.img[2]} alt={disease.name} width="100%" height="200px"/>
        </div>
    </div>
    <div className="row">
        <div className="col-12 col-md-4">
            <img src={disease.img[3]} alt={disease.name} width="100%" height="200px"/>
        </div>
        <div className="col-12 col-md-4">
            <img src={disease.img[4]} alt={disease.name} width="100%" height="200px"/>
        </div>
    </div>
    <div className="row">
      <h3>Description</h3><br/>
        <p>
            {disease.desc}
        </p>
    </div>
    <div className="row">
      <h3>Symptoms</h3><br/>
        <ul type="list-unstyled">
          <li>
          {disease.symptoms[0]}
          </li>
          <li>
            {disease.symptoms[1]}
            </li>
            <li>
            {disease.symptoms[2]}
            </li>
        </ul>
    </div>
    <div className="row">
      <h3>Solution</h3><br/>
      <ul type="list-unstyled">
          <li>
          {disease.solutions[0]}
          </li>
          <li>
            {disease.solutions[1]}
            </li>
        </ul>
    </div>
    <div className="row">
    <h3>Buy Links</h3><br/>
    <ul type="list-unstyled">
          <li>
          {disease.buy[0]}
          </li>
          <li>
            {disease.buy[1]}
            </li>
        </ul>
    </div>
    <div className="row">
    <h3>Readmore At</h3><br/>
        <p>
            {disease.readmore}
        </p>
    </div>
    </div>
  );
}

const DiseaseDetail = props => {
  if (props.isLoading) {
    return (
        <div className="row">
          <Loading />
        </div>
      
    );
  } else if (props.errMess) {
    return (
      
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
     
    );
  } 
  else if (props.disease != null){
    return (
        <div>
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.disease.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.disease.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row" >
          <RenderDisease disease={props.disease} />
        </div>
      </div>
    );
  }
};

export default DiseaseDetail;

