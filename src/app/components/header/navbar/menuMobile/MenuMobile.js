import React from 'react';
import Styles from '../../../../styles/App.module.scss';
import OpenIcon from './openIcon/OpenIcon';
import CloseIcon from './closeIcon/CloseIcon';

const MenuMobile = (props) => {
    const {handleToggle, menuOpen} = props;
    return(
        <>
            <button type="button" className={Styles.navbar_mobile_menu_button} onClick={handleToggle}>{menuOpen ? <CloseIcon/> : <OpenIcon/>}</button>
        </>
    )
}

export default MenuMobile;