import './App.css';
import React from 'react'
import Text from './components/Text'
import Header from './components/Header'
import Result from './components/Result'
import {Container, Row, Col} from 'react-bootstrap'




function App() {
  return (
    <div className="App">

      <Container>
        <Row> <Col> <Header/> </Col> </Row>
        <Row> <Col> <Text/> </Col> </Row>
        <Row> <Col> <Result/> </Col> </Row>

      </Container>

    </div>
  );
}

export default App;
