import React from "react";
import { NavbarLink } from "./NavbarLink";
import { TopNavbar } from "./TopNavbar";

import '../styles/header-navbar.css';

export const Navbar = () => {

    // const context = useContext(Context);

    return (
        <div className="bg-gray-100">
            {/* Navegación superior*/}
            <TopNavbar />

            {/* Navegación lateral*/}
            <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
                <nav className="side-navbar">
                    <ul className="space-y-2">
                        <NavbarLink title='Agenda' icon='fas fa-calendar-alt mr-2' dropdown />
                        <NavbarLink title='Contabilidad' icon='fas fa-money-bill-wave mr-2' />
                        <NavbarLink title='Facturacion' icon='fas fa-file-alt mr-2' />
                        <NavbarLink title='Reportes' icon='fas fa-chart-pie mr-2' />
                        <NavbarLink title='Settings' icon='fas fa-cog mr-2' />
                    </ul>
                </nav>
            </aside>
        </div>
    )
}