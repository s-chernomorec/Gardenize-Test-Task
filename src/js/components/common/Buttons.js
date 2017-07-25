import React from 'react';
import PropTypes from 'prop-types';

const Button = ({customClass, value, onClick}) => {
  return (
    <input type="button" className={`button ${customClass}`} value={value} onClick={onClick} />
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  customClass: PropTypes.string,
  value: PropTypes.string,
};

Button.defaultProps = {
  customClass: '',
  value: 'Button'
};

const MenuButton = ({customClass, value, onClick}) => {
  return (
    <Button customClass={`menu-button ${customClass}`} value={value} onClick={onClick} />
  );
};

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  customClass: PropTypes.string,
  value: PropTypes.string,
};

MenuButton.defaultProps = {
  customClass: '',
  value: 'Button'
};

const CancelButton = ({customClass, value, onClick}) => {
  return (
    <Button customClass={`cancel-button ${customClass}`} value={value} onClick={onClick} />
  );
};

CancelButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  customClass: PropTypes.string,
  value: PropTypes.string,
};

CancelButton.defaultProps = {
  customClass: '',
  value: 'Cancel'
};

const ConfirmButton = ({customClass, value, onClick}) => {
  return (
    <Button customClass={`confirm-button ${customClass}`} value={value} onClick={onClick} />
  );
};

ConfirmButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  customClass: PropTypes.string,
  value: PropTypes.string,
};

ConfirmButton.defaultProps = {
  customClass: '',
  value: 'Confirm'
};

export {MenuButton, CancelButton, ConfirmButton};
