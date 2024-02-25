import styles from './Home.module.css'
import Navbar from '../../components/Navbar/Navbar'
import image from '../../assets/Back.png'
// import { IoSearch } from 'react-icons/io5'
// import { useNavigate } from 'react-router-dom'
import LocationModal from '../../components/LocationModal/LocationModal.jsx'
//import { useState } from 'react'
const Home = () => {

    // const navigate = useNavigate();
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const handleOpenModal = () => {
    //     setIsModalOpen(true);
    // };

    // const handleCloseModal = () => {
    //     setIsModalOpen(false);
    // };

    // const handleLocationSubmit = (location: string) => {
    //     // Handle the location submission logic here
    //     console.log('Location submitted:', location);
    // };

    return (
        <>
            <Navbar />
            <div className={styles.homeWrapper}>
                <div className={styles.homeHeading}>Restore the Spark with<span>ReTech</span></div>
                <p>
                    Your Repair Hub Where Damaged Electronics Find a Second Life! <LocationModal />
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