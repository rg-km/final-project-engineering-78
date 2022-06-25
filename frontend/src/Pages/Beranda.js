import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Card,
    CardGroup,
    Stack,
    Container,
    Image,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';
import BookCard from "../Components/BookCard";
import Buku from "../Components/Buku";

// to do next: nunggu api buku dan tambah animasi scrolling, responsive kalau bisa
const Beranda = () => {

    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [bookList, setBookList] = useState([])

    const searchBook = (event) => {
        if (event.key === "Enter") {
            console.log("hello")
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBLJZPpZGx-vdQFizW2wEGZaMVWQwNrO0c'+'&maxResults=20')
            .then(res => setBookList(res.data.items))
            .catch(err => console.log(err))
        }
    }

    return (
        <div>
                <header className="pt-3 pb-5">
                    <Stack direction="horizontal" gap={5}>
                        <Image src="./Images/home.svg" width="600" />
                        <div>
                            <h2>Bangun masa depanmu dengan membaca!</h2>
                            <p>Ayo telusuri buku di EasyPerpus</p>
                        </div>
                    </Stack>
                </header>
                <body>
                    <div className="pt-5 mx-5">
                        <Form className="d-flex">
                            <FormControl
                            type="search"
                            placeholder="Buku apa yang ingin kamu cari?"
                            className="me-2"
                            aria-label="Search"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onKeyPress={searchBook}
                            />
                            {/* <Button variant="outline-success" onClick={() => searchBook}>Search</Button> */}
                        </Form>
                    </div>
                    {/* SEARCH */}
                    {/* <BookCard book={bookList} /> */}

                    <section className="pt-5">
                        <h3 className="text-center my-5">Buku-buku terpopuler</h3>
                        <Buku />
                    </section>
                    <section className="pt-5">
                        <h3 className="text-center my-5">Koleksi Baru dan Diperbarui</h3>
                        <Buku />
                    </section>
                    <section className="mb-5 py-5">
                    <h3 className="text-center my-5">Peminjam Terbanyak Bulan Ini</h3>
                        <div className="d-flex justify-content-center text-center mx-auto">
                            <div>
                                <Stack direction="vertical" className="mx-5">
                                    <Image src="./Images/male profile.svg" width="100" className="mx-auto" />
                                    <p>Nama user</p>
                                    <p>NIM user</p>
                                    <p>xx Loans | xx titles</p>
                                </Stack>
                            </div>
                            <div>
                                <Stack direction="vertical" className="mx-5">
                                    <Image src="./Images/male profile.svg" width="100" className="mx-auto" />
                                    <p>Nama user</p>
                                    <p>NIM user</p>
                                    <p>xx Loans | xx titles</p>
                                </Stack>
                            </div>
                            <div>
                                <Stack direction="vertical" className="mx-5">
                                    <Image src="./Images/male profile.svg" width="100" className="mx-auto" />
                                    <p>Nama user</p>
                                    <p>NIM user</p>
                                    <p>xx Loans | xx titles</p>
                                </Stack>
                            </div>
                        </div>
                    </section>
                </body>
        </div>
    );
};

export default Beranda;