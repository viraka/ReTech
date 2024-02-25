import styles from './Home.module.css'
import Navbar from '../../components/Navbar/Navbar'
import image from '../../assets/Back.png'
import { IoSearch } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className={styles.homeWrapper}>
                <div className={styles.homeHeading}>Restore the Spark with<span>ReTech</span></div>
                    <p>
                         Your Repair Hub Where Damaged Electronics Find a Second Life! <button onClick={() => navigate("/search")}>Get Search <IoSearch /></button>
                    </p>
                <div className={styles.homeContent}>
                    <img src={image} alt="Backimage" />
                </div>
            </div>
            {/* <About/> */}
        </>
    )
}

export default Home