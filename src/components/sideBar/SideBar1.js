import { useState, useEffect, Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import MenuItem from './MenuItem';
import styles from './SideBar.module.css';

const SideBar = ({ choice, menuList, visible }) => {
  const [displayedMenuList, setDisplayedMenuList] = useState([]);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const clicked = (chosen) => {
    choice(chosen);
  };

  useEffect(() => {
    if (visible) {
      const timeouts = [];

      // Loop through the menuList and add timeouts to update the displayedMenuList
      menuList.forEach((menuItem, index) => {
        timeouts.push(
          setTimeout(() => {
            setDisplayedMenuList((prevList) => [
              ...prevList,
              <MenuItem title={menuItem} chosen={clicked} key={index} />,
            ]);
          }, index * 300)
        );
      });

      // Clear all timeouts when the component unmounts or when menuList changes
      return () => {
        timeouts.forEach((timeout) => clearTimeout(timeout));
      };
    }
  }, [visible, menuList, clicked]);

  return (
    <Fragment>
      <div className={styles.sideBarDiv}>
        {displayedMenuList.map((menuItem) => menuItem)}
      </div>
    </Fragment>
  );
};

export default SideBar;
