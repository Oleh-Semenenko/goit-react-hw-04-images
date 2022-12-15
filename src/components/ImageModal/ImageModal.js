import Modal from 'react-modal';
import { LargeImage, modalStyles } from './ImageModal.styled';
import PropTypes from 'prop-types';

Modal.setAppElement('#root');


const ImageModal = ({ url, description, modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => closeModal()}
      style={modalStyles}
    >
      <LargeImage src={url} alt={description} />
    </Modal>
  );
};

export default ImageModal;

ImageModal.propTypes = {
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
