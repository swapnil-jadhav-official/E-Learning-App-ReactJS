import React from "react";
import style from "./Details.module.css";
import coursesData from "../../../data/courses.json";
import { Link, useParams } from "react-router-dom";
//Third task: import useParams hook

function Details() {
  const {courseId} = useParams();
  const courseDetails = coursesData.find((course)=>course.id===courseId)
  return (
    //Third Task: get course id and match it with the data
    
    <div className={style.courses_container}>
      <div className={style.card_container}>
        <div className={style.card_image}>
          <div className={style.image_container}>
            {/*Third task: image source here */}
            <img src={courseDetails.img} alt="icons" />
          </div>
        </div>
        <div className={style.card_content}>
          {/*Third Task:  Title and Description here */}
          <h1 className={style.card_title}>{courseDetails.title}</h1>
          <p className={style.card_description}>{courseDetails.description}</p>
        </div>
      </div>
      {/* Task4: create Link to the Learn Page */}
      <Link to ={`/learn/${courseDetails.id}`}>
          <button className={style.button}>Start Learning</button>
      </Link>
      
    </div>
  );
}

export default Details;
