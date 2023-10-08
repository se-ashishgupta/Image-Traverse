import React from 'react';
import { FcLike } from 'react-icons/fc';
import { BsFillCloudDownloadFill, BsFillFileArrowDownFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ImageCard = ({ item }) => {

    const photoData = {
        "photo": {
            "id": "LF8gK8-HGSg",
            "width": 5245,
            "height": 3497,
            "color": "#60544D",
            "blur_hash": "LED+e[?GI8-PITbwkD$#0M-Tof9b",
            "likes": 10,
            "liked_by_user": false,
            "description": "A man drinking a coffee.",
            "urls": {
                "raw": "https://images.unsplash.com/1/type-away.jpg",
                "full": "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg",
                "regular": "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=1080&fit=max",
                "small": "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=400&fit=max",
                "thumb": "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=200&fit=max"
            },
            "links": {
                "self": "http://api.unsplash.com/photos/LF8gK8-HGSg",
                "html": "http://unsplash.com/photos/LF8gK8-HGSg",
                "download": "http://unsplash.com/photos/LF8gK8-HGSg/download"
            }
        },

        "user": {
            "id": "8VpB0GYJMZQ",
            "username": "williamnot",
            "name": "Thomas R.",
            "links": {
                "self": "http://api.unsplash.com/users/williamnot",
                "html": "http://api.unsplash.com/williamnot",
                "photos": "http://api.unsplash.com/users/williamnot/photos",
                "likes": "http://api.unsplash.com/users/williamnot/likes"
            }
        }
    };


    return (
        <Link to={`/photo/${item.id}`} className=' bg-gray-100 p-2 rounded-xl shadow-lg'>

            <div className='w-full h-[25rem] shadow-lg group overflow-hidden rounded-xl'>
                <img src={item.urls.regular} alt={item.alt_description} className='w-full h-full object-cover group-hover:scale-110 transition-all duration-500' />
            </div>
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