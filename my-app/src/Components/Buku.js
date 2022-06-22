import React, {useState, useEffetc, useEffect} from 'react';
import axios from 'axios'
import Beranda from '../Pages/Beranda';

const Buku = () => {
    const [bookList, setBookList] = useState([])
    const [query, setQuery] = useState('')

    const getBookList = async () => {
        try {
            const res = await axios.get('')
            const {data} = res
            setBookList(data.data)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getBookList()
    }, [])

    return (
        <div>
            {/* <Beranda /> */}
        </div>
    );
};

export default Buku;