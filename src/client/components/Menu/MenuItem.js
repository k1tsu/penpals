import React from 'react';
import { StyledMenuItem } from './styles';

const MenuItem = ({ children, onClick, link = false, half = false, ...props }) => {
  const active = window.location.pathname.startsWith(link);

  const handleClick = (e) => {
    e.stopPropagation();
    if (link) {
      window.location.pathname = link;
      return;
    }
    onClick();
  };

  return (
    <StyledMenuItem
      onClick={handleClick}
      half={half}
      active={active}
      {...props}
    >
      { children }
    </StyledMenuItem>
  );
};

export default MenuItem;
