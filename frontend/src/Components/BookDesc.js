import React, {useState} from 'react';
import {
    Stack,
    Image,
    Flex,
    CardGroup,
} from "react-bootstrap"
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom'
import BookSaved from '../Pages/BookSaved';
import BookBorrowed from '../Pages/BookSaved';

const BookDesc = ({id, bookItem, image}) => {
    const [bookSavedList, setBookSavedList] = useState([])
    const [bookBorrowedList, setBookBorrowedList] = useState([])
    const [loading, setLoading] = useState(false)
    const [ampersand, setAmpersand] = useState('&')
    const [doubleQuote, setDoubleQuote] = useState('"')
    const [singleQuote, setSingleQuote] = useState('\'')
    const [lessThan, setLessThan] = useState('<')
    const [greaterThan, setGreaterThan] = useState('>')

    const htmlSpecialChars = (str) => {
        return str
            .replace(ampersand, '&amp;')
            .replace(doubleQuote, '&quot;')
            .replace(singleQuote, '&#039;')
            .replace(lessThan, '&lt;')
            .replace(greaterThan, '&gt;')
    }

    //note : nanti rapikan dengan useContext

    //book saved list
    const handleBookSaved = async () => {
        // try {
        //     //ganti link api nya nanti
        //     const bookRes = await axios.post('https://localhost:3001/users/bookSaved', {})
        //     if (bookRes.status === 200) {
        //         setBookSavedList(bookRes.data)
        //     }
        // } catch (err) {
        //     console.log("error post book saved", err)
        // }

        return (
            <>
                {bookSavedList.map((item) => {
                    return (
                        <>
                            <CardGroup style={{ width: '16rem'}}>
                                <Link to={'/deskripsi/'+item.id} style={{ color: "black" }}>
                                        <BookSaved 
                                            key = {item.id}
                                            id = {item.id}
                                            // thumbnail = {thumbnail}
                                            bookItem={item.volumeInfo}
                                        />     
                                </Link>
                            </CardGroup>
                        </>
                    )
                })}
            </>
        )
    }

    //pinjam buku
    const handleBookBorrow = async () => {
        // try {
        //     //ganti link api nya nanti
        //     const bookRes = await axios.post('https://localhost:3001/users/bookBorrowed', {})
        //     if (bookRes.status === 200) {
        //         setBookBorrowedList(bookRes.data)
        //     }
        // } catch (err) {
        //     console.log("error post book saved", err)
        // }

        return (
            <>
                {bookBorrowedList.map((item) => {
                    return (
                        <>
                            <CardGroup style={{ width: '16rem'}}>
                                <Link to={'/deskripsi/'+item.id} style={{ color: "black" }}>
                                        <BookBorrowed 
                                            key = {item.id}
                                            id = {item.id}
                                            // thumbnail = {thumbnail}
                                            bookItem={item.volumeInfo}
                                        />     
                                </Link>
                            </CardGroup>
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <div className="px-5 pt-3 mx-auto">
            <h4>{bookItem.title}</h4>
            <p>{bookItem.subtitle}</p>
            <div className="d-inline-flex justify-content-between">
                <div className='mx-auto'>
                    {/* <Image src={image.thumbnail} style={{ width: '14rem'}} /> */}
                    <Image src="" style={{ width: '14rem'}} />
                </div>
                <div className='pl-5'>
                    <div className="d-inline-flex justify-content-between mx-5">
                        <div className='mx-5'>
                            <div className='pb-2'>
                                <p className="fw-bold">Kategori:</p>
                                <p className="">
                                    {
                                        bookItem.categories?.map((item, index) => {
                                            return (
                                                <>
                                                    <span key={index}>- {item}</span><br/>
                                                </>
                                            )
                                        })
                                    }
                                </p>
                            </div>
                            <div className='pb-2'>
                                <p className="fw-bold">Penulis:</p>
                                <p className="">
                                    {
                                        bookItem.authors?.map((author, index) => {
                                            return (
                                                <>
                                                    <span key={index}>- {author}</span><br/>
                                                </>
                                            )
                                        })
                                    }
                                </p>
                            </div>
                            <div className='pb-2'>
                                <p className="fw-bold">Penerbit:</p>
                                <p className="">{bookItem.publisher}</p>
                            </div>
                        </div>
                        <div className='mx-5'>
                            <div className='pb-2'>
                                <p className="fw-bold">Tanggal Terbit:</p>
                                <p className="">{bookItem.publishedDate}</p>
                            </div>
                            <div className='pb-2'>
                                <p className="fw-bold">Bahasa:</p>
                                <p className="">{bookItem.language === "en" ? "English" : bookItem.Language}</p>
                            </div>
                            <div className='pb-2'>
                                <p className="fw-bold">Jumlah Halaman:</p>
                                <p className="">{bookItem.pageCount}</p>
                            </div>
                        </div>
                        <Stack direction="vertical" gap={3}>
                            <button type="button" className="btn btn-outline-dark" onClick={handleBookBorrow}>Pinjam Buku</button>
                            <button 
                                type="button" 
                                className="btn btn-dark" 
                                onClick={handleBookSaved}
                            >
                            + Save
                            </button>
                        </Stack>
                    </div>
                </div>
            </div>
            <div className='pt-3 mb-5'>
                <p className='fw-bold text-justify'>Deskripsi:</p>
                <p>{
                        // htmlSpecialChars(bookItem.description)
                        bookItem.description
                    }
                </p>
            </div>
            <div>
                <h4>Riwayat Peminjam</h4>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookDesc;