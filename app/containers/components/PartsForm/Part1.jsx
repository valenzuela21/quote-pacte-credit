import React, { Component } from "react";
import {
  FormInput,
  FormGroup,
  Container,
  Row,
  Col,
  Button,
  FormSelect,
} from "shards-react";

class Part1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let dataBack = this.props.outputForm;
    this.setState(dataBack);
  }

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
      firtsName,
      secondName,
      lastName,
      lastName2,
      birthDate,
      typeDocument,
      numberDocument,
      expedDocument,
      expedDate,
      typeGenero,
      stateCivil,
      stateLive,
      countChildren,
      countDepends,
      nivelStudent,
      question_mount
    } = this.state;

    return (
      <FormGroup className="animateForm">

        <Container className="p-0">
          <h5 style={{color : '#070c36' , textAlign: 'center' }} >Vamos a llenar unos datos para conocerte mejor¡</h5>
          <Col sm="12" md="12" lg="12" className="p-2">
            <div className="labelContainer text-center">
              <label htmlFor="#firtsName" className="labelFormQuoteInfo">
                Primero y muy importante para que vas a utilizar este monto ?
              </label>
            </div>
            <FormSelect
                className="inputFormQuoteInfo"
                onChange={this.myChangeHandler}
                name="question_mount"
                id="#question_mount"
                value={question_mount != undefined ? question_mount : ""}
            >
              <option value="">Seleccione</option>
              <option value="1">Inversión</option>
              <option value="2">Gastos personales familiares</option>
              <option value="3">Vacaciones</option>
              <option value="4">Educación</option>
              <option value="5">Un Negocio</option>
              <option value="6">Tengo una emergencia</option>
            </FormSelect>
          </Col>
          <h5 className="titleSubform">Datos Personales</h5>
          <Row>
            <Col sm="6" md="6" lg="6" className="p-2">
              <div className="labelContainer">
                <label htmlFor="#firtsName" className="labelFormQuoteInfo">
                  Primer Nombre (*)
                </label>
              </div>
              <FormInput
                className="inputFormQuoteInfo"
                onChange={this.myChangeHandler}
                name="firtsName"
                id="#firtsName"
                type="text"
                value={firtsName != undefined ? firtsName : ""}
                placeholder=""
              />
            </Col>
            <Col sm="6" md="6" lg="6" className="p-2">
              <div className="labelContainer">
                <label htmlFor="#secondName" className="labelFormQuoteInfo">
                  Segundo Nombre (*)
                </label>
              </div>
              <FormInput
                className="inputFormQuoteInfo"
                onChange={this.myChangeHandler}
                name="secondName"
                id="#secondName"
                type="text"
                value={secondName != undefined ? secondName : ""}
                placeholder=""
              />
            </Col>
            <Col sm="6" md="6" lg="6" className="p-2">
              <div className="labelContainer">
                <label htmlFor="#lastName" className="labelFormQuoteInfo">
                  Primer Apellido (*)
                </label>
              </div>
              <FormInput
                className="inputFormQuoteInfo"
                onChange={this.myChangeHandler}
                name="lastName"
                id="#lastName"
                type="text"
                value={lastName != undefined ? lastName : ""}
                placeholder=""
              />
            </Col>
            <Col sm="6" md="6" lg="6" className="p-2">
              <div className="labelContainer">
                <label htmlFor="#lastName2" className="labelFormQuoteInfo">
                  Segundo Apellido (*)
                </label>
              </div>
              <FormInput
                className="inputFormQuoteInfo"
                onChange={this.myChangeHandler}
                name="lastName2"
                id="#lastName2"
                type="text"
                value={lastName2 != undefined ? lastName2 : ""}
                placeholder=""
              />
            </Col>
            <Col sm="6" md="6" lg="6" className="p-2">
              <div className="labelContainer">
                <label htmlFor="#birthDate" className="labelFormQuoteInfo">
                  Fecha Nacimiento (*)
                </label>
              </div>
              <FormInput
                className="inputFormQuoteInfo"
                onChange={this.myChangeHandler}
                name="birthDate"
                id="#birthDate"
                type="date"
                value={birthDate != undefined ? birthDate : ""}
                placeholder=""
              />
            </Col>
            <Col sm="6" md="6" lg="6" className="p-2">
              <div className="labelContainer">
                <label htmlFor="#typeDocument" className="labelFormQuoteInfo">
                  Tipo Documento (*)
                </label>
              </div>
              <FormSelect
                className="inputFormQuoteInfo"
                onChange={this.myChangeHandler}
                name="typeDocument"
                id="#typeDocument"
                value={typeDocument != undefined ? typeDocument : ""}
              >
                <option value="">Ingresa tipo identificación</option>
                <option value="1">Cédula de ciudadanía</option>
                <option value="2">Nit</option>
                <option value="3">Pasaporte</option>
                <option value="4">Cédula Extranjería</option>
              </FormSelect>
            </Col>
            <Col sm="6" md="6" lg="6" className="p-2">
              <div className="labelContainer">
                <label htmlFor="#numberDocument" className="labelFormQuoteInfo">
                  Número Documento (*)
                </label>
              </div>
              <FormInput
                className="inputFormQuoteInfo"
                onChange={this.myChangeHandler}
                name="numberDocument"
                id="#numberDocument"
                value={numberDocument != undefined ? numberDocument : ""}
                type="number"
                placeholder=""
              />
            </Col>
            <Col sm="6" md="6" lg="6" className="p-2">
              <div className="labelContainer">
                <label htmlFor="#expedDocument" className="labelFormQuoteInfo">
                  Expedido en (*)
                </label>
              </div>
              <FormInput
                className="inputFormQuoteInfo"
                onChange={this.myChangeHandler}
                id="#expedDocument"
                name="expedDocument"
                value={expedDocument != undefined ? expedDocument : ""}
                type="text"
                placeholder=""
              />
            </Col>
            <Col sm="6" md="6" lg="6" className="p-2">
              <div className="labelContainer">
                <label htmlFor="#expedDate" className="labelFormQuoteInfo">
                  Fecha expedida (*)
                </label>
              </div>
              <FormInput
                className="inputFormQuoteInfo"
                onChange={this.myChangeHandler}
                id="#expedDate"
                name="expedDate"
                type="date"
                value={expedDate != undefined ? expedDate : ""}
                placeholder=""
              />
            </Col>
            <Col sm="6" md="6" lg="6" className="p-2">
              <div className="labelContainer">
                <label htmlFor="#typeGenero" className="labelFormQuoteInfo">
                  Género (*)
                </label>
              </div>
              <FormSelect
                className="inputFormQuoteInfo"
                onChange={this.myChangeHandler}
                name="typeGenero"
                id="#typeGenero"
                value={typeGenero != undefined ? typeGenero : ""}
              >
                <option value="">Tipo Genero</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </FormSelect>
            </Col>
            <Col sm="6" md="6" lg="6" className="p-2">
              <div className="labelContainer">
                <label htmlFor="#stateCivil" className="labelFormQuoteInfo">
                  Estado Civil (*)
                </label>
              </div>
              <FormSelect
                className="inputFormQuoteInfo"
                onChange={this.myChangeHandler}
                name="stateCivil"
                id="#stateCivil"
                value={stateCivil != undefined ? stateCivil : ""}
              >
                <option value="">Seleccione estado</option>
                <option value="1">Viudo(a)</option>
                <option value="2">Casado</option>
                <option value="3">Divorciado</option>
                <option value="4">Unión Libre</option>
                <option value="5">Soltero</option>
              </FormSelect>
            </Col>
            <Col sm="6" md="6" lg="6" className="p-2">
              <div className="labelContainer">
                <label htmlFor="#stateLive" className="labelFormQuoteInfo">
                  Vives con (*)
                </label>
              </div>
              <FormSelect
                className="inputFormQuoteInfo"
                onChange={this.myChangeHandler}
                name="stateLive"
                id="#stateLive"
                value={stateLive != undefined ? stateLive : ""}
              >
                <option value="">Seleccione con</option>
                <option value="1">Solo</option>
                <option value="2">Casa Familiar</option>
                <option value="3">Mi familia e hijos</option>
                <option value="4">Comparto un lugar</option>
                <option value="5">Otro</option>
              </FormSelect>
            </Col>
            <Col sm="6" md="6" lg="6" className="p-2">
              <div className="labelContainer">
                <label htmlFor="#countChildren" className="labelFormQuoteInfo">
                  Cuantos hijos tienes (*)
                </label>
              </div>
              <FormSelect
                className="inputFormQuoteInfo"
                onChange={this.myChangeHandler}
                name="countChildren"
                id="#countChildren"
                value={countChildren != undefined ? countChildren : ""}
              >
                <option value="">Seleccione número</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 o más</option>
                <option value="6">No tengo hijos</option>
              </FormSelect>
            </Col>
            <Col sm="6" md="6" lg="6" className="p-2">
              <div className="labelContainer">
                <label htmlFor="#countDepends" className="labelFormQuoteInfo">
                  Cuantos personas dependen de ti (*)
                </label>
              </div>
              <FormSelect
                className="inputFormQuoteInfo"
                onChange={this.myChangeHandler}
                name="countDepends"
                id="#countDepends"
                value={countDepends != undefined ? countDepends : ""}
              >
                <option value="">Seleccione número</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 o más</option>
                <option value="6">Ninguna de las anteriores</option>
              </FormSelect>
            </Col>
            <Col sm="6" md="6" lg="6" className="p-2">
              <div className="labelContainer">
                <label htmlFor="#nivelStuden" className="labelFormQuoteInfo">
                  Cual es tu nivel estudios? (*)
                </label>
              </div>
              <FormSelect
                className="inputFormQuoteInfo"
                onChange={this.myChangeHandler}
                name="nivelStudent"
                id="#nivelStudent"
                value={nivelStudent != undefined ? nivelStudent : ""}
              >
                <option value="">Seleccione nivel</option>
                <option value="1">Primaria</option>
                <option value="2">Bachillerato</option>
                <option value="3">Técnico</option>
                <option value="4">Profesional</option>
              </FormSelect>
            </Col>
          </Row>
          <Row>
            <Col sm="6" md="6" lg="6" className="p-2"></Col>
            <Col sm="6" md="6" lg="6" className="p-2 text-right">
              <Button className="btnFormQuote" onClick={this.props.clickNext}>
                Siguientes Datos
              </Button>
            </Col>
          </Row>
        </Container>
      </FormGroup>
    );
  }
}

export default Part1;
