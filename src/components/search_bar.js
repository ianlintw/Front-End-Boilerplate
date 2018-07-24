import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div>
                <input onChange={this.onInputChange.bind(this)} />
                {/*<input onChange={event => this.setState({ term: event.target.value})}/>*/}
                input: {this.state.term}
            </div>
        );
    }

    onInputChange(event) {
        this.setState({ term: event.target.value});
    }
}

export default SearchBar;