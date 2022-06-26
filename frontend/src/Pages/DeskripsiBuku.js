import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'
import BookDesc from '../Components/BookDesc';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';

const DeskripsiBuku = () => {
    const [bookList, setBookList] = useState([]);
    const {bookId} = useParams()

    const getBookDesc = async () => {
        
        try {
            // const res = await axios.get('https://www.googleapis.com/books/v1/volumes?key=AIzaSyAVRcDVCRp3UJOk9ICHmFc7zvNF7eFxndg&id='+bookId+'&maxResults=1')
            const res = await axios.get('https://www.googleapis.com/books/v1/volumes/'+bookId+'?key=AIzaSyAVRcDVCRp3UJOk9ICHmFc7zvNF7eFxndg')
            // const res = await axios.get(`https://localhost:3001/items/${bookId}`)
            setBookList(res.data.volumeInfo)
            console.log(res.data.volumeInfo)
            console.log(bookId)
        } catch(err) {
            console.log("error get book list",err)
        }
    }

    useEffect(() => {
        getBookDesc()
        console.log("hello")
    }, [])

    return (
        <div>
            {
                // console.log(bookList.title)
                // let thumbnail = imageLinks && imageLinks.thumbnail
            }
            <NavigationBar />
            <BookDesc 
                key = {bookId}
                id = {bookId}
                bookItem = {bookList}
                image = {bookList.imageLinks && bookList.imageLinks.thumbnail}
            />
            <Footer />
            {/* {console.log(bookId)} */}
        </div>
    );
};

export default DeskripsiBuku;