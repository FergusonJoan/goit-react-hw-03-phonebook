import PropTypes from 'prop-types';
import { FormInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      <FormInput type="text" value={value} onChange={onChange}></FormInput>
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
