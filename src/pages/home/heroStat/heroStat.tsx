import styles from "./HeroStat.module.scss";

function HeroStat() {
    return (
        <section className={styles.heroStat}>
            {/* Sol kart — birden fazla kullan?c? resmi */}
            <div className={styles.statCard}>
                <div className={styles.avatarGroup}>
                    <img src="/home/young.jpg" alt="User 1" />
                    <img src="/home/girl.jpg" alt="User 2" />
                    <img src="/home/woman.jpg" alt="User 3" />
                    <span className={styles.more}>+</span>
                </div>
                <div className={styles.textWrapper}>
                    <p>72k+ Happy Customers</p>
                </div>
            </div>

            {/* Sa? kart */}
            <div className={styles.statCard}>
                <div className={styles.imageWrapper}>
                    <img src="/home/villa.jpg" alt="Listings" />
                </div>
                <div className={styles.textWrapper}>
                    <p>200+ New Listings Everyday!</p>
                </div>
            </div>
        </section>
    );
}

export default HeroStat;
