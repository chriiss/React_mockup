import React from 'react';
import LogoNavbar from "../../../../assets/logo/Vision.R.svg";
import Styles from '../../../../styles/App.module.scss';

const Logo = () => {
    return(
        <>
            <li className={Styles.navbar_list_item}>
                <img src={LogoNavbar} alt="Vision R"/>
            </li>
        </>
    )
}

export default Logo;