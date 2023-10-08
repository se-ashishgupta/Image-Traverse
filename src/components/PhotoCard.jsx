import React from 'react';
import { FcLike } from 'react-icons/fc';
import { BsFillCloudDownloadFill, BsFillFileArrowDownFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ImageCard = ({ item }) => {

    return (
        <Link to={`/photo/${item.id}`} className=' bg-gray-100 p-2 rounded-xl shadow-lg'>

            {/* Photo */}
            <div className='w-full h-[25rem] shadow-lg group overflow-hidden rounded-xl'>
                <img src={item.urls.regular} alt={item.alt_description} className='w-full h-full object-cover group-hover:scale-110 transition-all duration-500' />
            </div>

            {/* Description, Likes, and Download  */}
            <div className='flex flex-col sm:flex-row sm:items-center gap-2 text-gray-500 justify-between text-xl px-2 py-4'>
                <h1 className=' line-clamp-1 capitalize'>{item.alt_description}</h1>
                <div className='flex items-center justify-between gap-2'>
                    <span className='flex items-center gap-1 '>
                        <figure className='text-2xl'>
                            <FcLike />
                        </figure>
                        <p>{item.likes}</p>
                    </span>
                    <span className='flex items-center gap-1 '>
                        <figure className='text-2xl'>
                            <BsFillCloudDownloadFill />
                        </figure>
                        <p>{item.downloads}</p>
                    </span>
                </div>
            </div>

        </Link >
    );
};

export default ImageCard;