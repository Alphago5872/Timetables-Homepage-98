import TimetableGrid from "../components/Timetable/TimetableGrid";
import WebCard from "../components/Wrapper-Components/Wrapper-1/WebCard_1";
import { getTimetable } from "../datas/datas";


const year = "11";

const Timetable = () => {

  return (
    <WebCard>
      <div className="timetable">
        <div class="item item--1">
          <i class="bx bx-info-circle"></i>
          <h1>{`Year ${year}`}</h1>
          <i class="bx bx-time-five"></i>
          <TimetableGrid timetableContent={getTimetable}/>
        </div>
      </div>
    </WebCard>
  );
};

export default Timetable;
