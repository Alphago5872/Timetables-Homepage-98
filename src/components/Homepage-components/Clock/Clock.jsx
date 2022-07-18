import React, { useState, useEffect } from "react";
import classes from "./clock.module.css";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(clock);
  });

  return (
    <div className={classes.app}>
      <h1 className={classes.heading}>Digital Clock</h1>
      <div className={classes.outer - wrapper}>
        <div className={classes.inner - wrapper}>
          <h2 className={classes.clock}>{time.toLocaleTimeString()}</h2>
        </div>
      </div>
    </div>
  );
}

export default Clock;
