import { useState } from "react";
import GlanceBox from "./Glance-box";

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

const Glance = (props) => {
  return (
    <div className="glance">
      <h1 className="glance__text">At a Glance</h1>
      <Box className="glance-bigbox">
        <GlanceBox curClass className="Math" />
        <GlanceBox className="Physics" />
      </Box>
    </div>
  );
};

export default Glance;
