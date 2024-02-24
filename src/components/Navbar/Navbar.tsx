import styles from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaCirclePlus } from "react-icons/fa6";
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.navbarWrapper}>
                <div className={styles.navbarHeading}>Re<span>Tech</span></div>
                <div className={styles.navbarLinks}>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'#about'}>About</Link></li>
                        <li><Link to={'/services'}>Services</Link></li>
                    </ul>
                </div>
                <div className={styles.navbarButtons}>
                    <button onClick={() => navigate('/login')}>Log In</button>
                    <button onClick={() => navigate('/signup')}><span><FaCirclePlus/></span> Add Shop</button>
                </div>
            </div>
        </>
    )
}

export default Navbar