import moment from "moment/moment";
import React from "react";
import styled from "styled-components";

const TimeLineCell=styled.div`   
  height: 15px;
  width: 15px;                                                                                                                                                    
  border: 1px solid #adaaaa;
  margin: 2px;
  border-radius: 2px;
  background-color: #dcdbdb;
  &:hover {
    border: 1px solid black;
  }
`


const Cell =({ startDate,index })=>{
    // console.log(index)
    // let date = moment(startDate).add(index ,'day')

    // console.log(date);
    return(
        <TimeLineCell >
        </TimeLineCell>
    )
}
export default Cell