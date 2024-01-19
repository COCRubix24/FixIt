import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCheck, FaCog, FaRegPaperPlane, FaTimes } from "react-icons/fa";
import "./Tracking.css";
import axios from "axios";
import { UserContext } from "../../../../context/UserContext";
import { useContext } from "react";

const YourTimelineComponent = () => {
  const [complaints, setComplaints] = useState([]);
  const [currComplain, setCurrComplain] = useState();
  const [changeComplain, setChangeComplain] = useState();
  const { isLoggedIn, userr, checkUserLoggedIn, handleLogout } =
    useContext(UserContext);

  const [timelineElements, setTimelineElements] = useState([
    { status: "submitted", title: "Submitted", color: "yellow" },
    { status: "in-progress", title: "In Progress", color: "black" },
    { status: "resolved", title: "Resolved", color: "green" },
    { status: "rejected", title: "Rejected", color: "red" },
  ]);

  const handleColorChange = async (index, newColor) => {
    if (index === 2) {
      const updatedElements = [...timelineElements];
      const currentComplain = currComplain;
      try {
        // console.log("1",userr);
        const formData = {
          complainId: currentComplain._id,
          status: updatedElements[index].status,
        };
        console.log(formData);

        const response = await axios.patch(
          "http://localhost:8800/api/complain/updateSingleComplain",
          formData
        );
        setComplaints(response.data.complains);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
      updatedElements[index].color = newColor;
      updatedElements[0].color = "blue";
      setTimelineElements(updatedElements);
      window.location.reload(false);
    } else {
      alert("You can only change the status to resolve");
    }
  };

  const fetchComplaints = async () => {
    try {
      // console.log("1",userr);
      const formData = {
        id: userr._id,
      };
      console.log(formData);
      const response = await axios.post(
        "http://localhost:8800/api/complain/getAllComplain",
        formData
      );
      console.log(response.data.complains);
      setComplaints(response.data.complains);
      setCurrComplain(response.data.complains[0]);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, [userr]);

  useEffect(() => {
    if (currComplain !== undefined) {
      const updatedElements = [...timelineElements];
      updatedElements.map((element) => {
        if (element.status === currComplain.status) {
          element.color = "yellow";
        } else {
          if (element.color === "yellow") {
            element.color = "blue";
          }
        }
      });
      setTimelineElements(updatedElements);
    }
  }, [currComplain]);

  const getsingleComplain = async () => {
    if (changeComplain !== undefined) {
      try {
        const formData = {
          complainId: changeComplain,
        };
        console.log(formData);
        if (formData.complainId !== undefined) {
          const response = await axios.post(
            "http://localhost:8800/api/complain/getSingleComplain",
            formData
          );
          console.log(response.data.complain);
          setCurrComplain(response.data.complain);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
     <input
  style={{
    position: "absolute",
    border: "2px solid #ccc", // Add border style
    padding: "8px", // Add padding for better appearance
    width: "200px",
    right:"3%" // Set the width of the input
  }}
  onChange={(e) => {
    setChangeComplain(e.target.value);
  }}
/>
      <button
  style={{
    position: "absolute",
    top: "8%",
    
    right:"12%",
    transform: "translate(-50%, -50%)",
  }}
  onClick={getsingleComplain}
>
  Get this Complain
</button>
      <VerticalTimeline className="timeline">
        {timelineElements.map((element, index) => (
          <VerticalTimelineElement
            key={index}
            className={element.status}
            iconStyle={{
              background: "white",
              color: element.color,
              border : `2px solid ${element.color}`,
              boxShadow : `0 5px 20px ${element.color}` ,
            }}
            icon={
              element.status === "submitted" ? (
                <FaRegPaperPlane />
              ) : element.status === "in-progress" ? (
                <FaCog />
              ) : element.status === "resolved" ? (
                <FaCheck />
              ) : element.status === "rejected" ? (
                <FaTimes />
              ) : null
            }
          >
            <h4 className="vertical-timeline-element-title">{element.title}</h4>
            {index === 2 ? (
              <button onClick={() => handleColorChange(index, "yellow")}>
                Resolve Complain
              </button>
            ) : null}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default YourTimelineComponent;