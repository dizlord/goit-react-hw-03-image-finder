import { Component } from "react";

import {SearchBar} from './SearchBar';

export class App extends Component  {
  state = {
    images: [],
    query: '',
  }

  componentDidUpdate = (_,prevState) => {
    if (this.state.query !== prevState.query) {
      
    }
  }

  handleSubmit = query => {
    this.setState({query});
  }

  render() {
    <>
      <SearchBar onSubmit={ this.handleSubmit } />
    </>
  }
};
