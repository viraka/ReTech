import { useEffect, useState } from 'react'
import styles from './Search.module.css'
import Card from './components/Card/Card'
import SearchBar from './components/SearchBar/SearchBar'
import { supabase } from '../../utils/supabase'
import Navbar from '../../components/Navbar/Navbar'
const Search = () => {
    const [data, setData] = useState<shop[]>([])
    const [selectedOption, setSelectedOption] = useState('product');
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            const { data: res, error } = await supabase
                .from('shop')
                .select('*')
            if (error) {
                throw error
            }

            setData(res as shop[])
            console.log(data)
        }
        fetchData()
    }, [])

    return (

        <>
            <div className={styles.allWrapper}>
                <Navbar />

                <div className={styles.searchWrapper}>
                    <SearchBar
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                </div>
                {data?.filter((shop) => {
                    if (searchTerm === '') {
                        return true;
                    }
                    return ((shop.services.some(service => service.startsWith(searchTerm)) && selectedOption == 'service')
                        || (shop.products.some(product => product.startsWith(searchTerm)) && selectedOption == 'product'))
                })
                    .map((shop, index) =>
                    (

                        <div className={styles.cardWrapper}>
                            <Card
                                key={index}
                                shop={shop}
                            />
                        </div>
                    )
                    )}
            </div >

        </>


    )
}

export default Search