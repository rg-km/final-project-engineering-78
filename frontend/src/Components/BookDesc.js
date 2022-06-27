import React, {useState} from 'react';
import {
    Stack,
    Image,
    CardGroup,
    Form,
    Button,
    Modal,
} from "react-bootstrap"
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom'
import BookSaved from '../Pages/BookSaved';
import BookBorrowed from '../Pages/BookSaved';

const BookDesc = ({id, bookItem, image}) => {
    const [bookSavedList, setBookSavedList] = useState([])
    const [bookBorrowedList, setBookBorrowedList] = useState([])
    const [formValues, setFormValues] = useState({})
    const [formModalType, setFormModalType] = useState("")
    const [loading, setLoading] = useState(false)
    const [ampersand, setAmpersand] = useState('&')
    const [doubleQuote, setDoubleQuote] = useState('"')
    const [singleQuote, setSingleQuote] = useState('\'')
    const [lessThan, setLessThan] = useState('<')
    const [greaterThan, setGreaterThan] = useState('>')

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setFormModalType("ADD")
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const htmlSpecialChars = (str) => {
        return str
            .replace(ampersand, '&amp;')
            .replace(doubleQuote, '&quot;')
            .replace(singleQuote, '&#039;')
            .replace(lessThan, '&lt;')
            .replace(greaterThan, '&gt;')
    }

    //note : nanti rapikan dengan useContext

    const handleInputChange = (event) => {
        const {type, value} = event.target
        setFormValues((prevValues) => ({
            ...prevValues,
            [type]: value
        }))
    }

    const handleSubmit = (event) => {
        // if (formModalType == "ADD") {
        //     try {
        //         const bookRes = await axios.post('https://localhost:3001/users', formValues)
        //         if (bookRes.status == 200) {
        //             setBookBorrowedList([...bookBorrowedList, formValues])
        //         }
        //     } catch (err) {
        //         console.log("error fetch book by id", err)
        //     }
        // } else {
        //     try {
        //         const bookRes = await axios.post('https://localhost:3001/users', formValues)
        //         if (bookRes.status == 200) {
        //             setBookSavedList([...bookSavedList, formValues])
        //         }
        //     } catch (err) {
        //         console.log("error fetch book by id", err)
            
        // }
    }

    return (
        <div className="px-5 pt-3 mx-auto">
            <h4>{bookItem.title}</h4>
            <p>{bookItem.subtitle}</p>
            <div className="d-inline-flex justify-content-between">
                <div className='mx-auto'>
                    {/* <Image src={image.thumbnail} style={{ width: '14rem'}} /> */}
                    <Image src={image} style={{ width: '14rem'}} />
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
                            <button type="button" className="btn btn-outline-dark" onClick={handleShow}>Pinjam Buku</button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Title className="text-center">Pinjam Buku</Modal.Title>
                                <Modal.Body>
                                    <Form>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlEmail"
                                    >
                                        <Form.Label>Judul Buku</Form.Label>
                                        <Form.Control
                                        id="title"
                                        type="title"
                                        value={bookItem.title}
                                        // id="disabledTextInput"
                                        // class="form-control"
                                        // placeholder="Ketik Email anda"
                                        autoFocus
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlEmail"
                                    >
                                        <Form.Label>Penulis</Form.Label>
                                        <Form.Control
                                        id="author"
                                        type="author"
                                        value={bookItem.authors}
                                        // placeholder="Ketik Email anda"
                                        autoFocus
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlEmail"
                                    >
                                        <Form.Label>Nama</Form.Label>
                                        <Form.Control
                                        id="nameUser"
                                        type="nameUser"
                                        onChange={handleInputChange}
                                        // placeholder="Ketik Email anda"
                                        autoFocus
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlEmail"
                                    >
                                        <Form.Label>NIM</Form.Label>
                                        <Form.Control
                                        id="nim"
                                        type="nim"
                                        onChange={handleInputChange}
                                        // placeholder="Ketik Email anda"
                                        autoFocus
                                        />
                                    </Form.Group>
                                    <Form.Group className="text-center">
                                        <Button variant="primary" onClick={handleClose}>
                                        Pinjam BUku
                                        </Button>
                                    </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer className="text-center"></Modal.Footer>
                            </Modal>
                            <button 
                                type="button" 
                                className="btn btn-dark" 
                                onClick={handleSubmit}
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
                        <th scope="col">No</th>
                        <th scope="col">Nama User</th>
                        <th scope="col">Tanggal peminjaman</th>
                        <th scope="col">Tanggal pengembalian</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>20-7-2022</td>
                            <td>27-7-2022</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>22-7-2022</td>
                            <td>29-7-2022</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacobssss</td>
                            <td>24-7-2022</td>
                            <td>31-7-2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookDesc;