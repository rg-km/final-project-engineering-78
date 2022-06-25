import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'
import BookDesc from '../Components/BookDesc';

const DeskripsiBuku = () => {
    const [bookList, setBookList] = useState([]);
    const {bookId} = useParams()

    const getBookDesc = async () => {
        
        try {
            const res = await axios.get('https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyBLJZPpZGx-vdQFizW2wEGZaMVWQwNrO0c&id='+bookId+'&maxResults=1')
            setBookList(res.data.items)
            // console.log(res.data.items)
        } catch(err) {
            console.log("error get book list",err)
        }
    }

    useEffect(() => {
        getBookDesc()
        // console.log("hello")
    }, [])

    return (
        <div>
            {/* {console.log(bookId)} */}
            {
                bookList?.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
                    return (
                        <>
                            <BookDesc
                                key = {item.id}
                                id = {item.id}
                                thumbnail = {thumbnail}
                                bookItem={item.volumeInfo}
                                // title={item.volumeInfo.title}
                                // subtitle={item.volumeInfo.subtitle}
                                // author={item.volumeInfo.author}
                                // Image={item.volumeInfo.imageLinks.smallThumbnail}
                                // desc={item.volumeInfo.description}
                                // publishDate={item.volumeInfo.publishedDate}
                                // publisher={item.volumeInfo.publisher}
                                // language={item.volumeInfo.language}
                                // pageCount={item.volumeInfo.pageCount}
                            />
                        </>
                    )
                })
            }    
        </div>
    );
};

export default DeskripsiBuku;