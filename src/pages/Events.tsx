import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import styles from "../styles/styles";
import EventCard from "../components/EventCard/EventCard";

const Events = () => {
  return (
    <div className="w-full h-auto">
      <Header activeHeader={4} />
      <div className={`${styles.section} mt-10`}>
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default Events;
