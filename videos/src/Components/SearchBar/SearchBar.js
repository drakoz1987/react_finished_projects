import React, {Component} from 'react';

class SearchBar extends Component {
    state = {
        term:''
    };
    onInputChange = (event) => {
        this.setState({term:event.target.value});
    };
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };
    render() {
        return (
            <div className='search-bar ui segment search-bar'>
                <form className='ui form search-form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label htmlFor='search-input' className='label'>Video Search
                            <input
                                type='text'
                                name='search-bar-input'
                                className='search-bar-input'
                                id='search-input'
                                placeholder='Enter Your Search Query!'
                                value={this.state.term}
                                onChange={this.onInputChange}
                            />
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;