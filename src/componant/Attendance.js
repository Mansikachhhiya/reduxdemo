import React from "react";
import moment from "moment";
// import ReactDOM from "react-dom/client";
// import moment from "react-moment";
// import "../style/attendance.scss";

const DayNames={
        1: 'Mon',
        3: 'Wed',
        5: 'Fri'
}
const Cell=({ color })=> {
    let style = {
        backgroundColor: color
    };

    return (
        <div className='timeline-cells-cell' style={style}></div>
    )
}
const Month=({startDate,index})=>{
    const date = moment(startDate).add(index * 7,'day');
    const monthName=date.format("MMM");
    return(
        <div className={`timeline-months-month ${monthName}`}>{monthName}</div>
    )
}
const WeekDay=({ index })=> {
    return (
        <div className='timeline-weekdays-weekday'>
            {DayNames[index]}
        </div>
    )
}
const Attendance =({range,data ,  colorFunc })=>{
    let days = Math.abs(range[0].diff(range[1], 'days'));
   let cells = Array.from(new Array(days));
    let weekDays = Array.from(new Array(7));
    let months = Array.from(new Array(Math.floor(days / 7)));

    let min = Math.min(0, ...data.map(d => d.value));
    let max = Math.max(...data.map(d => d.value));

    let colorMultiplier = 1 / (max - min);

    let startDate = range[0];
    const DayFormat = 'DDMMYYYY';
    return (
        <div className='timeline'>

            <div className="timeline-months">
                {months.map((_, index) => <Month key={index} index={index} startDate={startDate} />)}
            </div>

            <div className="timeline-body">

                <div className="timeline-weekdays">
                    {weekDays.map((_, index) => <WeekDay key={index} index={index} startDate={startDate} />)}
                </div>

                <div className="timeline-cells">
                    {cells.map((_, index) => {
                        let date = moment(startDate).add(index, 'day');
                        let dataPoint = data.find(d => moment(date).format(DayFormat) === moment(d.date).format(DayFormat));
                        let alpha = colorMultiplier * dataPoint.value;
                        let color = colorFunc({ alpha });

                        return(
                            <Cell  key={index}
                                   index={index}
                                   date={date} color={color}/>
                        )
                        ;
                    })}
                </div>
            </div>
        </div>
    );
}
export default Attendance;