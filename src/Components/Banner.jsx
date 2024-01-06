import React from 'react';
import image1 from "../assets/Image1.png"
const Banner = () => {
    return (
        <>
            <div className='bg-[#f99f1c] rounded-[30px] my-24 hidden lg:block'>
                <div className="grid grid-cols-2">
                    <div className='flex items-center justify-center'>
                        <div>
                            <div className="animation-container">
                                <h1 className="animated-text text-3xl">Deliver Food to your door
                                    step<span className="cursor">|</span></h1>
                            </div>
                            <h2 className='text-white mt-6'>Authentic Food,Quick service and Fast delivery</h2>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <img width={ 500 } src={ image1 } alt="" />
                    </div>
                </div>

                <div>

                </div>
            </div>
            <div className='block lg:hidden'>
                <div className='my-8'>
                    <div className="animation-container-sm">
                        <h1 className="animated-text-sm text-2xl my-2">Deliver Food to your door step<span className="cursor">|</span></h1>
                    </div>
                    <h2 className='text-black mt-6'>Authentic Food,Quick service and Fast delivery</h2>
                </div>
                <div className='bg-[#fd9460] h-[200px] mt-14 relative rounded-[30px]'>
                    <img width={ 600 } src={ image1 } alt="" className='absolute top-[-30px]' />
                </div>
            </div>
        </>
    );
};

export default Banner;