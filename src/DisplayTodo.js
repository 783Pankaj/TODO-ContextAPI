import React, { useContext } from 'react'
import { todoData } from './components/Todo'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DisplayTodo = () => {
    let storeTodo  = useContext(todoData)
  return (

    <Container >
    <Row>
      <Col color='white'>{storeTodo}</Col>
    </Row>
  </Container>
  )
}

export default DisplayTodo
