import React, {useState, useEffetc, useEffect} from 'react';
import axios from 'axios'
import Beranda from '../Pages/Beranda';
import BookCard from './BookCard';
import { Stack, CardGroup } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Buku = () => {
    const [bookList, setBookList] = useState([])
    const [query, setQuery] = useState('')

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

    const getBookDesc = async (data) => {
        try {
            const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyBLJZPpZGx-vdQFizW2wEGZaMVWQwNrO0c/${data}`)
            setBookList(res.data.items)
            // console.log(res.data.items)
        } catch(err) {
            console.log("error get book list",err)
        }
    }

    useEffect(() => {
        getBookList()
        getBookDesc()
        // console.log("hello")
    }, [])

    // axios.get('https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyBLJZPpZGx-vdQFizW2wEGZaMVWQwNrO0c&maxResults=5')
    //         .then(res => setBookList(res.data.items))
    //         .catch(err => console.log(err))

    return (
        <div>
            {
                bookList?.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
                    return (
                        <>
                            <CardGroup style={{ width: '16rem' }}>
                                <Link to="/deskripsi">
                                    <BookCard 
                                        key = {item.id}
                                        id = {item.id}
                                        thumbnail = {thumbnail}
                                        title={item.volumeInfo.title}
                                        subtitle={item.volumeInfo.subtitle}
                                        author={item.volumeInfo.author}
                                        Image={item.volumeInfo.imageLinks.smallThumbnail}
                                        desc={item.volumeInfo.description}
                                        publishDate={item.volumeInfo.publishedDate}
                                        publisher={item.volumeInfo.publisher}
                                        language={item.volumeInfo.language}
                                        pageCount={item.volumeInfo.pageCount}
                                    />     
                                </Link>
                            </CardGroup>
                        </>
                    )
                })
            }
        </div>
    );
};

export default Buku;