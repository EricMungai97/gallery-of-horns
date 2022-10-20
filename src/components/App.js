// imports
import React from 'react';
import Header from './Header.js';
import data from '../data.json';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast.js';
import Footer from './Footer.js';







// class components
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      likedBeast: {},


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
  render() {
    return (
      <>
        <Header />
        <SelectedBeast
          show={this.state.showModal}
          onHide={this.handleCloseModal}
          likedBeast={this.state.likedBeast}
        />
        <Main
          data={data}
          handleOpenModal={this.handleOpenModal}
        />

        <Footer />
      </>
    )
  }
}

// export
export default App;





