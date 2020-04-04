import React from 'react';
import StyledMenu from './styles';

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
    <StyledMenu.Item
      onClick={handleClick}
      half={half}
      active={active}
      {...props}
    >
      { children }
    </StyledMenu.Item>
  );
};

export default MenuItem;
