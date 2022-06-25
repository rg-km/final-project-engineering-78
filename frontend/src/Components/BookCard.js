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

const BookCard = ({id, title, subtitle, author, thumbnail}) => {
    // console.log(book)
    return (
        <>
            <Card className="mx-2">
                <Card.Img variant="top" src={thumbnail} style={{ width: '10rem', padding: "1rem 0", margin: "0 auto"}} />
                <Card.Body>
                    <Card.Title style={{ fontSize: '14pt' }}>{title}</Card.Title>
                    <Card.Text style={{ fontSize: '12pt' }}>Author : {
                        // author.map((author, index) => {
                        //     return (
                        //         <span key={index}>{author}</span>
                        //     )
                        // })
                    }
                    </Card.Text>
                    <Card.Text style={{ fontSize: '10pt' }}>{subtitle}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </>
    )
    // return (
    //     <div>
    //         {
    //             book.map((item) => {
    //                 let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
    //                 // let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount
    //                 let title = item.volumeInfo.title
    //                 let author = item.volumeInfo.author
    //                 if (thumbnail != undefined && title != undefined && author != undefined) {
    //                     return (
    //                         <div>
    //                             <Stack direction="horizontal" gap={2}>
    //                                 <CardGroup>
    //                                     <Card className="mx-2">
    //                                         <Card.Img variant="top" src={thumbnail} />
    //                                         <Card.Body>
    //                                             <Card.Title>{title}</Card.Title>
    //                                             <Card.Text>{author}</Card.Text>
    //                                             {/* <Card.Text>
    //                                             This is a wider card with supporting text below as a natural
    //                                             lead-in to additional content. This content is a little bit
    //                                             longer.
    //                                             </Card.Text> */}
    //                                         </Card.Body>
    //                                         <Card.Footer>
    //                                             <small className="text-muted">Last updated 3 mins ago</small>
    //                                         </Card.Footer>
    //                                     </Card>
    //                                 </CardGroup>
    //                             </Stack>
    //                         </div>
    //                     )
    //                 }
    //             })
    //         }
    //     </div>
    // );
};

export default BookCard;