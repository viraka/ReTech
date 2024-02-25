import styles from './About.module.css'
import speedometer from '../../assets/Speedometer.png'
import tracking from '../../assets/Track Order.png'
import nearby from '../../assets/Puzzle.png'

type Props = {}

const About = (_props: Props) => {
  return (
    <div id="about" className={styles.aboutWrapper}>
                <div className={styles.aboutHeading}>
                    Revive, Repair, Recycle  Your Electronics, Without the Hassle.
                </div>
                <div className={styles.aboutContent}>
                    <div className={styles.about}><span><img src={speedometer} alt="icon" /></span><span>Easy tracking</span><span></span></div>
                    <div className={styles.about}><span><img src={tracking} alt="icon" /></span><span></span><span>Instant Search</span></div>
                    <div className={styles.about}><span><img src={nearby} alt="icon" /></span><span></span><span>Nearby Shop</span></div>
                </div>
            </div>
  )
}

export default About