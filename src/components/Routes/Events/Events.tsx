import React from "react";
import styles from "../../../styles/styles";
import EventCard from "../../../components/EventCard/EventCard";

const Events = () => {
  return (
    <div className={`${styles.section} mt-10 bg-primary rounded-md p-5`}>
      <div className={`${styles.heading}`}>
        <h1>Popular Events</h1>
      </div>
      <EventCard active={true} />
    </div>
  );
};

export default Events;
