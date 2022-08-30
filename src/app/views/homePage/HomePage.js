import React from 'react';
import Navbar from '../../components/header/navbar/Navbar';
import SectionOne from '../../components/main/sectionOne/SectionOne';
import SectionTwo from '../../components/main/sectionTwo/SectionTwo';
import SectionThree from '../../components/main/sectionThree/SectionThree';
import SectionFour from '../../components/main/sectionFour/SectionFour';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
    return(
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <SectionOne/>
                <SectionTwo/>
                <SectionThree/>
                <SectionFour/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default HomePage;