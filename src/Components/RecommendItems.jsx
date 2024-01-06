import React, { useEffect, useState } from 'react';
import useItems from './hooks/useItems';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Items from './items';

const RecommendItems = () => {
    const [items] = useItems();
    const Recommended = items.filter(item => item.IsRecommended === true);

    const [itemsPerSlide, setItemsPerSlide] = useState(5);
    const totalSlides = Math.ceil(Recommended.length / itemsPerSlide);

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setItemsPerSlide(3);
            } else {
                setItemsPerSlide(4);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    const startIndex = currentSlide * itemsPerSlide;
    const endIndex = (startIndex + itemsPerSlide) % Recommended.length;
    const currentItems = Recommended.slice(startIndex, endIndex >= startIndex ? endIndex : Recommended.length);


    return (
        <>

            <div className="product-carousel my-24">
                <div className="carousel-container">
                    <div className=''>
                        <span className='font-bold '>Recommended</span>
                        <button className="btn-add-more">Add More</button>
                    </div>
                    <div className="carousel-track" >
                        { currentItems.map((item, index) => (
                            <div key={ index } className="carousel-item">
                                <Items key={ item.Id } name={ item.Name } img={ item.ImageUrl }></Items>
                            </div>
                        )) }
                    </div>
                </div>
                <button className="prev-button" onClick={ prevSlide }>
                    <IoIosArrowBack />
                </button>
                <button className="next-button" onClick={ nextSlide }>
                    <IoIosArrowForward />
                </button>
            </div>

        </>
    );
};

export default RecommendItems;