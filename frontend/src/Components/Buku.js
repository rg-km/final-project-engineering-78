import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Beranda from '../Pages/Beranda';
import BookCard from './BookCard';
import { Stack, CardGroup, Flex } from 'react-bootstrap';
import {Link, useNavigate, useParams} from 'react-router-dom'
// import {useHistory} from 'history'

const Buku = () => {
    const [bookList, setBookList] = useState([])
    const [loading, setLoading] = useState(false)
    // const history = useHistory()
    // const navigate = useNavigate()

    const getBookList = async () => {
        try {
            const res = await axios.get('https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyAVRcDVCRp3UJOk9ICHmFc7zvNF7eFxndg&maxResults=8')
            // const res = await axios.get('https://localhost:3001/items')
            setBookList(res.data.items)
            // console.log(res.data)
        } catch(err) {
            console.log("error get book list",err)
        }
    }
    
    useEffect(() => {
        getBookList()
        // console.log("hello")
    }, [])

    // const bookDetail = () => {
    //     history.push(`/deskripsiBuku/${bookList.id}`)
    // }

    return (
        <div>
            <div className="d-flex flex-wrap my-auto ">
                {  
                    bookList?.map((item) => {
                        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
                        return (
                            <>
                                <CardGroup style={{ width: '16rem'}}>
                                    <Link to={'/deskripsi/'+item.id} style={{ color: "black" }}>
                                            <BookCard 
                                                key = {item.id}
                                                id = {item.id}
                                                thumbnail = {thumbnail}
                                                bookItem={item.volumeInfo}
                                                // goDetail={bookDetail(item.id)}
                                            />     
                                    </Link>
                                </CardGroup>
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Buku;