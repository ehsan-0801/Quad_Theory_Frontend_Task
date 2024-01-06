import React from 'react';

const Items = ({ name, img }) => {
    return (
        <div className="carousel-item" >
            <img className='w-[180px] h-[200px] lg:w-[280px] lg:h-[300px] rounded-lg' src={ img } alt="" />
            <p className='text-center'>{ name }</p>
        </div>
    );
};

export default Items;