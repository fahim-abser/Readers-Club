import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Writer.css';

const Writer = (props) => {
    const { addWantToRead, writer } = props;
    const { name, picture, timeRequired, pages, about } = writer;
    return (
        <Card className='writer'>
            <Card.Img className='writer-img' src={picture} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {about}
                    <br />
                    Time:{timeRequired}
                    <br />
                    Pages:{pages}
                </Card.Text>
                <Button onClick={() => addWantToRead(writer)} className='btn-read'>Want to Read</Button>
            </Card.Body>
        </Card>
    );
};

export default Writer;