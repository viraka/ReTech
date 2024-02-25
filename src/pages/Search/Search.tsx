import { useEffect, useState } from 'react'
import styles from './Search.module.css'
import Card from './components/Card/Card'
import SearchBar from './components/SearchBar/SearchBar'
import { supabase } from '../../utils/supabase'
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
            <div className={styles.searchWrapper}></div>
            <SearchBar
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            {data?.filter((shop) => {
                if (searchTerm === '') {
                    return true;
                }
                return ((shop.services.some(service => service.startsWith(searchTerm)) && selectedOption == 'service')
                    || (shop.products.some(product => product.startsWith(searchTerm)) && selectedOption == 'product'))
            })
                .map((shop, index) =>
                (
                    <Card
                        key={index}
                        shop={shop}
                    />
                )
                )}

        </>
    )
}

export default Search