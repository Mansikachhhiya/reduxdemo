import logo from './logo.svg';
import './App.css';
import Todos from "./componant/Todos"
import Atte from "./componant/Atte";
import Calender from"./componant/Calender"
import moment from "moment";
// import moment from "react-moment";

function App() {
    // let startDate = moment().add(-365, 'days');
    // let dateRange = [startDate, moment()];
    //
    // let data = Array.from(new Array(365)).map((_, index) => {
    //     return {
    //         date: moment(startDate).add(index, 'day'),
    //         value: Math.floor(Math.random() * 100)
    //     };
    // });
    let dataRange = [moment().add(-365,'days'),moment()]
    // console.log(dataRange.toString())
    // console.log(dataRange[0]);
  return (
    <>
      {/*<Atte range={dataRange} />*/}
      <Calender range={dataRange}/>
    </>
  );
}

export default App;
