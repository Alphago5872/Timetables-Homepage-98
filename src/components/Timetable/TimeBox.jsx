const TimeBox = (props) => {
  return (
    <div className="timetable__grid--item box">
        <h2>{props.subject}</h2>
        <h3>{props.teacher}</h3>
        <h2>{props.lunch}</h2>
    </div>
  )
}




export default TimeBox;