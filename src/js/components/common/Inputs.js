import React from 'react';
import PropTypes from 'prop-types';

const InputWithLabel = ({customClass, name, value, onChange}) => {
  const labelText = name[0].toUpperCase() + name.slice(1);

  return (
    <div className={`input-with-label ${customClass}`}>
      <label htmlFor={name} className="label-for-text">{labelText}</label>
      <input type="text" name={name} className="text-input" value={value} onChange={onChange} />
    </div>
  );
}

InputWithLabel.defaultProps = {
  customClass: ''
}

InputWithLabel.propTypes = {
  name: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export {InputWithLabel};
