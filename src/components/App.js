// imports
import React from 'react';
import Header from './Header.js';
import data from '../data.json';
import Main from './Main.js';
import Animalform from './Form.js';
import SelectedBeast from './SelectedBeast.js';
import Footer from './Footer.js';







// class components
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      likedBeast: {},
      sortedData: data,
    }
  }

  handleOpenModal = (animalObj) => {
    this.setState({ 
      showModal: true, 
      likedBeast: animalObj
    })
  }


  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleSelect = (event) => {
    let selected = event.target.value;
    console.log('selected', selected);
    if(selected) {
      let newData = data.filter(animal => animal.horns === parseInt(selected));
      console.log(newData);
      this.setState({sortedData: newData});
    } else{
      this.setState({sortedData: data});
    }
  }
 
  render() {
    return (
      <>
        <Header />
        <Animalform 
          onChange={this.handleSelect}
        />
        <SelectedBeast
          show={this.state.showModal}
          onHide={this.handleCloseModal}
          likedBeast={this.state.likedBeast}
        />
        <Main
          data={this.state.sortedData}
          handleOpenModal={this.handleOpenModal}
        />

        <Footer />
      </>
    )
  }
}

// export
export default App;





