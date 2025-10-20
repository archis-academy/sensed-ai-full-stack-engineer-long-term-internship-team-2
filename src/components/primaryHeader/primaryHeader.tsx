import styles from "./primaryHeader.module.scss";
import {FaRegUserCircle} from "react-icons/fa";
import { TbHomeCheck } from "react-icons/tb";
import { useState } from "react";

function PrimaryHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className={styles.primaryHeader}>
                {/* Sol Menü */}
                <nav className={styles.navLeft}>
                    <ul>
                        <li className={styles.active}>Home</li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Listings</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Blogs</a></li>
                    </ul>
                </nav>

                {/* Orta */}
                <div className={styles.logo}>
                    <img src="/rezilla-logo.svg" />
                    <span>Rezilla</span>
                </div>

                {/* Sağ Menü */}
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
                <div
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            {/* Mobil Menü */}
            <nav
                className={`${styles.mobileMenu} ${menuOpen ? styles.active : ""}`}>
                <div className={styles.closeButton} onClick={() => setMenuOpen(false)}>
                    ✕
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Listings</li>
                    <li>Services</li>
                    <li>Blogs</li>
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