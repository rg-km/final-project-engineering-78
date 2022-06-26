import React from 'react';
import {
    Card,
    CardGroup,
    Stack,
    CardBody,
    CardTitle,
    CardText,
    CardFooter,
} from "react-bootstrap"
import {Link, useNavigate, useParams} from 'react-router-dom'

const BookCard = ({id, bookItem, thumbnail}) => {
    // console.log(book)

    return (
        <>
            <Card className="mx-2" >
                <Card.Img variant="top" src={thumbnail} style={{ width: '10rem', padding: "1rem 0", margin: "0 auto"}} />
                <Card.Body>
                    <Card.Title style={{ fontSize: '12pt' }}>{bookItem.title}</Card.Title>
                    <Card.Text style={{ fontSize: '12pt' }}>Author : <br/> {
                        bookItem.authors?.map((author, index) => {
                            return (
                                <span key={index}>- {author} <br /></span>
                            )
                        })
                    }
                    </Card.Text>
                    <Card.Text style={{ fontSize: '10pt' }}>{bookItem.subtitle}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
};

export default BookCard;