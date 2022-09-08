import moment from "moment/moment";
import React from "react";
import styled from "styled-components";
const TimeLineMonth=styled.div`
    height: 15px;
    width:15PX;
    margin:2PX;

    font-size: 10px;
    text-align: center;
    vertical-align: middle;
  
  .Jan~.Jan ,
   .Sep~.Sep,
   .Oct~.Oct,
   .Nov~.Nov,
   .Dec~.Dec,
   .Feb~.Feb,
   .Mar~.Mar,
   .Apr~.Apr,
   .May~.May,
   .Jun~.Jun,
   .Jul~.Jul,
   .Aug~.Aug{
     visibility:hidden;
   }
  
 
`

const Month=({ startDate,index })=>{
    console.log(index);
    let date = moment(startDate).add(index*7,'day');
    let month = date.format("MMM");
    console.log(month);
    return(
            <div className={`timeline-months-month ${month}`}>
                <TimeLineMonth>{month}</TimeLineMonth>
            </div>
    )
}
export default Month;