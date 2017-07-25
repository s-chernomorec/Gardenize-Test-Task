import React from 'react';
import PropTypes from 'prop-types';

const Button = ({customClass, value, onClick}) => {
  return (
    <input type="button" className={`button ${customClass}`} value={value} onClick={onClick} />
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
  customClass: '',
  value: 'Button'
}

const MenuButton = ({customClass, value, onClick}) => {
  return (
    <Button customClass={`menu-button ${customClass}`} value={value} onClick={onClick} />
  );
}

MenuButton.defaultProps = {
  customClass: '',
  value: 'Button'
}

const CancelButton = ({customClass, value, onClick}) => {
  return (
    <Button customClass={`cancel-button ${customClass}`} value={value} onClick={onClick} />
  );
}

CancelButton.defaultProps = {
  customClass: '',
  value: 'Cancel'
}

const ConfirmButton = ({customClass, value, onClick}) => {
  return (
    <Button customClass={`confirm-button ${customClass}`} value={value} onClick={onClick} />
  );
}

ConfirmButton.defaultProps = {
  customClass: '',
  value: 'Confirm'
}

export {MenuButton, CancelButton, ConfirmButton};
