import React, { useState, useEffect, useRef } from "react";
import { EventSideNavbar } from "./EventSideNavbar";

export const SideNavbar = () => {
    const [myEvDd, setMyEvDd] = useState({ hidden: false, icon: "fas fa-chevron-down text-xs" });
    const [exEvDd, setExEvDd] = useState({ hidden: false, icon: "fas fa-chevron-down text-xs" });

    const myEvRef = useRef(null);
    const exEvRef = useRef(null);

    const handleMyEvDropdown = () => {
        setMyEvDd((prevState) => ({ hidden: !prevState.hidden, icon: prevState.hidden ? "fas fa-chevron-down text-xs" : "fas fa-chevron-left text-xs" }));
    };

    const handleExEvDropdown = () => {
        setExEvDd((prevState) => ({ hidden: !prevState.hidden, icon: prevState.hidden ? "fas fa-chevron-down text-xs" : "fas fa-chevron-left text-xs" }));
    };

    useEffect(() => {
        const handleDocumentClick = (event) => {
            const myEvNode = myEvRef.current;
            const exEvNode = exEvRef.current;

            if (myEvNode && !myEvNode.contains(event.target)) {
                setMyEvDd((prevState) => ({ ...prevState, hidden: true }));
            }

            if (exEvNode && !exEvNode.contains(event.target)) {
                setExEvDd((prevState) => ({ ...prevState, hidden: true }));
            }
        };

        document.addEventListener("click", handleDocumentClick);

        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    // fetching the events
    const [events, setEvents] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../jsons/events.json');
                console.log('Full response:', response);
                const jsonData = await response.json();
                console.log('json response:', jsonData);
                setEvents(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (!events){
        return (
            <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
            <nav className="side-navbar">
                <ul className="space-y-2">
                    <li ref={myEvRef} className="opcion-con-desplegable">
                        <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                            <div className="flex items-center">
                                <i className="fas fa-file-alt mr-2"></i>
                                <span>My Events</span>
                            </div>
                            <i className={myEvDd.icon} onClick={handleMyEvDropdown}></i>
                        </div>
                        <ul className={myEvDd.hidden ? "desplegable ml-4 hidden" : "desplegable ml-4"}>
                            Loading...
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
                        <ul className={exEvDd.hidden ? "desplegable ml-4 hidden" : "desplegable ml-4"}>
                            Loading...
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
                                <i className="fas fa-file-alt mr-2"></i>
                                <span>My Events</span>
                            </div>
                            <i className={myEvDd.icon} onClick={handleMyEvDropdown}></i>
                        </div>
                        <ul className={myEvDd.hidden ? "desplegable ml-4 hidden" : "desplegable ml-4"}>
                            {events.myEvents.map((event, index) => (
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
                    <hr style={{ borderColor: 'white' }}></hr>

                    <li ref={exEvRef} className="opcion-con-desplegable">
                        <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                            <div className="flex items-center">
                                <i className="fas fa-file-alt mr-2"></i>
                                <span>External Events</span>
                            </div>
                            <i className={exEvDd.icon} onClick={handleExEvDropdown}></i>
                        </div>
                        <ul className={exEvDd.hidden ? "desplegable ml-4 hidden" : "desplegable ml-4"}>
                            <EventSideNavbar />
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
