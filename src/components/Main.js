import React from 'react';
import HornedBeast from './HornedBeast.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  render() {
    let hornedAnimals = this.props.data.map((animal, id) => {
      return <HornedBeast
          image_url={animal.image_url}
          title={animal.title}
          decsription={animal.description}
          key={animal._id}
          handleOpenModal={this.props.handleOpenModal}
          id={animal._id}
          animalObj={animal}
        />
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