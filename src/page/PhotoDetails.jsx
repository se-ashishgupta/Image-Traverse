import React, { useEffect, useRef, useState } from 'react';
import { BsFillFileArrowDownFill, BsDownload } from 'react-icons/bs';
import { FcLike } from 'react-icons/fc';
import { BiSolidUserCircle, BiSolidCity } from 'react-icons/bi';
import { AiOutlineShareAlt, AiOutlineGlobal } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchPhotoById } from '../redux/action';
import Loader from '../components/Loader';
import Share from '../components/Share';

const PhotoDetails = () => {
    const params = useParams();
    const [shareOpen, setShareOpen] = useState(false);
    const shareDropUpRef = useRef(null);

    const dispatch = useDispatch();

    // Getting Data of Photo from Store
    const { loading, photodata } = useSelector(state => state.photos);

    // Call to fetch Photo Details by ID 
    useEffect(() => {
        dispatch(searchPhotoById(params.id));
        console.log(params.id);
    }, [params.id]);

    return (
        <div className='min-h-[100vh] pt-[5rem] px-2 sm:px-6 py-8 space-y-2 '>

            {
                loading ? <Loader /> :

                    photodata ? <>
                        {/* Top Header  */}
                        <div className='flex items-center text-gray-500 justify-between text-xl px-6 py-2 shadow-lg rounded-sm'>

                            {/* User Details  */}
                            <div className=' flex items-center gap-2'>
                                <div>
                                    <div className='w-[3rem] h-[3rem]'>
                                        {
                                            photodata.user.profile_image.medium ? <img src={photodata.user.profile_image.medium} alt={photodata.alt_description} className='w-full h-full rounded-full border-2' /> : <BiSolidUserCircle />
                                        }
                                    </div>
                                </div>

                                <div>
                                    <h1 className='text-sm sm:text-lg font-semibold line-clamp-1'>{`${photodata.user.first_name} ${photodata.user.last_name}`}</h1>
                                    <p className='max-w-[40%] line-clamp-1 text-sm'>{photodata.user.bio}</p>
                                </div>
                            </div>

                            {/* Photo Details and Download  */}
                            <div className='flex items-center gap-4'>
                                <span className='hidden sm:flex items-center gap-1 '>
                                    <figure className=''>
                                        <FcLike />
                                    </figure>
                                    <p>{photodata.likes}</p>
                                </span>
                                <span className='hidden sm:flex items-center gap-1 '>
                                    <figure className=''>
                                        <BsFillFileArrowDownFill />
                                    </figure>
                                    <p>{photodata.downloads}</p>
                                </span>

                                {/* Download Button  */}
                                <button className='text-lg  w-max text-white border-2 border-green-500 p-2 rounded-sm hover:text-black font-semibold bg-green-500 hover:bg-transparent transition-all duration-300'>
                                    <a href={`${photodata.links.download}&amp;force=true`} download='unsplash_photo.jpg' t >
                                        <span> <BsDownload /></span>
                                    </a>
                                </button>
                            </div>

                        </div>


                        {/* Photo View  */}
                        <div className='max-w-full h-[50vh] sm:h-[70vh] px-2 py-2 flex items-center justify-center
                        '>
                            <img src={photodata.urls.full} alt={photodata.alt_description} className='max-w-full object-contain h-full  rounded-xl' />
                        </div>

                        {/* Photo Details  */}
                        <div className='px-4 py-2 shadow-lg space-y-8'>


                            {/* Views Likes Download and Share Button  */}
                            <section className='flex flex-col sm:flex-row sm:items-center justify-between gap-10'>

                                {/* Views Likes Download */}
                                <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-16'>
                                    <div className='flex sm:flex-col items-center sm:items-start justify-between'>
                                        <span className=' text-lg font-medium text-gray-500'>Views:</span>
                                        <span className='text-sm text-black'>{photodata.views}</span>
                                    </div>
                                    <div className='flex sm:flex-col items-center sm:items-start justify-between'>
                                        <span className=' text-lg font-medium text-gray-500'>Likes:</span>
                                        <span className='text-sm text-black'>{photodata.likes}</span>
                                    </div>
                                    <div className='flex sm:flex-col items-center sm:items-start justify-between'>
                                        <span className=' text-lg font-medium text-gray-500'>Downloads:</span>
                                        <span className='text-sm text-black'>{photodata.downloads}</span>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className='relative flex gap-6 items-center justify-between'>

                                    {/* Share PopUp  */}
                                    <Share photodata={photodata} shareOpen={shareOpen} setShareOpen={setShareOpen} shareDropUpRef={shareDropUpRef} />

                                    {/* Share Button  */}
                                    <button ref={shareDropUpRef} className='text-sm w-max flex items-center gap-1 border-2 p-2 rounded-sm hover:border-gray-500 transition-all duration-300' onClick={() => setShareOpen(!shareOpen)}>
                                        <AiOutlineShareAlt />
                                        <span> Share</span>
                                    </button>

                                    {/* Download Button  */}
                                    <button className='text-lg  w-max text-white border-2 border-green-500 p-2 rounded-sm hover:text-black font-semibold bg-green-500 hover:bg-transparent transition-all duration-300'>
                                        <a href={`${photodata.links.download}&amp;force=true`} download='unsplash_photo.jpg' t >
                                            <span> <BsDownload /></span>
                                        </a>
                                    </button>

                                </div>

                            </section>


                            {/* Location  */}
                            <div className=' flex flex-col gap-2'>

                                {photodata.location.name && <p className='flex items-center gap-2'>
                                    <AiOutlineShareAlt />
                                    <span> {photodata.location.name}</span>
                                </p>}


                                {photodata.location.city && <p className='flex items-center gap-2'>
                                    <BiSolidCity />
                                    <span> {photodata.location.city}</span>
                                </p>}

                                {photodata.location.country && <p className='flex items-center gap-2'>
                                    <AiOutlineGlobal />
                                    <span> {photodata.location.country}</span>
                                </p>}

                            </div>


                            {/* Tags */}
                            <div className='flex items-center flex-wrap gap-4 py-4'>

                                {
                                    photodata.tags && photodata.tags.map((tag, index) => (
                                        <div key={index} className='bg-gray-200 p-1 rounded-md'>{tag.type}</div>
                                    ))
                                }

                            </div>


                            {/* Related Photos  */}
                            <div className='sm:px-6 py-10 '>

                                <h1 className=' text-gray-500 text-2xl font-bold py-4'>Related Photos</h1>

                                {
                                    photodata.related_collections.results && photodata.related_collections.results.length > 0 ?

                                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  sm:gap-12 '>
                                            {
                                                photodata.related_collections.results.map((item, index) => (

                                                    <Link key={index} to={`/photo/${item.cover_photo.id}`}>

                                                        <div className='w-full h-[20rem] shadow-lg group overflow-hidden rounded-xl'>
                                                            <img src={item.cover_photo.urls.full} alt={item.title} className='w-full h-full object-cover group-hover:scale-110 transition-all duration-500' />
                                                        </div>

                                                    </Link >
                                                ))
                                            }
                                        </div>


                                        : <div className='min-h-[25vh] flex items-center justify-center '>
                                            <p className='text-xl font-bold'>No Related Photos</p>
                                        </div>
                                }
                            </div>

                        </div>

                    </> : <div className='min-h-[25vh] flex items-center justify-center '>
                        <p className='text-xl font-bold'>No Photo</p>
                    </div>

            }

        </div >
    );
};

export default PhotoDetails;