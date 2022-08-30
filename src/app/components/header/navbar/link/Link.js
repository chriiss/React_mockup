import React from 'react';
import Styles from '../../../../styles/App.module.scss';

const Link = (props) => {
    const { navbarData, menuOpen } = props;
    return(
        <>
            {navbarData.map(data => {
                return(
                    <li key={data.name} className={`${Styles.navbar_list_item} ${Styles.navbar_list_item_mobile} ${menuOpen ? Styles.show_menu : ""}`}>
                        <a href={data.link} className={Styles.navbar_list_item_link}>{data.name}</a>
                    </li>
                )
            })}
        </>
    )
}

export default Link;