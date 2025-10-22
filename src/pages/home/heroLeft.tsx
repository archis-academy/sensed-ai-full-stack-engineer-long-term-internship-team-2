import styles from "./HeroLeft.module.scss";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

function HeroLeft() {
    return (
        <section className={styles.heroLeft}>
            <div className={styles.textContent}>
                <span className={styles.subTitle}>REAL ESTATE</span>
                <h1>
                    Find a perfect home <br /> you love..!
                </h1>
                <p>
                    Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. <br />
                    Integer a dolor eu sapien sodales vulputate ac in purus.
                </p>
            </div>

            <div className={styles.imageWrapper}>
                <button className={`${styles.navBtn} ${styles.prev}`}>
                    <FaChevronLeft size={20} />
                </button>
                <img
                    src="/bedroom.jpg"
                    alt="Modern bedroom"
                    className={styles.heroImage}
                />
                <button className={`${styles.navBtn} ${styles.next}`}>
                    <FaChevronRight size={20} />
                </button>

                <div className={styles.sliderDots}>
                    <span className={styles.active}></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>


        </section>
    );
}

export default HeroLeft;
