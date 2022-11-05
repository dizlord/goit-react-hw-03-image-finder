import { Component } from 'react';

export class SearchBar extends Component {
  state = {
    query: '',
  };

  handleChange = (e) => {
    const query = e.target.value;
    this.setState({query});
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
  }

  render() {
    return (
      <header className="searchbar">
        <form className="form">
          <button type="submit" class="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            name='query'
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
