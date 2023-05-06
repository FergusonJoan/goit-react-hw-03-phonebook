import PropTypes from 'prop-types';
import { FormButton } from './ContactListIlem.styled';

export const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      {name}: {number}
      <FormButton type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </FormButton>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
