import React from "react";
import "../styles/event-side-navbar.css";

export const EventSideNavbar = (props) => {

  const formattedDate = new Date(props.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <li key={props.key} style={{ margin: "3px" }}>
      <div className="card text-center event-card">
        <div className="card-header event-title py-1">
          {props.title}
          {props.myEvent ? <i className="fa-solid fa-pen-to-square edit-icon" style={{float: "right", color: "black"}}></i> : ""}
        </div>
        <div className="card-footer text-body-secondary flex mx-0 p-0 items-center">
          <div className="card-footer event-footer-left px-0 flex-grow-0 border-end px-2">
            <i className="fa-solid fa-calendar-days"></i>  {formattedDate}
          </div>

          <div className="card-footer event-footer-right px-0 flex-grow">
            {props.itemsReady} of {props.numItems} items
          </div>
        </div>
      </div>
    </li>

  )
}