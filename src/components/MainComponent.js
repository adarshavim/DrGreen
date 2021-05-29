import React, { Component } from 'react';
import PlantDetail from './PlantComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';

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
    
    const Plant= ({match}) => {
      return(
        <PlantDetail  plant={this.props.diseases.diseases.filter((disease) => disease._id === match.params.plantId)[0]}
        isLoading={this.props.diseases.isLoading}
        errMess={this.props.diseases.errMess}
        diseases={this.props.diseases}
      />
      );
    };
    return (
      <div className="body">
        <Header />
       
      <Switch>
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/About" component={AboutPage}/>
      <Route path='/home/:plantId' component={Plant} />
      <Redirect to="/home" />
      </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
