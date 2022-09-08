import React from "react";
import Cell from "./Cell";
import styled from "styled-components";
import Weeks from "./Weeks";
import Month from "./Month";
const TimeLine = styled.div`
  margin: 20px 20px 60px;
`

const TimeLineBody=styled.div`
  display: flex;
`
const Cells =styled.div`
 display: inline-flex;
 flex-direction: column;
 flex-wrap: wrap;
 height: 150px;                                                                                                                                                                                                                                                                                                                                                                                                                 
`
const Week = styled.div`
 display: inline-flex;
 flex-direction:column;
`
const Months=styled.div`
  display: inline-flex;
  padding-left: 25px;
  
`
  const Calender=({range})=>{
    const days = Math.abs(range[0].diff(range[1],'days'));
    const cell = Array.from(new Array(365));
    const weeks = Array.from(new Array(7));
    const months = Array.from(new Array(Math.floor(days/ 7)));
  return(<>

      <TimeLine>
     <Months>
         {months.map((_,index)=><Month key={index} index={index} startDate={range[0]}/>)}
     </Months>
      <TimeLineBody>
       <Week>
        {weeks.map((_,index)=><Weeks key={index} index={index} startDate={range[0]}/>)}
       </Week>
      <Cells>
       {cell.map((_,index)=> <Cell key={index} index={index} startDate={range[0]}/>)}
      </Cells>
     </TimeLineBody>
          </TimeLine>
   </>
  )

 }
 export default Calender