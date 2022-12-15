import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import LoadMoreBtn from 'components/Button';
import GallerySkeleton from 'components/Loader';
import { fetchImages } from 'services/fetch';
import { Container } from './App.styled';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      try {
        if (searchQuery !== '') {
          this.setState({
            isLoading: true,
          });
          const searchImages = await fetchImages(searchQuery, page);
          if (searchImages.length === 0) {
            toast.error(
              `Sorry, there are no images for your search query: ${searchQuery}! Please, change your request. `
            );
          }
          this.setState(({ images }) => {
            return {
              images: [...images, ...searchImages],
            };
          });
        }
      } catch (error) {
        toast.error('Something went wrong');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSearchSubmit = searchQuery => {
    this.setState({
      images: [],
      page: 1,
      searchQuery,
    });
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        {images.length > 0 && <LoadMoreBtn onClick={this.loadMore} />}
        {isLoading && <GallerySkeleton />}
        <Toaster position="top-right" />
      </Container>
    );
  }
}

export default App;
