import React from 'react';
import { FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaArrowRightLong } from "react-icons/fa6";
import image2 from "../assets/Image2.png"
const Footer = () => {
    return (
        <div className='bg-[#f99f1c]'>
            <div className='mx-4 lg:mx-40 '>
                <div className='flex justify-between items-center py-14'>
                    <div>
                        <div className='flex items-center'>
                            <input type="email" placeholder='enter your email' name="" id="" className='w-[300px] lg:w-[400px] p-2 rounded-lg shadow-lg' />
                            <button className="btn bg-orange-500 rounded-lg w-28 text-white flex justify-center items-center px-2 py-1 -ml-32">
                                SubsCribe
                                <span><FaArrowRightLong /></span>
                            </button>
                        </div>
                        <div className='my-10'>
                            <p className='text-black font-bold text-3xl font-bold my-4'>pti.</p>
                            <div className="flex flex-col flex-col-reverse justify-start lg:flex-row lg:justify-between lg:items-center">
                                <p>
                                    <small className='my-6'>Copyright©Trip.All Right Reserved</small>
                                </p>
                                <div className='flex justify-center items-center'>
                                    <div className='rounded-full bg-orange-500 lg:bg-white p-1 text-white lg:text-orange-400 font-semibold'><FaGoogle /></div>
                                    <div className='rounded-full bg-orange-500 lg:bg-white p-1 text-white lg:text-orange-400 font-semibold'><FaTwitter /></div>
                                    <div className='rounded-full bg-orange-500 lg:bg-white p-1 text-white lg:text-orange-400 font-semibold'><FaInstagram /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <img width={ 300 } className='' src={ image2 } alt="" />
                    </div>
                    {/* <div className=''>
                        <div className='flex items-center'>
                            <input type="email" placeholder='enter your email' name="" id="" className='w-[300px] lg:w-[400px] p-2 rounded-lg shadow-lg' />
                            <button className="btn bg-orange-500 rounded-lg w-28 text-white flex justify-center items-center px-2 py-1 -ml-32">
                                SubsCribe
                                <span><FaArrowRightLong /></span>
                            </button>
                        </div>
                        <div className=''>
                            

                            <div className='flex justify-center items-center w-[]'>
                                <p className='text-black font-bold text-xl font-bold my-4'></p>
                                
                            </div>

                        </div>
                    </div>
                    <div>
                        
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default Footer;