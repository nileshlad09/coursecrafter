import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closePopup } from '../store';
const Layout = () => {

    const dispatch = useDispatch()
    const closepopup = () => {
        dispatch(closePopup())
    };
    
    const handleMarkAsCompleted = () => {
        // Add your logic here to mark the video as completed
        // For example, you can make an API call to update the video status
        // and update the UI accordingly
    };

    

    const popup = useSelector((state)=>state.popup);
    const videoId = useSelector((state)=>state.videoId);

    return (
        <div className="layout z-40">
            {popup && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow">
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                            onClick={handleMarkAsCompleted}
                        >
                            Mark as Completed
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                            onClick={closepopup}
                        >
                            Close Popup
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Layout;

