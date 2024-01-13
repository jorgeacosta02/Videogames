import React from "react";
import NavBar from "./navBar";
import Cards from "./cards";
import LeftBar from "./leftBar";
import styles from './home.module.css';
import { useSelector } from "react-redux";


const Main = () => {
    const display = useSelector(state => state.display);
    return(
        <div className={styles.main}>
            <NavBar />
            <div className={styles.under}>
                <LeftBar />
                <Cards display={display}/>
            </div>
        </div>
    )
};

export default Main;
