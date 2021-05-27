import React, { Component } from 'react';
import DiseaseDetail from './DiseaseDetailComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
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
        isLoading={this.props.diseases.isLoading}
        errMess={this.props.diseases.errMess}

    />
      );
    }

    const AboutPage=()=>{
      return(<About/>);
    }
    
    const DiseaseWithId = ({match}) => {
      return(
        <DiseaseDetail  disease={this.props.diseases.diseases.filter((disease) => disease._id === match.params.diseaseId)[0]}
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
      <Route exact path="/About" component={AboutPage}/>
      <Route path='/home/:diseaseId' component={DiseaseWithId} /> 
      <Redirect to="/home" />
      </Switch>
      <Footer diseases={this.props.diseases}/>
        {/* {this.props.diseases.diseases.map(disease=>{
          return(<div>{disease._id}</div>);
        })} */}
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
