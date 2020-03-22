import React from 'react';
import StyledDropdown from './styles';

const Dropdown = ({ visible, children, ...props }) => (
  <StyledDropdown visible={visible} {...props}>
    { children }
  </StyledDropdown>
);

export default Dropdown;
