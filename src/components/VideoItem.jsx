import React from 'react'
import { useDispatch } from 'react-redux'
import { openPopup } from '../store'

const VideoItem = ({ videoId, snippet }) => {
  const dispatch = useDispatch()

  const setYoutubeId = () => {
    dispatch(openPopup(videoId))
  }


  return (
    <div >
      <div className="flex items-center border pr-2">
        <div className='flex  cursor-pointer' onClick={() => setYoutubeId()}>
          <img className="w-32 h-20 mr-4" src={snippet.thumbnails.medium.url} alt="" />
          <h3 className="text-lg font-bold">
            {snippet.title}</h3>
        </div>
      </div>

    </div>
  )
}

export default VideoItem