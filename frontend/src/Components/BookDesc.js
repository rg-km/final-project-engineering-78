import React from 'react';
import {
    Stack,
    Image,
    Flex,
} from "react-bootstrap"

const BookDesc = ({key, id, thumbnail, bookItem}) => {
    return (
        <div className="px-5 pt-3 mx-auto">
            <h4>{bookItem.title}</h4>
            <p>{bookItem.subtitle}</p>
            <div className="d-inline-flex justify-content-between">
                <div className='mx-auto'>
                    <Image src={thumbnail} style={{ width: '14rem'}} />
                </div>
                <div className='pl-5'>
                    <div className="d-inline-flex justify-content-between mx-5">
                        <div className='mx-5'>
                            <div className='pb-2'>
                                <p className="fw-bold">Kategori:</p>
                                <p className="">{bookItem.categories}</p>
                            </div>
                            <div className='pb-2'>
                                <p className="fw-bold">Penulis:</p>
                                <p className="">
                                    {
                                        bookItem.authors?.map((author, index) => {
                                            return (
                                                <span key={index}>- {author}</span>
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
                            <button type="button" class="btn btn-outline-dark">Pinjam Buku</button>
                            <button type="button" class="btn btn-dark">+ Save</button>
                        </Stack>
                    </div>
                </div>
            </div>
            <div className='pt-3 mb-5'>
                <p className='fw-bold text-justify'>Deskripsi:</p>
                <p>{bookItem.description}</p>
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