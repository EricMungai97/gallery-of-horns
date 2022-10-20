import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          onHide={this.props.onHide}


        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.likedBeast.title}</Modal.Title>

          </Modal.Header>
          <Modal.Body>

            {this.props.likedBeast.description}
          </Modal.Body>
          <Modal.Footer>
            <Card.Img src={this.props.likedBeast.image_url}></Card.Img>
          </Modal.Footer>

        </Modal>
      </>
    );
  }
}

export default SelectedBeast;