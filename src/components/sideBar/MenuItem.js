import { useState, useEffect } from 'react';

import { useMediaQuery } from 'react-responsive';

import deskStyles from './DeskMenuItem.module.css';
import phoneStyles from './PhoneMenuItem.module.css';

const MenuItem = ({ chosen, title }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const styles = !isMobile ? deskStyles : phoneStyles;

  const clickHandler = () => {
    chosen(title);
  };

  return (
    <p onClick={clickHandler} className={styles.sideBarItem}>
      {title}
    </p>
  );
};

export default MenuItem;
