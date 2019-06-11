import React, {useState} from 'react';  
import Card from "react-bootstrap/Card"

export function AnimalItem(props){
    const[visible,setVisible] = useState(false)
    if (visible == true){
return(
    <Card onClick={ ()=>setVisible(!visible)}>
        <Card.Img variant="top" src={props.info.src} />
  <Card.Body>
    <Card.Title>{props.info.title}</Card.Title>
    <Card.Text>
    {props.info.des}
    </Card.Text>
  </Card.Body>
    </Card>
)}else{
    return <Card onClick={ () => setVisible(!visible) }>
         <Card.Img variant="top" src={props.info.src} />

    </Card>
}
}