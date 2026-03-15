import React from "react";
import Logo from "../assets/hero.png";
import VideoBG from "../assets/VideoBG.mp4";

const Header = () => {
    return (
        <>
            <div className="header-logo">
                <img src={Logo} alt="Taquería" />
            </div>

            <section className="video-hero">

                <video
                    className="video-bg"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={VideoBG} type="video/mp4" />
                </video>

                <div className="video-overlay"></div>

                <div className="video-content">
                    <h1>45 Grados Resto Bar</h1>
                    <p>Tacos • Parrilladas • Mariscos • Karaoke</p>
                    <button id="menuBtn">Ver Menú</button>
                </div>

            </section>

        </>
    )
}

export default Header