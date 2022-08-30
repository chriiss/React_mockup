import React from 'react';
import imgSectionThree from "../../../assets/Rectangle.svg";
import lockIcon from "../../../assets/icon/Cadenas_icon.svg";
import Styles from "../../../styles/App.module.scss";
import DataJson from "../../../data/DataJson.json";

const SectionThree = () => {
    const dataSectionThree = DataJson.sectionThreeComponent;
    return(
        <section>
            <div className={`${Styles.d_flex} ${Styles.fd_column} ${Styles.section_three_container}`}>
                <div className={Styles.section_three_container_img}>
                    <img src={imgSectionThree} alt="section_three_img"/>
                </div>
                <div className={Styles.section_three_container_text}>
                    <img src={lockIcon} alt="lock_icon"/>
                    <h2>{dataSectionThree.title}</h2>
                    <p>{dataSectionThree.paragraph}</p>
                </div>
            </div>
        </section>
    )
}

export default SectionThree;