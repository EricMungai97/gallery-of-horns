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

  handleOpenModal = (key) => {
    this.setState({ showModal: true, });
    let newData = data.filter((animal) => {
      return animal._id === key;

   
    })
    this.setState({likedBeast: newData[0]})
    console.log(newData);

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
      this.setState({sortedData: newData});
    } else{
      this.setState({sortedData: data});
    }
  }

  // LONGER WAY TO DO IT
  //   if(selected === '1'){

  //     let newData = data.filter(animal => animal.horns === 1);
  //     this.setState({
  //       sortedData: newData
  //     })
  //   } else if (selected === '2'){
  //     let newData = data.filter(animal => animal.horns === 2);
  //     this.setState({
  //       sortedData: newData
  //     })
  //   } else if (selected === '3'){
  //     let newData = data.filter(animal => animal.horns === 3);
  //     this.setState({
  //       sortedData: newData
  //     })
  //   } else if(selected === '100'){
  //     let newData = data.filter(animal => animal.horns === 100);
  //     this.setState({
  //       sortedData: newData
  //     })
  //   } else {
  //     this.setState({
  //       sortedData: data
  //     })
  //   }

  // }
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





