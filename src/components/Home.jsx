import React from 'react'
import { Navigate } from 'react-router-dom'
import { useRef, useState } from 'react'
const Home = () => {

    const link = useRef();

    const [playlistid, setPlaylistid] = useState('')

    const extractPlaylistId = (url) => {
        const regex = /[&?]list=([a-zA-Z0-9_-]+)/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    const handleSubmit = () => {
        let id = extractPlaylistId(link.current?.value);
        if (id) {
            setPlaylistid(id);
        }
    };

    return (
        <>
            {playlistid && (<Navigate to={`/dashboard/${playlistid}`} />)}
            <div className='flex justify-center mt-9 '>
                <input type="text" placeholder='Enter playlist link'
                    className='border outline-none p-5 w-96' ref={link} />
                <button
                    onClick={handleSubmit}
                    className='bg-color1 text-white px-10 text-xl'>
                    Submit</button>
            </div>
        </>
    )
}

export default Home