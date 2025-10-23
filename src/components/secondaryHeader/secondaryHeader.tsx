import styles from "./secondaryHeader.module.scss";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";

function SecondaryHeader() {
    return (
        <div className={styles.secondaryHeader}>
            <div className={styles.left}>
                <MdOutlineLocationOn size={24} />
                <span>Rezilla, 18 Grattan St, Brooklyn</span>
            </div>
            <div className={styles.right}>
                <a href="tel: +1 206-214-2298"><AiOutlinePhone size={24} />+1 206-214-2298</a>
                <a href="mailto:support@rezilla.com"><IoMailOutline size={24} />support@rezilla.com</a>
            </div>
        </div>
    );
};

export default SecondaryHeader;

