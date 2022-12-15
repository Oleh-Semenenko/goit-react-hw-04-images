import { LoadBtn } from './Button.styled';
import PropTypes from 'prop-types';

const LoadMoreBtn = ({onClick}) => {
    return (
        <LoadBtn type="button" onClick={() => onClick()}>Load more</LoadBtn>
    )
}

export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};