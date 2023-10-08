import React from 'react';
import { FcLike } from 'react-icons/fc';
import { BsDownload } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ImageCard = ({ item }) => {

    return (
        <div className=' bg-gray-100 p-2 rounded-xl hover:shadow-xl transition-all duration-300'>

            {/* Photo */}
            <div className='w-full h-[20rem] shadow-lg group overflow-hidden rounded-xl'>
                <Link to={`/photo/${item.id}`}><img src={item.urls.regular} alt={item.alt_description} className='w-full h-full object-cover group-hover:scale-110 transition-all duration-500' /></Link>
            </div>

            {/* Description, Likes, and Download  */}
            <div className='flex flex-col sm:flex-row sm:items-center gap-4 text-gray-500 justify-between text-xl px-2 py-4'>

                {/* Discription  */}
                <h1 className=' line-clamp-1 capitalize'>{item.alt_description}</h1>

                <div className='flex items-center justify-between gap-3'>
                    {/* No of likes */}
                    <span className='flex items-center gap-1 '>
                        <figure className='text-2xl'>
                            <FcLike />
                        </figure>
                        <p>{item.likes}</p>
                    </span>

                    {/* Download Button  */}
                    <button className='text-lg  w-max text-white border-2 border-green-500 p-1 rounded-sm hover:text-black font-semibold bg-green-500 hover:bg-transparent transition-all duration-300'>
                        <a href={`${item.links.download}&amp;force=true`} download='unsplash_photo.jpg' t >
                            <span> <BsDownload /></span>
                        </a>
                    </button>
                </div>
            </div>

        </div >
    );
};

export default ImageCard;