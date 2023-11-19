import React from "react";
import { NavbarLink } from "./NavbarLink";

export const SideNavbar = () => {
    return (
        <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
            <nav className="side-navbar">
                <ul className="space-y-2">
                    <NavbarLink title='My Lists' icon='fas fa-calendar-alt mr-2' dropdown />
                    <NavbarLink title='External Lists' icon='fas fa-calendar-alt mr-2' dropdown />
                    {/* <NavbarLink title='Contabilidad' icon='fas fa-money-bill-wave mr-2' />
                        <NavbarLink title='Facturacion' icon='fas fa-file-alt mr-2' />
                        <NavbarLink title='Reportes' icon='fas fa-chart-pie mr-2' /> */}
                    <NavbarLink title='Settings' icon='fas fa-cog mr-2' />
                </ul>
            </nav>
        </aside>
    )
}