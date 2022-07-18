import { Link } from "react-router-dom";
import DevCard from "./Card/Card";
import classes from "./DevProfile.module.css";

const DevProfile = (props) => {
  return (
    <DevCard>
      <div className={classes.devprofile}>
        <img src={props.image} />
        <h1>{props.devName}</h1>
        <h3>{props.job1}</h3>
        <h3>{props.job2}</h3>
        <h3>{props.job3}</h3>
        <h2>{props.position}</h2>
      </div>
    </DevCard>
  );
};

export default DevProfile;
