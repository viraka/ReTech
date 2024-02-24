import styles from './Home.module.css'
import Navbar from '../../components/Navbar/Navbar'
const Home = () => {
    return (
        <>
            <Navbar />
            <div className={styles.homeWrapper}>
                <div className={styles.homeHeading}>Welcome to Re<span>Tech</span></div>
                <div className={styles.homeContent}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

            </div>
        </>
    )
}

export default Home