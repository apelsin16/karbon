import React from 'react';
import { Card, Accordion, Button } from "react-bootstrap";

const Title = ({text, idx}) => {
    return (
        <Card.Header>
            <h2>
                <Accordion.Toggle  as={Button} variant="link" eventKey={idx}>
                    {text}
                </Accordion.Toggle>
            </h2>

        </Card.Header>
    )
}

export default Title;
