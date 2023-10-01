import { useState, useEffect, Fragment } from "react";

import { useMediaQuery } from "react-responsive";

import MenuItem from "./MenuItem";
import HiddenDiv from "./HiddenDiv";

import styles from "./SideBar.module.css";

const SideBar = (props) => {
  const [sideBarPlace, setSideBarPlace] = useState(-35);
  const [gradient, setGradient] = useState("#5a3939");
  const [hiddenDivSpot, setHiddenDivSpot] = useState(-30);
  const [hiddenDivAlive, setHiddenDivAlive] = useState(true);

  const [menu1, setMenu1] = useState("");
  const [menu2, setMenu2] = useState("");
  const [menu3, setMenu3] = useState("");

  const [options, setOptions] = useState(["", "", ""]);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const clicked = (choice) => {
    props.choice(choice);
  };

  const list = <MenuItem title={"About Me"} chosen={clicked} />;

  const optionsPopIn = () => {
    const firstMenu = setTimeout(() => {
      setMenu1(<MenuItem title={props.menuList[0]} chosen={clicked} />);
    }, 1000);

    const secondMenu = setTimeout(() => {
      setMenu2(<MenuItem title={props.menuList[1]} chosen={clicked} />);
    }, 1300);

    const thirdMenu = setTimeout(() => {
      setMenu3(<MenuItem title={props.menuList[2]} chosen={clicked} />);
    }, 1600);
  };

  useEffect(() => {
    if (props.visible) {
      optionsPopIn();

      setHiddenDivAlive(true);
      setTimeout(() => {
        setHiddenDivSpot(10);
      }, 100);

      setSideBarPlace(5);
      setTimeout(() => {
        // setGradient("#565655");
        setGradient("#5a3939");
      }, 500);
    } else {
      setMenu1("");
      setMenu2("");
      setMenu3("");
      setSideBarPlace(-50);
      setHiddenDivAlive(false);
      setHiddenDivSpot(-20);
      setGradient("#5a3939");
    }
  }, [props.visible]);

  const menuListToDisplay = props.menuList.map((menuItem) => (
    <MenuItem title={menuItem} chosen={clicked} key={Math.random()} />
  ));

  return (
    <Fragment>
      {/* {hiddenDivAlive && <HiddenDiv placement={hiddenDivSpot} />} */}

      <div
        className={styles.sideBarDiv}
        style={{
          // transform: `translateX(${sideBarPlace}vw)`,
          // background: `linear-gradient(to Right, white, ${gradient})`,
          // width: !isMobile ? "22vw" : "40vw",
          // marginTop: !isMobile ? "20vh" : "30vh",
        }}
      >
        {menu1}
        {menu2}
        {menu3}
      </div>
    </Fragment>
  );
};

export default SideBar;
