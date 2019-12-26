import React from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SavedHeader from "./components/SavedHeader";
import { connect } from 'react-redux';
import { handleModal } from './actions/savedCitiesActions'

class App extends React.Component {

  handleClose = () => {
    this.props.handleModal();
  };
  render() {
    return (
      <div>
        <Modal show={this.props.showModal} onHide={this.handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.modalText}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose} >
              Ok
                        </Button>
          </Modal.Footer>
        </Modal>
        <Header />
        <Weather />
        <SavedHeader />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showModal: state.showModal,
    modalText: state.modalText
  }
}
const mapDispatchToProps = {
  handleModal: handleModal
}

export default connect(mapStateToProps, mapDispatchToProps)(App);