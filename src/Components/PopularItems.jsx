import React, { useEffect, useState } from 'react';
import Items from './items';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import { useProducts } from '../ProductsContext';
import { useForm } from 'react-hook-form';

const PopularItems = () => {
    const { state, dispatch } = useProducts();
    const { popularItems, isPopModalOpen } = state;
    // console.log("Popular Items:", popularItems);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [itemsPerSlide, setItemsPerSlide] = useState(5);
    const totalSlides = Math.ceil(popularItems.length / itemsPerSlide);

    const [currentSlide, setCurrentSlide] = useState(0);

    const openModal = () => {
        dispatch({ type: 'OPEN_POP_MODAL' });
    };

    const closeModal = () => {
        dispatch({ type: 'CLOSE_POP_MODAL' });
    };


    // useEffect(() => {
    //     console.log('Items updated:', popularItems);
    // }, [popularItems]);

    const addPopularProduct = async data => {
        console.log(data)
        const newProduct = {
            Id: uuidv4(),
            Name: data.Name,
            Price: data.Price,
            ImageUrl: data.ImageUrl,
            isPopular: true,
            isRecommended: false
        };
        console.log("New Popular:", newProduct)
        await dispatch({ type: 'ADD_POPULAR_PRODUCT', payload: newProduct });

        closeModal();
    };
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
    const endIndex = (startIndex + itemsPerSlide) % popularItems.length;
    const currentItems = popularItems.slice(startIndex, endIndex >= startIndex ? endIndex : popularItems.length);

    return (
        <>
            <div className="product-carousel my-24">
                <div className="carousel-container">
                    <div className=''>
                        <span className='font-bold'>Popular</span>
                        <button className="btn-add-more" onClick={ openModal }>
                            Add More
                        </button>
                    </div>
                    <div className="carousel-track">
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

            { isPopModalOpen && (
                <>
                    <div className="overlay active" onClick={ closeModal }></div>
                    <div className="modal active">
                        <div className="modal-content">
                            <span className="close mr-4" onClick={ closeModal }><FaWindowClose /></span>
                            <form className='w-80' onSubmit={ handleSubmit(addPopularProduct) }>
                                <h1 className='text-center font-bold text-orange-500 p-1 border-solid border-2 border-orange-500 my-2'>Add a popular item in the list</h1>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 mr-2" htmlFor="Name">
                                        Name
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        { ...register("Name", { required: true, maxLength: 30 }) } // Update to use 'Name' instead of 'name'
                                        id="Name"
                                        type="text"
                                        placeholder="Name"
                                    />
                                    { errors.Name?.type === "required" && (
                                        <p role="alert" className="text-red-400 px-1">Name is required</p>
                                    ) }
                                    { errors.Name?.type === "maxLength" && (
                                        <p role="alert" className="text-red-400 px-1">maximum 30 characters</p>
                                    ) }
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 mr-2" htmlFor="Price">
                                        Price
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        { ...register("Price", { required: true }) } // Update to use 'Price' instead of 'price'
                                        id="Price"
                                        type="text"
                                        placeholder="Price"
                                    />
                                    { errors.Price?.type === "required" && (
                                        <p role="alert" className="text-red-400 px-1">Please enter the price</p>
                                    ) }
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 mr-2" htmlFor="ImageUrl">
                                        Image Url
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        { ...register("ImageUrl", { required: true }) }
                                        id="ImageUrl"
                                        type="text"
                                        placeholder="Image Url"
                                    />
                                    { errors.ImageUrl?.type === "required" && (
                                        <p role="alert" className="text-red-400 px-1">Please enter the Image Url</p>
                                    ) }
                                </div>
                                <input type="submit" value="Add Product" className="bg-orange-500 p-2 rounded w-full my-4 text-white" />
                            </form>

                        </div>
                    </div>
                </>
            ) }
        </>
    );
};

export default PopularItems;
