import { Component } from 'react';

import { fetchImages } from 'utils/api';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './imageGallery/imageGallery';
import { LoadMore } from './LoadMore/LoadMore';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
  };

  componentDidUpdate = (_, prevState) => {
    this.setState();
    if (this.state.query !== prevState.query || this.state.page !== prevState.page) {
      this.setState({isLoading: true});
      fetchImages(this.state.query, this.state.page).then(images => {
        this.setState(prevState => ({
          images:
            this.state.page === 1
              ? [...images]
              : [...prevState.images, ...images],
        }))
      }).finally(() => {
        this.setState({isLoading: false});
      });
    }
  };

  handleSubmit = query => {
    this.setState({ query, page: 1, });
  };

  handleLoadMore = () => {
    this.setState(state => ({page: state.page + 1, }));
  }

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        { this.state.isLoading && <Loader /> }
        <ImageGallery images={this.state.images} />
        {!!this.state.images.length && <LoadMore onLoadMore={ this.handleLoadMore } /> }
      </>
    );
  }
}
