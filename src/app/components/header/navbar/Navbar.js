import React, {useState} from 'react';
import Link from './link/Link';
import Logo from "./logo/Logo";
import Styles from '../../../styles/App.module.scss';
import DataJson from "../../../data/DataJson.json";
import MenuMobile from './menuMobile/MenuMobile';


const Navbar = () => {
    const navbarData = DataJson.navbarComponent;
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    }
    return(
        <nav className={Styles.navbar}>
            <MenuMobile handleToggle={handleToggle} menuOpen={menuOpen}/>
            <ul className={`${Styles.navbar_list} ${Styles.d_flex} ${Styles.fd_column} ${Styles.fontWeightFourHundred}`}>
                <Logo/>
                <Link navbarData={navbarData} menuOpen={menuOpen}/>
            </ul>
        </nav>
    )
}


export default Navbar;