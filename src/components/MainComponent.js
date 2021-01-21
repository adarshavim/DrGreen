import React, { Component } from 'react';
import DiseaseDetail from './DiseaseDetailComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchDiseases } from '../redux/ActionCreators';


const mapStateToProps=state=>{
  return {
    diseases:state.diseases
  }
}
const mapDispatchToProps = dispatch => ({
  fetchDiseases: () => { dispatch(fetchDiseases())}
});


class Main extends Component {

  componentDidMount() {
    this.props.fetchDiseases();
  }
  
  render() {

   const HomePage = () => {
      return(
        <Home 
        diseases={this.props.diseases}
        diseasesLoading={this.props.diseases.isLoading}
        diseasesErrMess={this.props.diseases.errMess}

    />
      );
    }
    
    const DiseaseWithId = ({match}) => {
      return(
        <DiseaseDetail  disease={this.props.diseases.diseases.filter((disease) => disease.id === parseInt(match.params.diseaseId,10))[0]}
        isLoading={this.props.diseases.isLoading}
        errMess={this.props.diseases.errMess}
      />
      );
    };
    return (
      <div>
       <Header />
      <Switch>
      <Route exact path="/home" component={HomePage} />
      <Route path='/home/:diseaseId' component={DiseaseWithId} /> 
      <Redirect to="/home" />
      </Switch>
      <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
