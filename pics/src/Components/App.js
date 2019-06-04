import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import './App.css';
import ImageList from './ImageList/ImageList';
import SearchBar from './SearchBar/SearchBar';


class App extends Component {
  state = {
      images : [],
  };
  onSearchSubmit = async (term) => {
//root url for the API is https://api.unsplash.com/
      const response = await unsplash.get('/search/photos',{
      params:{query:term},

    });
      this.setState({images:response.data.results});
  }

  render() {

    return (
      <div className='ui container app-container'>
        < SearchBar onSubmit={this.onSearchSubmit} />
        < ImageList imageList={this.state.images}/>
      </div>
    )
  }
}

export default App;
