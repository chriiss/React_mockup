import React from 'react';
import Styles from "../../../styles/App.module.scss";
import DataJson from "../../../data/DataJson.json";

const SectionFour = () => {
    const dataSectionFour = DataJson.sectionFourComponent;
    return(
        <section>
            <div className={`${Styles.text_center} ${Styles.bloc_title}`}>
                <h2>{dataSectionFour.title}</h2>
            </div>
            <div className={`${Styles.d_flex} ${Styles.section_four_container}`}>
                {dataSectionFour.card.map((data, i) => {
                    return(
                        <div key={i} className={`${Styles.text_center} ${Styles.section_four_container_card}`}>
                            <img src={require("../../../assets/"+data.path)} alt="card_img"/>
                            <h3>{data.article}</h3>
                            <p>{data.price}</p>
                        </div>

                    )
                })}
            </div>
        </section>
    )
}

export default SectionFour;