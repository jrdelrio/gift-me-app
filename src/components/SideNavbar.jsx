import React, { useState, useEffect, useRef } from "react";
import { EventSideNavbar } from "./EventSideNavbar";
import allEvents from "../jsons/events.json"

export const SideNavbar = () => {
    const [myEvDd, setMyEvDd] = useState({ hidden: false, icon: "fas fa-chevron-down text-xs" });
    const [exEvDd, setExEvDd] = useState({ hidden: false, icon: "fas fa-chevron-down text-xs" });

    const myEvRef = useRef(null);
    const exEvRef = useRef(null);

    const handleMyEvDropdown = () => {
        if (myEvDd.hidden){
            setMyEvDd({ hidden: false, icon: "fas fa-chevron-down text-xs" });
        } else {
            setMyEvDd({ hidden: true, icon: "fas fa-chevron-left text-xs" });
        }
    };

    const handleExEvDropdown = () => {
        if (exEvDd.hidden){
            setExEvDd({ hidden: false, icon: "fas fa-chevron-down text-xs" });
        } else {
            setExEvDd({ hidden: true, icon: "fas fa-chevron-left text-xs" });
        }
    };

    // fetching the events
    const [events, setEvents] = useState(allEvents);

    if (!events) {
        return (
            <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
                <nav className="side-navbar">
                    <ul className="space-y-2">
                        <li ref={myEvRef} className="opcion-con-desplegable">
                            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                                <div className="flex items-center">
                                    <i className="fas fa-file-alt mr-2"></i>
                                    <span><i className="fa-regular fa-user"></i>My Events</span>
                                </div>
                                <i className={myEvDd.icon} onClick={handleMyEvDropdown}></i>
                            </div>
                            <ul className={myEvDd.hidden ? "desplegable hidden" : "desplegable "}>
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </ul>
                        </li>
                        <hr style={{ borderColor: 'white' }}></hr>

                        <li ref={exEvRef} className="opcion-con-desplegable">
                            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                                <div className="flex items-center">
                                    <i className="fas fa-file-alt mr-2"></i>
                                    <span>External Events</span>
                                </div>
                                <i className={exEvDd.icon} onClick={handleExEvDropdown}></i>
                            </div>
                            <ul className={exEvDd.hidden ? "desplegable hidden" : "desplegable "}>
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </ul>
                        </li>

                        <li>
                            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                                <div className="flex items-center">
                                    <i className="fas fa-cog mr-2"></i>
                                    <span>Settings</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </aside>
        )
    }


    return (
        <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
            <nav className="side-navbar">
                <ul className="space-y-2">
                    <li ref={myEvRef} className="opcion-con-desplegable">
                        <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                            <div className="flex items-center">
                                <i className="fa-regular fa-user"></i>
                                <span style={{ marginLeft: "10px" }}>My Events</span>
                            </div>
                            <i className={myEvDd.icon} onClick={handleMyEvDropdown}></i>
                        </div>
                        <ul className={myEvDd.hidden ? "desplegable hidden" : "desplegable "}>
                            {events.myEvents.map((event, index) => (
                                <EventSideNavbar
                                    key={index}
                                    title={event.title}
                                    date={event.date}
                                    numItems={event.numItems}
                                    itemsReady={event.itemsReady}
                                    myEvent={true}
                                />
                            ))}
                        </ul>
                    </li>
                    <hr style={{ borderColor: 'white' }}></hr>

                    <li ref={exEvRef} className="opcion-con-desplegable">
                        <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                            <div className="flex items-center">
                                <i className="fas fa-file-alt mr-2"></i>
                                <span>External Events</span>
                            </div>
                            <i className={exEvDd.icon} onClick={handleExEvDropdown}></i>
                        </div>
                        <ul className={exEvDd.hidden ? "desplegable hidden" : "desplegable"}>
                            {events.externalEvents.map((event, index) => (
                                <EventSideNavbar
                                    key={index}
                                    title={event.title}
                                    date={event.date}
                                    numItems={event.numItems}
                                    itemsReady={event.itemsReady}
                                />
                            ))}
                        </ul>
                    </li>

                    <li>
                        <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                            <div className="flex items-center">
                                <i className="fas fa-cog mr-2"></i>
                                <span>Settings</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};
