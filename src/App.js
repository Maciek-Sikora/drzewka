import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 
import obrazek from './assets/images/165-1651276_apple-tree-clipart-apple-tree-clip-art-at.png'
import { AnimalItem } from "./components/Item"


function App() {
  const myData = {
    src: obrazek,
    title:'tygrys',
    des:"asdsadsdasda"
  }
  return (
<>
<Container>
    <Row>
      <Col xs={12} md={6}>
      <AnimalItem info ={myData}/>
      </Col>
      <Col xs={12} md={6}>
      <AnimalItem info ={myData}/>
      </Col>
    </Row>
</Container>
</>
  );
}

export default App;
