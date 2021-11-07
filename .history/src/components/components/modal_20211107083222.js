import React from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import styles from "./menu.module.css";


const Menu = ({ showMenu, setShowMenu, onClick }) => {
  const animation = useSpring({
    config: {
      duration: 250,
    },
    transform: showMenu ? `translateX(0%)` : `translateX(100%)`,
  });

  return (
    <>
      {showMenu ? (
        <div className={styles.wrapper} onClick={onClick}>
          <animated.div style={animation}>
            <div className={styles.menu}>
              <Link to={"/team"}>
                <h3  className={styles.h3}>
                  Our <span>TEAM </span>
                </h3>
              </Link>
              <Link to={"/services"}>
                <h3 className={styles.h3}>
                  Our <span>SERVICES</span>
                </h3>
              </Link>
              <Link to={"/location"}>
                <h3  className={styles.h3}>
                  Our <span>LOCATION</span>
                </h3  >
              </Link>
              <Link to={"/disclaimer"}>
                <h3  className={styles.h3}>
                  Our <span>DISCLAIMER</span>
                </h3>
              </Link>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};

export default Menu;