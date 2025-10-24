import HeroLeft from "@pages/home/heroLeft/heroLeft";
import HeroRight from "@pages/home/heroRight/heroRight";
import HeroStat from "@pages/home/heroStat/heroStat";
import styles from "./Home.module.scss";

function Home() {
    return (
        <>
            <section className={styles.home}>
                <div className={styles.heroContainer}>
                    <HeroLeft />
                    <HeroRight />
                </div>
                <HeroStat />
            </section>
        </>
    );
}

export default Home;
