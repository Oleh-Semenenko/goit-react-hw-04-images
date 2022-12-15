import { useState } from 'react';
import ImageModal from '../ImageModal';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

function ImageGalleryItem({ webformatURL, largeImageURL, tags }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <GalleryItem>
      <GalleryImage
        src={webformatURL}
        width="200"
        alt={tags}
        onClick={toggleModal}
      />
      {isOpen && (
        <ImageModal
          url={largeImageURL}
          description={tags}
          modalIsOpen={isOpen}
          closeModal={toggleModal}
        />
      )}
    </GalleryItem>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
