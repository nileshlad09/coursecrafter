import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Tracker from './Tracker'
import VideoList from './VideoList'
import Layout from './Layout'

const Dashboard = () => {
    const BASE_URL = import.meta.env.VITE_BASE_URL
    const API_KEY = import.meta.env.VITE_API_KEY

    const paramName  = useParams()
    
    let playlistid = paramName.id;
    const [title, setTitle] = useState([]);
    useEffect(() => {  
        fetch(`${BASE_URL}/playlists?key=${API_KEY}&id=${playlistid}&part=id,snippet&fields=items(id,snippet(title,channelId,channelTitle))`)
            .then(response => response.json()).then((data) => {
                console.log(data.items[0].snippet.title)
                setTitle(data.items[0].snippet.title)
            }
            );
    }  , [playlistid]);
    
    

    return (
        <div className='flex mb-24 mx-16 justify-center gap-16'>
            <div>
                <VideoList playlistid={playlistid}/>
            </div>
            <div>
                <Tracker title={title}/> 
            </div>
            <Layout/> 
        </div>
    )
}

export default Dashboard