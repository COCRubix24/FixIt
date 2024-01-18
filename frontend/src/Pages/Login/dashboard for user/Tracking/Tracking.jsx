import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCheck, FaCog, FaRegPaperPlane, FaTimes } from 'react-icons/fa';
import './Tracking.css';

const YourTimelineComponent = () => {
  const [timelineElements, setTimelineElements] = useState([
    { status: 'submitted', title: 'Submitted', color: 'blue' },
    { status: 'in-progress', title: 'In Progress', color: 'black' },
    { status: 'resolved', title: 'Resolved', color: 'green' },
    { status: 'rejected', title: 'Rejected', color: 'red' },
  ]);

  const handleColorChange = (index, newColor) => {
    const updatedElements = [...timelineElements];
    updatedElements[index].color = newColor;
    setTimelineElements(updatedElements);
  };

  return (
    <VerticalTimeline className='timeline'>
      {timelineElements.map((element, index) => (
        <VerticalTimelineElement
          key={index}
          className={element.status}
          iconStyle={{
            background: 'white',
            color: element.color,
            border: `2px solid ${element.color}`,
            boxShadow: `0 5px 20px ${element.color}`,
          }}
          icon={
            element.status === 'submitted' ? <FaRegPaperPlane /> :
            element.status === 'in-progress' ? <FaCog /> :
            element.status === 'resolved' ? <FaCheck /> :
            element.status === 'rejected' ? <FaTimes /> :
            null
          }
        >
          <h4 className="vertical-timeline-element-title">{element.title}</h4>
          <button onClick={() => handleColorChange(index, 'yellow')}>Change Color</button>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default YourTimelineComponent;
