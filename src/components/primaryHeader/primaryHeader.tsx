import styles from "./primaryHeader.module.scss";
import {FaRegUserCircle} from "react-icons/fa";
import { TbHomeCheck } from "react-icons/tb";
import { NavLink } from "react-router-dom";

function PrimaryHeader() {
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
                <NavLink to="/" className={styles.logo}>
                    <img src="/rezilla-logo.svg" alt="Rezilla logo" />
                    <span>Rezilla</span>
                </NavLink>

                {/* Right Menu */}
                <div className={styles.navRight}>
                    <NavLink to="/login" className={styles.login}>
                        <FaRegUserCircle size={24} color="black" />
                        Login/Register
                    </NavLink>
                    <NavLink to="/add-listing" className={styles.addListing}>
                        <TbHomeCheck size={24} />
                        Add Listing
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default PrimaryHeader;