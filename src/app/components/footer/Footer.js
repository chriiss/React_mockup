import React from 'react';
import Styles from "../../styles/App.module.scss";
import LogoFooterColorz from "../../assets/logo/Logo_Colorz.svg";
import LogoFooterCreated from "../../assets/logo/Logo_Created.svg";
import DataJson from "../../data/DataJson.json";

const Footer = () => {
    const dataFooter = DataJson.footerComponent;
    return(
        <div className={Styles.footer}>
            <div className={Styles.footer_logo_colorz}>
                <img src={LogoFooterColorz} alt="logo_colorz"/>
            </div>
            <div className={`${Styles.d_flex} ${Styles.fd_column} ${Styles.footer_adress}`}>
                {dataFooter.place.map((data, i) => {
                    return(
                        <div key={i}>
                             <h3>{data.city}</h3>
                            <p>{data.adress}<br></br>{data.countries}</p>
                        </div>
                    )
                })}
                <div>
                    <h3>{dataFooter.contact.title}</h3>
                    <p>{dataFooter.contact.number}<br></br>{dataFooter.contact.mail}</p>
                </div>
                <div>
                    <img src={LogoFooterCreated} alt="logo_created"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;