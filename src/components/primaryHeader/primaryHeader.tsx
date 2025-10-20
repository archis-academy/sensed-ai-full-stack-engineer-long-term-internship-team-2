import styles from "./primaryHeader.module.scss";
import {FaRegUserCircle} from "react-icons/fa";
import { TbHomeCheck } from "react-icons/tb";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function PrimaryHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className={styles.primaryHeader}>
                {/* Left Menu */}
                <nav className={styles.navLeft}>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/listings">Listings</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/blogs">Blogs</NavLink></li>
                    </ul>
                </nav>

                {/* Logo */}
                <div className={styles.logo}>
                    <img src="/rezilla-logo.svg" />
                    <span>Rezilla</span>
                </div>

                {/* Right Menu */}
                <div className={styles.navRight}>
                    <a href="#" className={styles.login}>
                        <FaRegUserCircle size={24} color="black" />
                        Login/Register
                    </a>
                    <button className={styles.addListing}>
                        <TbHomeCheck size={24} />
                        Add Listing
                    </button>
                </div>

                {/* Hamburger */}
                <button
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-expanded={menuOpen}
                    aria-controls="primary-navigation"
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <nav
                className={`${styles.mobileMenu} ${menuOpen ? styles.active : ""}`}>
                <div className={styles.closeButton} onClick={() => setMenuOpen(false)}>
                    ✕
                </div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/listings">Listings</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                    <a href="/login" className={styles.login}>
                        <FaRegUserCircle size={24} color="black" /> Login/Register
                    </a>
                    <button className={styles.addListing}>
                        <TbHomeCheck size={24} /> Add Listing
                    </button>
                </ul>
            </nav>
        </header>
    );
}

export default PrimaryHeader;