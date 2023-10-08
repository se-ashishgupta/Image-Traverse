import React, { useEffect } from 'react';
import PhotoCard from '../components/PhotoCard';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import homeBackground from "../assets/bg2.jpg";
import { getRandomPhotos } from '../redux/action';


const Home = () => {
    // Header Background Inline Style 
    const headerBackgroundStyle = {
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    };

    // Getting data from store 
    const { loading, randomdata } = useSelector(state => state.photos);

    const dispatch = useDispatch();

    // Call to fetch Ranbdopm data 
    useEffect(() => {
        // dispatch(getRandomPhotos());
    }, [dispatch]);

    return (
        <div className='overflow-hidden'>

            <div style={headerBackgroundStyle} className='min-h-[75vh] flex items-center justify-center shadow-xl'>

                {/* Header Content  */}
                <div className='p-4 md:p-16 sm:w-[80%] space-y-2 md:space-y-4 lg:space-y-6'>
                    {/* Heading  */}

                    <p className='text-xl font-semibold text-white animate-slideLeft'>Welcome To</p>

                    <div className='animate-bounceUpDown'>
                        <h1 className='text-5xl sm:text-6xl font-extrabold text-white tracking-wider'>Image</h1>
                        <h1 className='text-5xl sm:text-6xl font-extrabold text-white tracking-wider'>Traverse</h1>
                    </div>

                    {/* Description  */}
                    <p className='sm:text-xl text-white font-medium animate-slideLeft'>ImageTraverse is your gateway to a vast and visually captivating universe. Explore, find, and be inspired with ImageTraverse.</p>

                </div>

            </div>

            {/* List of Random Photos */}
            <div>

                {
                    loading ? <Loader /> :
                        randomdata && randomdata.length > 0 ?
                            <div className='px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 '>
                                {
                                    randomdata.map((item, index) => (

                                        <PhotoCard key={index} item={item} />
                                    ))
                                }
                            </div>

                            : <div className='min-h-[25vh] flex items-center justify-center '>
                                <p className='text-xl font-bold'>No Random Photo</p>
                            </div>
                }

            </div>

        </div>
    );
};

export default Home;