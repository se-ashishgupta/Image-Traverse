import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { searchPhotos } from '../redux/action';
import searchBackground from "../assets/bg.jpg";
import PhotoCard from "../components/PhotoCard";
import Loader from '../components/Loader';

const Search = () => {
    const [query, setQuery] = useState("");

    const dispatch = useDispatch();
    const { searchdata, loading } = useSelector(state => state.photos);

    const searchHandler = (e) => {
        e.preventDefault();
        dispatch(searchPhotos(query));
    };

    // Header Background Inline Style 
    const headerBackgroundStyle = {
        backgroundImage: `url(${searchBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    };

    // useEffect(() => {
    //     if (query == "") {
    //         dispatch(searchPhotos('random'));
    //         console.log("ashsih");
    //     }
    // }, [query]);

    return (
        <div>

            {/* Search Input  */}
            <div className='min-h-[75vh] w-full flex items-center justify-center shadow-xl' style={headerBackgroundStyle}>
                <div className='w-[90%] sm:w-[60%] animate-slideUp '>
                    <div className='relative flex items-center text-gray-400 focus-within:text-gray-600'>
                        <figure className='text-2xl absolute ml-3 pointer-events-none '><AiOutlineSearch /></figure>
                        <form onSubmit={searchHandler} className='w-full' >
                            <input type="text" name='serach' placeholder='Search Now...' autoComplete='off'
                                className='w-full pr-3 pl-12 py-2 placeholder-gray-500 text-black rounded-lg outline-none ring-1 ring-gray-300 focus:shadow-lg '
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </form>
                    </div>
                </div>
            </div>


            {/* List of Search Photos */}
            <div>


                {
                    loading ? <Loader /> :

                        searchdata && searchdata.results.length > 0 ?
                            <div className='px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 '>
                                {

                                    searchdata.results.map((item, index) => (

                                        <PhotoCard key={index} item={item} />
                                    ))

                                }
                            </div>

                            : <div className='min-h-[25vh] flex items-center justify-center '>
                                <p className='text-xl font-bold'>Not Available, Search Again Now</p>
                            </div>
                }
            </div>

        </div>
    );
};

export default Search;