import React from "react";
import { Routes, Route } from "react-router-dom";
import Timetable from "./pages/Timetable";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import DevCredits from "./pages/DevCredits";
import "./sass/main.css";
import UserConfigure from "./pages/UserConfigure";
import TimetableCardTest from "./components/Homepage-components/TimetablePreview/TTPRE/TimetableCardTest";
import Login from "./pages/Login";
import Logins from "./pages/Login";

/* Dependencies needed:
npm install
npm install react-router-dom@6
npm install -g sass
npm install boxicons --save
npm install react-redux
npm install @reduxjs/toolkit
npm install react-responsive --save
*/

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Logins />} exact />
        <Route path="/home" element={<Home />} />
        <Route path="/timetable/:id" element={<Timetable />} />
        <Route path="/Developers" element={<DevCredits />} />
        <Route path="*" element={<ErrorPage errorCode="404" />} />
        <Route path="/settings" element={<UserConfigure />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/LOL" element={<TimetableCardTest />} />
      </Routes>
    </>
  );
}

export default App;
