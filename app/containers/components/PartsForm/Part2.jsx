import React, { Component } from "react";

import {
  FormGroup,
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItem,
  FormSelect,
  FormInput,
} from "shards-react";

import Dropzone from "../../components/Dropzone";

class Part2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabUpload: 1,
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

  };

  handleTabUpload = (option) => {
    this.setState({ tabUpload: option });
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
    const {
      city,
      addressResidence,
      typeHouse,
      apto,
      interior,
      stratum,
      telephone,
      movil,
      planMovil,
      email,
      typeTransport,
      communication
    } = this.state;
    return (
      <div className="animateForm">
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
            <Row>
              <Col sm="6" md="6" lg="6" className="p-2">
                <div className="labelContainer">
                  <label htmlFor="#nivelStuden" className="labelFormQuoteInfo">
                    Ciudad donde recide (*)
                  </label>
                </div>
                <FormSelect
                  className="inputFormQuoteInfo"
                  onChange={this.myChangeHandler}
                  name="city"
                  id="#city"
                  value={city != undefined ? city : ""}
                >
                  <option value="">Seleccione la ciudad</option>
                  <option value="bogota-dc">Bogotá, D.C.</option>
                  <option value="amazonas">Amazonas</option>
                  <option value="antioquia">Antioquia</option>
                  <option value="arauca">Arauca</option>
                  <option value="archipielago-de-san-andres-providencia-y-santa-catalina">
                    Archipiélago de San Andrés, Providencia y Santa Catalina
                  </option>
                  <option value="atlantico">Atlántico</option>
                  <option value="bolivar">Bolívar</option>
                  <option value="boyaca">Boyacá</option>
                  <option value="caldas">Caldas</option>
                  <option value="caqueta">Caquetá</option>
                  <option value="casanare">Casanare</option>
                  <option value="cauca">Cauca</option>
                  <option value="cesar">Cesar</option>
                  <option value="choco">Chocó</option>
                  <option value="cordoba">Córdoba</option>
                  <option value="cundinamarca">Cundinamarca</option>
                  <option value="guainia">Guainía</option>
                  <option value="guaviare">Guaviare</option>
                  <option value="huila">Huila</option>
                  <option value="la-guajira">La Guajira</option>
                  <option value="magdalena">Magdalena</option>
                  <option value="meta">Meta</option>
                  <option value="narino">Nariño</option>
                  <option value="norte-de-santander">Norte de Santander</option>
                  <option value="putumayo">Putumayo</option>
                  <option value="quindio">Quindio</option>
                  <option value="risaralda">Risaralda</option>
                  <option value="santander">Santander</option>
                  <option value="sucre">Sucre</option>
                  <option value="tolima">Tolima</option>
                  <option value="valle-del-cauca">Valle del Cauca</option>
                  <option value="vaupes">Vaupés</option>
                  <option value="vichada">Vichada</option>
                </FormSelect>
              </Col>
              <Col sm="6" md="6" lg="6" className="p-2">
                <div className="labelContainer">
                  <label
                    htmlFor="#addressResidence"
                    className="labelFormQuoteInfo"
                  >
                    Dirección de residencia (*)
                  </label>
                </div>
                <FormInput
                  className="inputFormQuoteInfo"
                  onChange={this.myChangeHandler}
                  id="#addressResidence"
                  name="addressResidence"
                  type="text"
                  placeholder=""
                  value={addressResidence != undefined ? addressResidence : ""}
                />
              </Col>
              <Col sm="6" md="6" lg="6" className="p-2">
                <div className="labelContainer">
                  <label htmlFor="#typeHouse" className="labelFormQuoteInfo">
                    Tipo de Vivienda (*)
                  </label>
                </div>
                <FormSelect
                  className="inputFormQuoteInfo"
                  onChange={this.myChangeHandler}
                  name="typeHouse"
                  id="#typeHouse"
                  value={typeHouse != undefined ? typeHouse : ""}
                >
                  <option value="">Seleccione tipo vivienda</option>
                  <option value="1">Propia</option>
                  <option value="2">Alquilada</option>
                  <option value="3">Familiar</option>
                </FormSelect>
                {(() => {
                  if (this.state.typeHouse === "2") {
                    return (
                      <Container className="p-0">
                        <Row>
                          <Col>
                            <div className="labelContainer">
                              <label
                                htmlFor="#apto"
                                className="labelFormQuoteInfo"
                              >
                                Apto
                              </label>
                            </div>
                            <FormInput
                              className="inputFormQuoteInfo"
                              onChange={this.myChangeHandler}
                              id="#apto"
                              name="apto"
                              type="text"
                              placeholder=""
                              value={apto != undefined ? apto : ""}
                            />
                          </Col>
                          <Col>
                            <div className="labelContainer">
                              <label
                                htmlFor="#interior"
                                className="labelFormQuoteInfo"
                              >
                                Interior
                              </label>
                            </div>
                            <FormInput
                              className="inputFormQuoteInfo"
                              onChange={this.myChangeHandler}
                              id="#interior"
                              name="interior"
                              type="text"
                              placeholder=""
                              value={interior != undefined ? interior : ""}
                            />
                          </Col>
                        </Row>
                      </Container>
                    );
                  }
                })()}
              </Col>
              <Col sm="6" md="6" lg="6" className="p-2">
                <div className="labelContainer">
                  <label htmlFor="#stratum" className="labelFormQuoteInfo">
                    Estrato (*)
                  </label>
                </div>
                <FormSelect
                  className="inputFormQuoteInfo"
                  onChange={this.myChangeHandler}
                  name="stratum"
                  id="#stratum"
                  value={stratum != undefined ? stratum : ""}
                >
                  <option value="">Seleccione número</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </FormSelect>
              </Col>
              <Col sm="6" md="6" lg="6" className="p-2">
                <div className="labelContainer">
                  <label htmlFor="#telephone" className="labelFormQuoteInfo">
                    Teléfono (*)
                  </label>
                </div>
                <FormInput
                  className="inputFormQuoteInfo"
                  onChange={this.myChangeHandler}
                  id="#telephone"
                  name="telephone"
                  value={telephone != undefined ? telephone : ""}
                  type="text"
                  placeholder=""
                />
              </Col>
              <Col sm="6" md="6" lg="6" className="p-2">
                <div className="labelContainer">
                  <label htmlFor="#movil" className="labelFormQuoteInfo">
                    Número célular (*)
                  </label>
                </div>
                <FormInput
                  className="inputFormQuoteInfo"
                  onChange={this.myChangeHandler}
                  id="#movil"
                  name="movil"
                  type="text"
                  value={movil != undefined ? movil : ""}
                  placeholder=""
                />
              </Col>
              <Col sm="6" md="6" lg="6" className="p-2">
                <div className="labelContainer">
                  <label htmlFor="#planMovil" className="labelFormQuoteInfo">
                    Plan movil (*)
                  </label>
                </div>
                <FormSelect
                  className="inputFormQuoteInfo"
                  onChange={this.myChangeHandler}
                  name="planMovil"
                  id="#planMovil"
                  value={planMovil != undefined ? planMovil : ""}
                >
                  <option value="">Seleccione tipo plan</option>
                  <option value="1">Pos pago</option>
                  <option value="2">Prepago</option>
                  <option value="3">Tengo los dos</option>
                </FormSelect>
              </Col>
              <Col sm="6" md="6" lg="6" className="p-2">
                <div className="labelContainer">
                  <label htmlFor="#email" className="labelFormQuoteInfo">
                    Correo electrónico (*)
                  </label>
                </div>
                <FormInput
                  className="inputFormQuoteInfo"
                  onChange={this.myChangeHandler}
                  id="#email"
                  name="email"
                  type="email"
                  placeholder=""
                  value={email != undefined ? email : ""}
                />
              </Col>
              <Col sm="6" md="6" lg="6" className="p-2">
                <div className="labelContainer">
                  <label
                    htmlFor="#typeTransport"
                    className="labelFormQuoteInfo"
                  >
                    Que usas para transporte? (*)
                  </label>
                </div>
                <FormSelect
                  className="inputFormQuoteInfo"
                  onChange={this.myChangeHandler}
                  name="typeTransport"
                  id="#typeTransport"
                  value={typeTransport != undefined ? typeTransport : ""}
                >
                  <option value="">Seleccione tipo transporte</option>
                  <option value="1">Carro Particular</option>
                  <option value="2">Moto</option>
                  <option value="3">Uber</option>
                  <option value="4">Transporte público</option>
                </FormSelect>
              </Col>
              <Col sm="6" md="6" lg="6" className="p-2">
                <div className="labelContainer">
                  <label
                    htmlFor="#communication"
                    className="labelFormQuoteInfo"
                  >
                    Como te enteraste de nosotros? (*)
                  </label>
                </div>
                <FormSelect
                  className="inputFormQuoteInfo"
                  onChange={this.myChangeHandler}
                  name="communication"
                  id="#communication"
                  value={communication != undefined ? communication : ""}
                >
                  <option value="">Seleccione</option>
                  <option value="1">Facebook</option>
                  <option value="2">Un amigo o conocido</option>
                  <option value="3">WhatsApp</option>
                  <option value="4">Google o Web</option>
                </FormSelect>
              </Col>
            </Row>
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
                <p className="txtNote">
                  Nota: Es necesario subir todos los archivos que te exige cada
                  tab.
                </p>
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
          </Container>
        </FormGroup>
        <FormGroup className="p-0 pr-4 pl-4 ">
          <Button
            type="button"
            className="btnFormQuote"
            block
            onClick={this.props.submitForm}
          >
            Solicitar Financiamiento
          </Button>
        </FormGroup>
      </div>
    );
  }
}
export default Part2;
