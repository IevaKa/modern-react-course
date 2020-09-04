import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        term: ""
    }

    handleChange = event => {
        const term = event.target.value;
        this.setState({ term })
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video search</label>
                            <input 
                            type="text"
                            value={this.state.term}
                            onChange={this.handleChange}
                            />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;