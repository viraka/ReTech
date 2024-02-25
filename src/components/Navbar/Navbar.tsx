import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import image from '../../assets/Logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };


  return (
    <>
      <div className={styles.navbarWrapper}>
        <div className={styles.navbarHeading}>
          <span onClick={toggleDropdown} >
            <GiHamburgerMenu />
            {isDropdownVisible && (
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <hr />
                <li>
                  <Link to={"/about"} >About</Link>
                </li>
                <hr />
                <li>
                  <Link to={"/search"}>Services</Link>
                </li>
              </ul>
            )}
          </span>
        </div>
        
        <div className={styles.navbarLogo}>
          <img src={image} alt="Logo" />
        </div>

        <div className={styles.navbarButton}>
        <button onClick={() => navigate("/login")}>Log In</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
