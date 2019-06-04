import React,{Component} from 'react';
import SeasonDisplay from './Components/SeasonDisplay';
import Loading from './Components/Loading';
import './App.css'

class App extends Component {
  state = {lat:null,errorMessage:'',month:(new Date().getMonth())+1};
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => { this.setState({ lat:position.coords.latitude }) },
      (err) => { this.setState({errorMessage:err.message}) }
    )
  }
  renderBody = () => {
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>
    }
    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay latitude={this.state.lat} month={this.state.month}/>
    }
      return <Loading input='Waiting For Your Permission...'/>
  }
  render(){
    return(
    <div className="App-container">
      {this.renderBody()}
    </div>)
  }
}
export default App;
