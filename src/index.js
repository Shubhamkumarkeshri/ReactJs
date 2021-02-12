import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Carousel in react</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item><img src="https://images.unsplash.com/photo-1612972412954-c7dd0e42ba4b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"/></Item>
          <Item><img src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/></Item>
          <Item><img src="https://images.unsplash.com/photo-1612970077710-752794ce07ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/></Item>
          <Item><img src="https://images.unsplash.com/photo-1611095973512-45224aae1990?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"/></Item>
          <Item><img src="https://images.unsplash.com/photo-1612958859598-110231d1f2da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/></Item>
          <Item><img src="https://images.unsplash.com/photo-1612968731519-555114031264?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=583&q=80"/></Item>
          <Item><img src="https://images.unsplash.com/photo-1612962385616-a160d4a6e767?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/></Item>
          <Item><img src="https://images.unsplash.com/photo-1612958859485-b6812253f59e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/></Item>
        </Carousel>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));