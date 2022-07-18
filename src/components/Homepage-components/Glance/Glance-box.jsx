import react from "react";
import { Link, Navigate } from "react-router-dom";


export default function GlanceBox(props) {
  return (
      <div style={props.curClass ? {background: "rgba(0, 102, 255, 1)"} : {background: "rgba(255, 61, 0, 1)"}} className="glance-item">
        <h3>{props.curClass ? "Current Class:" : "Next Class:"} <br /> {props.className} </h3>
        <Link to={`/timetable/`}>
          <button className="glance-item__btn">View In Timetable</button>
        </Link>
      </div>
  );
}
