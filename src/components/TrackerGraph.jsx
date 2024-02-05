import Chart from 'react-apexcharts'

const TrackerGraph = ({data}) => {

    const {isVideo , totalDuration, completedDuration, totalVideo, completedVideo}=data;
    let percentage=0;
    if(isVideo){
        percentage = parseFloat(((completedVideo/totalVideo)*100).toFixed(2))
    }else{
        percentage = parseFloat(((completedDuration/totalDuration)*100).toFixed(2))
    }

    var state = {
        options: {
            labels: ["Completed"],
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '60%',
                    },
                    dataLabels:{
                        name:{
                            fontSize: "20",
                            color:"#ffffff"
                        },value:{
                            fontSize: "22",
                            color:"#ffffff"
                        }
                    }
                },
            },
            dataLabels: {
            }
        },
        series: [percentage],
    }

    return (
        <>
            <div className="donut">
                <Chart options={state.options} series={state.series} type="radialBar" width="100%" />
            </div>
        </>
    )
}

export default TrackerGraph;