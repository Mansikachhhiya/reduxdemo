import React from "react";
import styled from "styled-components";
const TimeLineWeek = styled.div`
  font-size: 10px;
  height: 15px;
  margin: 2px;
  text-align: center;
  vertical-align: middle;
`

const DayName={
    1:"Mon",
    3:"Wed",
    5:"Fri"

}
const Weeks=({index})=>{
    return(
        <TimeLineWeek>{DayName[index]}</TimeLineWeek>
    )
}
export default Weeks;