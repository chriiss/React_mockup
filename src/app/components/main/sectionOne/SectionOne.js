import React from 'react';
import Styles from "../../../styles/App.module.scss";
import DataJson from "../../../data/DataJson.json";

const SectionOne = () => {
    const dataSectionOne = DataJson.sectionOneComponent;
    return(
        <section>
            <div className={Styles.section_one_container_title_text}>
                <div className={`${Styles.text_center} ${Styles.section_one_container_title_text_bloc_text}`}>
                    <span>{dataSectionOne.text.textOne}</span> <span className={Styles.text_upperCase}>{dataSectionOne.text.textTwo}</span> <span>{dataSectionOne.text.textThree}</span>
                </div>
                <div className={Styles.section_one_container_title_text_bloc_title}>
                    <h1 className={Styles.text_center}>{dataSectionOne.title}</h1>
                </div>
                <div className={`${Styles.section_one_container_title_text_bloc_price} ${Styles.d_flex}`}>
                    <div className={`${Styles.section_one_container_title_text_bloc_price_children} ${Styles.fontWeightFiveHundred} ${Styles.d_flex}`}>
                        <div>{dataSectionOne.price.offers}</div>
                        <div>{dataSectionOne.price.reduc}</div>
                        <div>{dataSectionOne.price.reallyPrice}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionOne;