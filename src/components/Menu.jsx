import React from "react";
import Menu1 from "../assets/1.png";

const Menu = () => {
    return (
        <section id="menu">

            <section className="menu-section">

                <h2>Nuestro Menú</h2>

                <div className="menu-container">
                    <img src={Menu1} alt="Menu Tacos" />
                </div>

            </section>

        </section>
    );
};

export default Menu;