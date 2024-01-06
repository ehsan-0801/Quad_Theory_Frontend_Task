import React from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import PopularItems from './Components/PopularItems';
import RecommendItems from './Components/RecommendItems';
import Footer from './Components/Footer';

const MainPage = () => {
    return (
        <>
            <div className='mx-4 lg:mx-40'>
                <Navbar />
                <Banner />
                <PopularItems />
                <RecommendItems />
            </div>
            <Footer />
        </>
    );
};

export default MainPage;