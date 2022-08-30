import React from 'react';
import Carrousel from "./carrousel/Carrousel";
import UseModal from './modal/UseModal';
import Styles from "../../../styles/App.module.scss";
import DataJson from "../../../data/DataJson.json";


const SectionTwo = () => {
    const dataSectionTwo = DataJson.sectionTwoComponent;
    return(
        <section>
            <div className={`${Styles.section_two_container} ${Styles.d_flex} ${Styles.fontWeightFiveHundred}`}>
                <div className={`${Styles.section_two_container_text} ${Styles.text_center}`}>
                    <p>{dataSectionTwo.text.paragraphOne}</p>
                    <p>{dataSectionTwo.text.paragraphTwo}</p>
                    <p>{dataSectionTwo.text.paragraphThree}</p>
                    <p>{dataSectionTwo.text.paragraphFour}</p>
                </div>
                <div className={`${Styles.section_two_container_button} ${Styles.d_flex}`}>
                    <UseModal/>
                </div>
                <Carrousel/>
            </div>
        </section>
    )
}

export default SectionTwo;