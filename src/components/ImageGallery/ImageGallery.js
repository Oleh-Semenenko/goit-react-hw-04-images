import ImageGalleryItem from '../ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import PropTypes, { arrayOf} from 'prop-types';

const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        );
      })}
    </Gallery>
  );
};


export default ImageGallery;

ImageGallery.propTypes = {
  images: arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    })
  ),
};

