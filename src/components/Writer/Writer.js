import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Writer.css';

const Writer = (props) => {
    const { addWantToRead, writer } = props;
    const { name, picture, timeRequired, pages, about } = writer;
    return (
        <Card className='writer'>
            <Card.Img className='writer-img center' src={picture} />
            <Card.Body>
                <Card.Title className='left'><span className='bold-name '>{name}</span></Card.Title>
                <Card.Text className='left'>
                    {about}
                    <br />
                    Time: <span className='bold'>{timeRequired}</span>
                    <br />
                    Summary: <span className='bold'>{pages}</span> pages
                </Card.Text>
                <Button onClick={() => addWantToRead(writer)} className='btn-read'>Want to Read</Button>
            </Card.Body>
        </Card>
    );
};

export default Writer;