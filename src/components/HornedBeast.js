import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Hornedbeast.css'
import Col from 'react-bootstrap/Col';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageClicked: 0,
    }

  }

  handleImageClick = () => {
    this.props.handleOpenModal(this.props.id)
    this.setState({
      imageClicked: this.state.imageClicked + 1
    });
  }

  render() {
    return (
      <>
        <Col className='m-4'>
          <Card className='p-3'>
            <Card.Img variant="top"
              onClick={this.handleImageClick}
              src={this.props.image_url}
              alt={this.props.description}
              title={this.props.title} />
            <Card.Body>
              <Card.Title ><h2>{this.props.title}</h2></Card.Title>
              <Card.Text>
                <p>{this.props.description}</p>
              </Card.Text>
              <p>Click My image If I'm your Favorite!</p>
              <span>❤️ {this.state.imageClicked} Likes</span>


            </Card.Body>
          </Card>
        </Col>
        {/* <h2>{this.props.title}</h2>
        <p >❤️ {this.state.imageClicked} Likes</p>
        <img onClick={this.handleLikes} src={this.props.image_url} alt={this.props.description} title={this.props.title} />
        <p>{this.props.description}</p> */}
      </>
    )
  }
}

export default HornedBeast;