import React from 'react';
import { Media,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { Loading } from './LoadingComponent';
import {Link} from 'react-router-dom';
    function RenderListItem ({disease}) {
        return (
            <Media tag="li" key={disease._id} className="col-12 mt-5" >
            <Link to={`/home/${disease._id}`}>
            <Media body className="ml-5 pl-2 block-example border border-success p-1">
                <Media heading className="block-example border border-success p-1" >{disease.diseaseName}</Media>
                <img className="rounded mb-0 sm-show" src={disease.img[1]} width="20%" height="250px" alt={disease.diseaseName} padding="2px"/>
                <img className="rounded mb-0 sm-hide m-show" src={disease.img[0]} width="20%" height="250px" alt={disease.diseaseName}/>
                <img className="rounded mb-0 sm-hide" src={disease.img[2]} width="20%" height="250px" alt={disease.diseaseName}/>
                <img className="rounded mb-0 sm-hide" src={disease.img[3]} width="20%" height="250px" alt={disease.diseaseName}/>
                <img className="rounded mb-0 sm-hide" src={disease.img[4]} width="20%" height="250px" alt={disease.diseaseName}/>
            </Media>
            </Link>
        </Media>
        );
    }

    const Home = (props) => {

    const listofdiseases = props.diseases.diseases.map((disease) => {
            return (
                <div className="row"  key={disease._id}>
                    <RenderListItem disease={disease} />
                </div>
            );
        });
        if (props.diseases.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
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
            <div>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Diseases</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {listofdiseases}
                </div>
            </div>
        );
        }
    }

export default Home;