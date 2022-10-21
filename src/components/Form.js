import React from 'react';
import Form from 'react-bootstrap/Form';



class Animalform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHorns: '',
    }
  }

   render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group >
          <Form.Label>View Beast by Number of Horns</Form.Label>
          <Form.Select name="selected" id="" onChange={this.props.onChange}>
            <option> All Beast </option>
            <option value='1'>One Horn</option>
            <option value='2'>Two Horns</option>
            <option value='3'>Three Horns</option>
            <option value='100'>100 Horns</option>
            </Form.Select>
        </Form.Group>
      </Form>
    )
  }
}

export default Animalform;