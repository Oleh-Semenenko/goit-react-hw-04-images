import { Component } from 'react';
import ImageModal from '../ImageModal';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    return (
      <GalleryItem>
        <GalleryImage
          src={webformatURL}
          width="200"
          alt={tags}
          onClick={this.toggleModal}
        />
        {this.state.isOpen && (
          <ImageModal
            url={largeImageURL}
            description={tags}
            modalIsOpen={this.state.isOpen}
            closeModal={this.toggleModal}
          />
        )}
      </GalleryItem>
    );
  }
}

export default ImageGalleryItem;
