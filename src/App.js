import './App.css';
import React from 'react'
import Text from './components/Text/Text'
import Header from './components/Header/Header'
import {Container, Row, Col} from 'react-bootstrap'




function App() {
  return (
    <div className="App">
      <Header />
      <Container>     
        <Row> <Col> <Text/> </Col> </Row>
      </Container>
    </div>
  );
}

export default App;
