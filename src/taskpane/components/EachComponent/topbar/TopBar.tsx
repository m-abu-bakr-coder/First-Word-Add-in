/* eslint-disable prettier/prettier */
import * as React from "react";
import { makeStyles } from "@fluentui/react-components";
import { Link, useLocation } from "react-router-dom";


const useStyles = makeStyles({
  outerWrapper: {
    display: "flex",
    flexDirection: "column",
    columnGap: "5px",
  },
  innerWrapper: {
    display: "flex",
  },
  linkStyle: {
    flex: "auto",
    minWidth: "10px",
    maxWidth: "auto",
    backgroundColor: "#0f6cbd",
    borderRadius: "0px",
    color: "white",
    width: "auto",
    textDecoration: "none",  
    display: "flex",         
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 20px",   
    '&:active': {
      backgroundColor: "#034b8e",
    },
  },
  activeLinkStyle: {
    backgroundColor: "#034b8e", 
  },
});

export const TopBar = () => {
  const styles = useStyles();
  const location = useLocation();

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <Link 
          to="/" 
          className={`${styles.linkStyle} ${location.pathname === "/" && styles.activeLinkStyle}`}
        >
          Start
        </Link>
        <Link 
          to="/pitchmark" 
          className={`${styles.linkStyle} ${location.pathname === "/pitchmark" && styles.activeLinkStyle}`}
        >
          Pitchmark
        </Link>
        <Link 
          to="/variables" 
          className={`${styles.linkStyle} ${location.pathname === "/variables" && styles.activeLinkStyle}`}
        >
          Variables
        </Link>
      </div>
    </div>
  );
};
