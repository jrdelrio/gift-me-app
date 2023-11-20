import React, { useEffect } from "react";
import { EventSideNavbar } from "./EventSideNavbar";

export const NavbarLink = (props) => {
  const dropdown = props.dropdown;

  useEffect(() => {
    // Obtener todas las opciones principales con desplegables
    const dropdownableItem = document.querySelectorAll(".opcion-con-desplegable");

    // Agregar evento de clic a cada opción principal
    dropdownableItem.forEach(function (opcion) {
      opcion.addEventListener("click", function () {
        // Obtener el desplegable asociado a la opción
        const desplegable = opcion.querySelector(".desplegable");

        // Alternar la clase "hidden" para mostrar u ocultar el desplegable
        desplegable.classList.toggle("hidden");
      });
    });

    // Cleanup the event listeners when the component is unmounted
    return () => {
      dropdownableItem.forEach((opcion) => {
        opcion.removeEventListener("click", () => {});
      });
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  if (!dropdown) {
    return (
      <li className="opcion-con-desplegable">
        <div className="flex items-center justify-between p-2 hover:bg-gray-700">
          <div className="flex items-center">
            <i className={props.icon}></i>
            <span>{props.title}</span>
          </div>
        </div>
      </li>
    );
  } else {
    return (
      <li className="opcion-con-desplegable">
        <div className="flex items-center justify-between p-2 hover:bg-gray-700">
          <div className="flex items-center">
            <i className="fas fa-file-alt mr-2"></i>
            <span>{props.title}</span>
          </div>
          <i className="fas fa-chevron-down text-xs"></i>
        </div>
        <ul className="desplegable ml-4 hidden">
          <EventSideNavbar />
        </ul>
      </li>
    );
  }
};
