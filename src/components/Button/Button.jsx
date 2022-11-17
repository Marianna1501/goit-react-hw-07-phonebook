import PropTypes from 'prop-types';
import Buttons from './Button.styled';
import { useDeleteContactMutation } from 'redux/contactSlice';
import ClipLoader from 'react-spinners/ClipLoader';

const Button = ({ id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <Buttons type="button" onClick={() => deleteContact(id)}>
      {isLoading ? <ClipLoader /> : <span>Delete</span>}
    </Buttons>
  );
};

Button.propTypes = {
  id: PropTypes.string,
};

export default Button;
