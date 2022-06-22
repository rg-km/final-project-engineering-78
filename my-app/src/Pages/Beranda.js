import React, {useState} from 'react';
import axios from 'axios'
import { Card,
    CardGroup,
    Stack,
    Container,
    Image,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';

// to do next: nunggu api buku dan tambah animasi scrolling, responsive kalau bisa
const Beranda = () => {

    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [bookList, setBookList] = useState([])

    const searchBook = (event) => {
        if (event.key === "Enter") {
            // console.log("hello")
            // try {
            //     const res = await axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBLJZPpZGx-vdQFizW2wEGZaMVWQwNrO0c')
            //     const {data} = res
            //     setBookList(data.data)
            // } catch(err) {
            //     console.log(err)
            // }
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBLJZPpZGx-vdQFizW2wEGZaMVWQwNrO0c')
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
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </div>
                    <section className="pt-5">
                        <h3 className="text-center my-5">Buku-buku terpopuler</h3>
                        <Stack direction="horizontal" gap={2}>
                            <CardGroup>
                                <Card className="mx-2">
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                        This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card className="mx-2">
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                        This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card className="mx-2">
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                        This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card className="mx-2">
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                        This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                            </CardGroup>
                        </Stack>
                    </section>
                    <section className="pt-5">
                        <h3 className="text-center my-5">Koleksi Baru dan Diperbarui</h3>
                        <Stack direction="horizontal" gap={2}>
                            <CardGroup>
                                <Card className="mx-2">
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                        This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card className="mx-2">
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                        This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card className="mx-2">
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                        This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card className="mx-2">
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                        This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                            </CardGroup>
                        </Stack>
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