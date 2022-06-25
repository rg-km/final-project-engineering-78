import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Beranda from '../Pages/Beranda';
import BookCard from './BookCard';
import { Stack, CardGroup } from 'react-bootstrap';
import {Link, useNavigate, useParams} from 'react-router-dom'
// import {useHistory} from 'history'

const Buku = () => {
    const [bookList, setBookList] = useState([])
    const [loading, setLoading] = useState(false)
    // const history = useHistory()
    // const navigate = useNavigate()

    const getBookList = async () => {
        try {
            const res = await axios.get('https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyBLJZPpZGx-vdQFizW2wEGZaMVWQwNrO0c&maxResults=5')
            // const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            // const res = await axios.get('https://localhost:3000/posts')
            setBookList(res.data.items)
            // console.log(res.data.items)
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
            <Stack direction="horizontal" className="my-auto">
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
            </Stack>
        </div>
    );
};

export default Buku;