import React from "react";
import "../styles/Header.css"
import { auth, signOut } from "../actions/authActions";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap"

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            login: undefined,
            password: undefined
        };
    }
    componentDidMount() {
        this.props.weatherMethod();
    }

    signIn = () => {
        this.props.auth(this.state.login, this.state.password)
    }
    nameChange = (e) => {
        this.setState({ login: e.target.value });
    }
    passChange = (e) => {
        this.setState({ password: e.target.value });
    }

    render() {
        const handleClose = () => this.setState({ show: false });
        const handleShow = () => this.setState({ show: true });
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="title">
                            Погода здесь
                        </h2>
                    </div>
                    <div className="col-12 ">
                        <div className="buttonsBlock d-flex justify-content-start">
                            <button className="updButton button" onClick={this.props.weatherMethod}>
                                Обновить
                            </button>
                            {!this.props.user ?
                                <button onClick={handleShow} className="button ml-3">
                                    Войти
                            </button> :
                                <button onClick={() => {
                                    this.props.signOut();
                                    handleClose();
                                }} className="button ml-3">
                                    Выйти
                            </button>}

                        </div>
                    </div>
                </div>

                <Modal show={this.state.show && !this.props.user} onHide={handleClose}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    size="sm">
                    <Modal.Header closeButton>
                        <Modal.Title>Вход</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modalForm">
                            <input className='modalForm__input' type="text" placeholder='Логин' onChange={this.nameChange} />
                            <input className='modalForm__input' type="password" placeholder='Пароль' onChange={this.passChange} />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => this.signIn()}>
                            Войти
                    </Button>
                        <Button variant="secondary" onClick={() => handleClose()}>
                            Отмена
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

Header.defaultProps = {
    weatherMethod: f => f
};
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    auth: auth,
    signOut: signOut
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);