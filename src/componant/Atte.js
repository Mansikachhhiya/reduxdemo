import React from "react";
import "../style/Attendance.css"
import moment from "moment";

const DayName={
    1:"Mon",
    3:"Wed",
    5:"Fri"

}
const Cell =({ startDate,index })=>{
    // console.log(index)
    let date = moment(startDate).add(index ,'day')

    // console.log(date);
    return(
        <div className="timeline-cells-cell"></div>
    )
}
const Weeks=({index})=>{
    return(
    <div className="timeline-weeks-week">{DayName[index]}</div>
    )
}
const Month=({ startDate,index })=>{
    console.log(index);
    let date = moment(startDate).add(index*7,'day');
    let month = date.format("MMM");
    console.log(month);
    return(
        <div className={`timeline-months-month ${month}`}>{month}
        </div>
    )
}
const Atte=({range})=>{
    let days = Math.abs(range[0].diff(range[1],'days'));
    console.log(days);
    let cell = Array.from(new Array(365));
    let weeks = Array.from(new Array(7));
    let months = Array.from(new Array(Math.floor(days/ 7)));
    return(
        <div className="timeline">
            <div className="timeline-months">
                {months.map((_,index)=><Month key={index} index={index} startDate={range[0]}/>)}
            </div>
            <div className="timeline-body">
                <div className="timeline-weeks">
                    {weeks.map((_,index)=><Weeks key={index} index={index} startDate={range[0]}/>)}
                </div>
            <div className="timeline-cells">
                {cell.map((_,index)=> <Cell key={index} index={index} startDate={range[0]}/>)}
            </div>
           </div>
        </div>
    )
}
 export default Atte;