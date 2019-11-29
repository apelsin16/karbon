import React from 'react';
import { Accordion, Card } from "react-bootstrap";

const itemOutput = item => {
    if (typeof(item) == 'object') {
        return item.map((arrItem, itemId) => 
        (<ul key={itemId}>{Object.keys(arrItem).map((elem, idEl) => (
    <li key={idEl}>{elem} : {arrItem[elem]}</li>
        ))}</ul>)        
        )
    } else {
        return item
    }
}

const Device = ({device, idx, editableItems}) => {
    return (
        <Accordion.Collapse  eventKey={idx}>
            <Card.Body>
                {device.map((el, i) => 
                   
                (<ul key={i}>{Object.keys(el).map((item, id )=> 
                (<li key={id}>{item} : {itemOutput(el[item])}</li>))}
                </ul>)
                )}
            </Card.Body>
        </Accordion.Collapse>
    )
}

export default Device;
