import React, {Component} from "react";
import {Col, Container, ListGroup, ListGroupItem, Row, FormGroup, Button, FormCheckbox} from "shards-react";
import Dropzone from "../Dropzone";

class Part3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabUpload: 1,
            check: false,
            url1: "",
            url2: "",
            url3: "",
            url4: "",
        };
    }

    componentDidMount() {
        let dataBack = this.props.outputForm;
        this.setState(dataBack);
    }

    acceptMethods = (param1, param2) => {
        switch (param2) {
            case "1":
                this.setState({
                    url1: param1,
                });
                break;
            case "2":
                this.setState({
                    url2: param1,
                });
                break;
            case "3":
                this.setState({
                    url3: param1,
                });
                break;
            default:
                this.setState({
                    url4: param1,
                });
        }

        setTimeout(() => {
            this.props.dataForm(this.state);
        }, 200);
    }

    handleTabUpload = (option) => {
        this.setState({tabUpload: option});
    };

    myChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });


        setTimeout(() => {
            this.props.dataForm(this.state);
        }, 200);

    };



    render() {

        return (
            <div>
            <FormGroup>
            <Container>
                <Row>
                    <Col sm="6" md="6" lg="6"></Col>
                    <Col sm="6" md="6" lg="6" className="text-right">
                        <Button onClick={this.props.clickPrev} className="btn-backForm">
                            Volver
                        </Button>
                    </Col>
                </Row>
                <h5 className="titleSubform">Datos Adicionales</h5>
                <div className="labelContainer">
                    <label htmlFor="#income_month" className="labelFormQuoteInfo">
                        <strong>Nota: </strong>
                        Estos campos no son obligatorios, pero a mayor información estarás seguro de que te aprobemos el crédito.
                    </label>
                </div>
                <Row className="pt-4">
                    <Col sm="4" md="4" lg="4" className="p-0">
                        <ListGroup className="p-0 m-0 list-group-name">
                            <ListGroupItem
                                onClick={() => this.handleTabUpload(1)}
                                className={`listItem ${
                                    this.state.tabUpload === 1 ? "activeTab" : ""
                                }`}
                            >
                                <i className="icon-upload"></i> Extractos Bancarios
                            </ListGroupItem>
                            <ListGroupItem
                                onClick={() => this.handleTabUpload(2)}
                                className={`listItem ${
                                    this.state.tabUpload === 2 ? "activeTab" : ""
                                }`}
                            >
                                <i className="icon-upload"></i> Comprobante Nómina
                            </ListGroupItem>
                            <ListGroupItem
                                onClick={() => this.handleTabUpload(3)}
                                className={`listItem ${
                                    this.state.tabUpload === 3 ? "activeTab" : ""
                                }`}
                            >
                                <i className="icon-upload"></i> Certificación Laboral
                            </ListGroupItem>
                            <ListGroupItem
                                onClick={() => this.handleTabUpload(4)}
                                className={`listItem ${
                                    this.state.tabUpload === 4 ? "activeTab" : ""
                                }`}
                            >
                                <i className="icon-upload"></i> Decleración Renta
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col sm="8" md="8" lg="8" className="p-1">
                        <Container className="p-0">
                            <Row>
                                {this.state.tabUpload === 1 ? (
                                    <Col xs="12" sm="12" lg="12" className="p-0">
                                        <Dropzone
                                            upload="Extractos Bancarios"
                                            option="1"
                                            shareMethods={(param1, param2) =>
                                                this.acceptMethods(param1, param2)
                                            }
                                            url={this.state.url1}
                                        />
                                    </Col>
                                ) : null}
                                {this.state.tabUpload === 2 ? (
                                    <Col xs="12" sm="12" lg="12" className="p-0">
                                        <Dropzone
                                            upload="Comprobante Nómina"
                                            option="2"
                                            shareMethods={(param1, param2) =>
                                                this.acceptMethods(param1, param2)
                                            }
                                            url={this.state.url2}
                                        />
                                    </Col>
                                ) : null}
                                {this.state.tabUpload === 3 ? (
                                    <Col xs="12" sm="12" lg="12" className="p-0">
                                        <Dropzone
                                            upload="Certificación Laboral"
                                            option="3"
                                            shareMethods={(param1, param2) =>
                                                this.acceptMethods(param1, param2)
                                            }
                                            url={this.state.url3}
                                        />
                                    </Col>
                                ) : null}
                                {this.state.tabUpload === 4 ? (
                                    <Col xs="12" sm="12" lg="12" className="p-0">
                                        <Dropzone
                                            upload="Declaración Renta"
                                            option="4"
                                            shareMethods={(param1, param2) =>
                                                this.acceptMethods(param1, param2)
                                            }
                                            url={this.state.url4}
                                        />
                                    </Col>
                                ) : null}
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormCheckbox
                            checked={this.state.check}
                            name="check"
                            value={true}
                            onChange={e => this.myChangeHandler(e)}
                        > <span className="parrafo-auth">Acepto todos los terminos y condiciones de este contrato y el tratamiento de  mis datos persoanles.
                            <a target="_blank" href=""> Aqui</a></span>
                        </FormCheckbox>
                    </Col>
                </Row>
            </Container>
        </FormGroup>
        <FormGroup className="p-0 pr-4 pl-4 ">
            <Button
                type="button"
                className="btnFormQuote"
                block
                onClick={this.props.submitForm}
            >
                <span className="labelFormsubmit">Solicitar Financiamiento</span>
            </Button>
        </FormGroup>
            </div>);
    }
}

export default Part3;