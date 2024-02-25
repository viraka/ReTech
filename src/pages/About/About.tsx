import styles from './About.module.css'
import speedometer from '../../assets/Speedometer.png'
import tracking from '../../assets/Track Order.png'
import nearby from '../../assets/Puzzle.png'
import Navbar from '../../components/Navbar/Navbar'

type Props = {}

const About = (_props: Props) => {
  return (
    <>
    <Navbar/>
    <div id="about" className={styles.aboutWrapper}>
                <div className={styles.aboutHeading}>
                    <p>Revive, Repair, Recycle  Your Electronics, Without the Hassle.</p>
                    <span>Welcome to our specialized platform dedicated to helping you effortlessly discover the closest shops offering refurbishing services for electronics products and various repair services. Seamlessly find the nearest shop from your location with the convenience and ease of our website.</span>
                </div>
                <div className={styles.aboutContent}>
                    <div ><span><img src={tracking} alt="icon" /></span><span>Easy tracking</span><span>Easy tracking allows users to effortlessly monitor the status and location of their orders in real-time.</span></div>
                    <div ><span></span><span><img src={speedometer} alt="icon" /></span>Instant Search<span>Instant searching provides users with swift access to relevant information, ensuring quick and efficient retrieval of desired content.</span></div>
                    <div ><span><img src={nearby} alt="icon" /></span><span>Nearby Shop</span><span>Nearby shop identification streamlines locating and connecting with businesses nearby, enhancing convenience for local service seekers.</span></div>
                </div>
            </div>
            </>
  )
}

export default About