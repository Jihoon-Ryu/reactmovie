import React from 'react'; 
import PropTypes from "prop-types";
//import logo from './logo.svg';
//import './App.css';

class App extends React.Component {
  /*Mount: constructor => render => componentDidMount
  Updating by setState => render => componentDidUpdate 
  */ 
  state = {
   isLoading: true,
   movies: []
  };
  
  render() {
    const { isLoading } = this.state;
    return (
     <div>
       {isLoading ? "Loading": "We are ready"}
     </div>
    )}
  
  componentDidMount() {
    setTimeout(()=> {
      this.setState({isLoading:false})
    }, 5000)
  }  
}


export default App;
