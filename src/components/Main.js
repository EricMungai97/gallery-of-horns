import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from '../data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  render() {
    let hornedAnimals = [];

    data.forEach((animal, index) => {
      hornedAnimals.push(
        <HornedBeast
          image_url={animal.image_url}
          title={animal.title}
          decsription={animal.description}
          key={index}
        />
      )
    });

    return (
      <>
        <main>
          <Container>
            <Row xs={1} sm={3} md={4} lg={5}>
            {hornedAnimals}
            </Row>
          </Container>
        </main>
      </>
    )
  }
}

export default Main;