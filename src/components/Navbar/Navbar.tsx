import styles from './Navbar.module.css'
import { useNavigate } from 'react-router-dom'
import { FaCirclePlus } from "react-icons/fa6";
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.navbarWrapper}>
                <div className={styles.navbarHeading}>Re<span>Tech</span></div>
                <div className={styles.navbarLinks}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                    </ul>
                </div>
                <div className={styles.navbarButton}>
                    <button onClick={() => navigate('/login')}>Log In</button>
                    <button onClick={() => navigate('/signup')}><FaCirclePlus /> Add Your Shop</button>
                </div>
            </div>
        </>
    )
}

export default Navbar