import { useState, useEffect, Fragment } from 'react';

import { useMediaQuery } from 'react-responsive';

import MenuItem from './MenuItem';

import styles from './SideBar.module.css';

const SideBar = ({ choice, menuList, visible }) => {
  const [displayedMenuItems, setDisplayedMenuItems] = useState([]);
  const [sideBarPlace, setSideBarPlace] = useState(-35);
  const [gradient, setGradient] = useState('#5a3939');
  const [hiddenDivSpot, setHiddenDivSpot] = useState(-30);
  const [hiddenDivAlive, setHiddenDivAlive] = useState(true);

  const [menu1, setMenu1] = useState('');
  const [menu2, setMenu2] = useState('');
  const [menu3, setMenu3] = useState('');

  const [options, setOptions] = useState(['', '', '']);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const clicked = (chosen) => {
    choice(chosen);
  };

  const optionsPopIn = () => {
    const firstMenu = setTimeout(() => {
      setMenu1(<MenuItem title={menuList[0]} chosen={clicked} delay={'2s'}/>);
    }, 10);

    const secondMenu = setTimeout(() => {
      setMenu2(<MenuItem title={menuList[1]} chosen={clicked} delay={'4s'}/>);
    }, 10);

    const thirdMenu = setTimeout(() => {
      setMenu3(<MenuItem title={menuList[2]} chosen={clicked} delay={'6s'}/>);
    }, 10);
  };

  let displayedMenuList = [];
  console.log(menuList);

  useEffect(() => {
    if (visible) {
      optionsPopIn();
    }
  }, [visible]);

  const menuListToDisplay = menuList.map((menuItem) => (
    <MenuItem title={menuItem} chosen={clicked} key={Math.random()} />
  ));

  return (
    <Fragment>
      <div className={styles.sideBarDiv}>
        {menu1}
        {menu2}
        {menu3}
      </div>
    </Fragment>
  );
};

export default SideBar;
