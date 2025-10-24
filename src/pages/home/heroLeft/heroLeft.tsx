import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import styles from "./HeroLeft.module.scss";

function HeroLeft() {
    const images = [
        "/home/bedroom.jpg",
        "/home/bedroom-2.jpg",
        "/home/bedroom-3.jpg",
        "/home/bedroom-4.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

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
                <button
                    className={`${styles.navBtn} ${styles.prev}`}
                    onClick={prevSlide}
                    aria-label="Previous slide"
                >
                    <FaChevronLeft size={20} />
                </button>

                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className={styles.heroImage}
                />

                <button
                    className={`${styles.navBtn} ${styles.next}`}
                    onClick={nextSlide}
                    aria-label="Next slide"
                >
                    <FaChevronRight size={20} />
                </button>

                <div className={styles.sliderDots}>
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={index === currentIndex ? styles.active : ""}
                            onClick={() => setCurrentIndex(index)}
                            role="button"
                            aria-label={`Go to slide ${index + 1}`}
                            tabIndex={0}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HeroLeft;
