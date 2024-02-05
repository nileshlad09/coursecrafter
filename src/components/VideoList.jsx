import React, { useEffect, useState } from 'react'
import VideoItem from './VideoItem'


const VideoList = ({ playlistid }) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL
    const API_KEY = import.meta.env.VITE_API_KEY

    const [data1, setData] = useState([]);
    

    useEffect(() => {
        fetch(`${BASE_URL}/playlistItems?part=snippet%2CcontentDetails%2Cstatus&&maxResults=15&playlistId=${playlistid}&key=${API_KEY}`)
            .then(response => response.json()).then((data) => {
                setData(data.items)
                console.log(data)
            }
            );
    }, [playlistid])


    return (
        <>
            <div className="flex flex-col">
                {data1?.map((item) => {
                    return (
                        <div>
                            <VideoItem videoId={
                                item.contentDetails.videoId
                            }
                                snippet={item.snippet} />
                        </div>
                    )
                })}
            </div>

        </>
    )
}
export default VideoList