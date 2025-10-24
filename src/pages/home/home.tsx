import HeroLeft from "@pages/home/heroLeft/heroLeft";
import HeroRight from "@pages/home/heroRight/heroRight";
import styles from "./Home.module.scss";

function Home() {
    return (
        <>
            <section className={styles.home}>
                <div className={styles.heroContainer}>
                    <HeroLeft />
                    <HeroRight />
                </div>
            </section>
        </>
    );
}

export default Home;
