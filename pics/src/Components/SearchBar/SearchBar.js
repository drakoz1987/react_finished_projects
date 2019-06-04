import React,{Component} from 'react';
import './SearchBar.css';



class SearchBar extends Component {
  state = {
    searchQuery:'',
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
  };
  render(){
    return (
      <div className='ui segment search-bar'>
        <form className='ui form search-form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label htmlFor='search-input' className='label'>Image Search
              <input
                type='text'
                name='search-bar-input'
                className='search-bar-input'
                id='search-input'
                placeholder='Enter Your Search Query!'
                value={this.state.searchQuery}
                onChange={(e)=>this.setState({searchQuery:e.target.value})}
              />
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
