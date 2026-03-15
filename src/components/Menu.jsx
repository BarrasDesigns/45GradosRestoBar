import React from "react";
import Menu1 from "../assets/1.png";
import Menu2 from "../assets/2.png";

const Menu = () => {
    return (
        <>
            <section id="menu">

                <section className="menu-section">

                    <h2>Nuestro Menú</h2>

                    <div className="menu-container">
                        <img src={Menu1} alt="Menu hoja 1" />
                        <img src={Menu2} alt="Menu hoja 2"

                </div>

                </section>

            </section>
        </>
    );
};

export default Menu;