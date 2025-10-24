import { useState } from "react";
import styles from "./HeroRight.module.scss";
import { NavLink } from "react-router-dom";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";

function HeroRight() {
    const [activeTab, setActiveTab] = useState("sale");

    return (
        <section className={styles.heroRight}>
            <div className={styles.tabs} role="tablist">
                <button
                    role="tab"
                    aria-selected={activeTab === "sale"}
                    className={activeTab === "sale" ? styles.active : ""}
                    onClick={() => setActiveTab("sale")}
                >
                    For Sale
                </button>
                <button
                    role="tab"
                    aria-selected={activeTab === "rent"}
                    className={activeTab === "rent" ? styles.active : ""}
                    onClick={() => setActiveTab("rent")}
                >
                    For Rent
                </button>
            </div>

            <form className={styles.searchForm}>
                <input
                    type="text"
                    placeholder="New York, San Francisco, etc"
                    aria-label="Location"
                />

                <select aria-label="Property Type" defaultValue="">
                    <option value="" disabled>
                        Select Property Type
                    </option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Office</option>
                </select>

                <select aria-label="Rooms" defaultValue="">
                    <option value="" disabled>
                        Select Rooms
                    </option>
                    <option>1 Room</option>
                    <option>2 Rooms</option>
                    <option>3 Rooms</option>
                </select>

                <NavLink to="/advance" className={styles.advanced}>
                    <HiOutlineAdjustmentsVertical size={20} /> Advance Search
                </NavLink>

                <button type="submit" className={styles.searchBtn}>
                    <CiSearch size={24} /> Search
                </button>
            </form>
        </section>
    );
}

export default HeroRight;
