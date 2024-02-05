import TrackerGraph from "./TrackerGraph"
import { useState } from "react"
const Tracker = ({ title }) => {

    const [isVideo, setvideoStatus] = useState(false)
    const [completedDuration, setcompletedDuration] = useState(10)
    const [totalDuration, setTotalDuration] = useState(30)
    const [completedVideo, setcompletedVideo] = useState(10)
    const [totalVideo, settotalVideo] = useState(18)

    const data = {
        isVideo, totalDuration, completedDuration, totalVideo, completedVideo
    }

    return (
        <>
            <div className="bg-color1 w-96 max-h-[450px] text-white p-3 text-center">
                <p className="text-2xl text-center font-semibold pb-2">{title}</p>
                <div className="flex items-center justify-center">
                    <button className={`border-color2 border-2 w-20 h-10 ${!isVideo ? "toggleBtn" : ""}`}
                        onClick={() => setvideoStatus(false)}>Duration</button>
                    <button className={`border-color2 border-2 w-20 h-10 ${isVideo ? "toggleBtn" : ""}`}
                        onClick={() => setvideoStatus(true)}>Videos</button>
                </div>
                <TrackerGraph data={data} />
                {
                    !isVideo ? <div className="text-lg">
                        <p>Course completed:</p>
                        <p>2:10:40/10:39:90</p>
                    </div> :
                        <div className="text-lg">
                            <p>Videos Completed</p>
                            <p>{completedVideo.toString()}/{totalVideo.toString()}</p>
                        </div>
                }
            </div>
        </>
    )
}
export default Tracker