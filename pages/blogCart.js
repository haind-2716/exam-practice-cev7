import React, {useState} from 'react';
import PropTypes from 'prop-types';

BlogCart.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    vote: PropTypes.number,
}

export default function BlogCart({title, image, vote}) {
    const [titleState, setTitle] = useState(title ? title : '')
    const [imageState, setImageState] = useState(image ? image : '')
    const [voteState, setVoteState] = useState(vote ? vote : '')

    const stars = [];
    for (let i = 0; i < voteState; i++) {
        stars.push(
            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
        </svg>);
    }

    return (
        <>
            <div className="max-w-2xl m-1 rounded-sm">
                <div className="bg-gray-100 shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="pages/blogCart#">
                        <img className="rounded-t-lg p-8" src={imageState} alt="product image"/>
                    </a>
                    <div className="px-5 pb-5">
                        <a href="pages/blogCart#">
                            <h3 className="text-gray-900 font-semi-bold text-xl tracking-tight dark:text-white">{titleState}</h3>
                        </a>
                        <div className="flex items-center mt-2.5 mb-5">
                            {stars}
                            <span
                                className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{voteState}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <a href="#"
                               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Practice
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}