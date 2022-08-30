import React from 'react';
import Styles from "../../../../styles/App.module.scss";
import PaginationIcon from './paginationIcon/PaginationIcon';
import DataJson from "../../../../data/DataJson.json";


const Carrousel = () => {
    const carrouselData = DataJson.sectionTwoComponent;
    return(
        <>
            <div className={`${Styles.section_two_container_carrousel} ${Styles.d_flex}`}>
                {carrouselData.carrousel.map((data, i) => {
                    return(
                        <img key={i} src={require("../../../../assets/"+data.path)} id={data.idName} className={Styles.d_flex} alt="img_carrousel"/>
                    )
                })}
                <div className={`${Styles.section_two_container_carrousel_pagination} ${Styles.d_flex}`}>
                    {carrouselData.carrouselPagination.map((data, i) => {
                        return(
                            <div key={i}>
                                <a href={"#"+data.idNameLink}><PaginationIcon/></a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Carrousel;