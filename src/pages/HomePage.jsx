import React from "react";
import Hero from "../components/Hero";
import Row from "../components/Row";
import RowList from "../constant/RowList";

const HomePage = () => {
  return (
    <div>
      <Hero />
      {RowList.list.map((list) => (
        <Row
          rowID={list.id}
          title={list.name}
          fetchURL={list.fetchURL}
          type={list.type}
        />
      ))}
    </div>
  );
};

export default HomePage;
