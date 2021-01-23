import React, { Component } from "react";
import { Form, Container, Row, Col } from "shards-react";

import Moment from "react-moment";
import swal from "sweetalert";

import logoGeneral from "../../../assets/img/logo.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import axios from "axios";
import { urlSend } from "../../configUrl";

//Part Form Quote Info
import Part1 from "../components/PartsForm/Part1";
import Part2 from "./PartsForm/Part2";

export class InfoPacteform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formPart: 1,
      formdata: {},
      formdata2: {},
    };
  }

  formatPressing = (number) =>
    this.formatCurrency("es-CO", "COP", null, number);

  formatCurrency(local, currency, fractionDigits, number) {
    let formatted = new Intl.NumberFormat(local, {
      style: "currency",
      currency: currency,
      minimumFractionDigits: fractionDigits,
    }).format(number);

    return formatted;
  }

  clickPrevform = (e) => {
    this.setState({
      formPart: 1,
    });
  };

  dataForm = (param) => {
    this.setState({
      formdata: param,
    });
  };

  dataForm2 = (param) => {
    this.setState({
      formdata2: param,
    });
  };

  clickNextform = (e) => {
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
    } = this.state.formdata;

    if (firtsName === "" || firtsName === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa el primero nombre.",
        icon: "error",
        button: "Ok!",
      });
    } else if (secondName === "" || secondName === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa el segundo nombre.",
        icon: "error",
        button: "Ok!",
      });
    } else if (lastName === "" || lastName === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa el primer apellido.",
        icon: "error",
        button: "Ok!",
      });
    } else if (lastName2 === "" || lastName2 === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa el segundo apellido.",
        icon: "error",
        button: "Ok!",
      });
    } else if (birthDate === "" || birthDate === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa la fecha nacimiento.",
        icon: "error",
        button: "Ok!",
      });
    } else if (typeDocument === "" || typeDocument === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa el tipo de documento.",
        icon: "error",
        button: "Ok!",
      });
    } else if (numberDocument === "" || numberDocument === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa el numero de idenficación.",
        icon: "error",
        button: "Ok!",
      });
    } else if (expedDocument === "" || expedDocument === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa el campo expedio en.",
        icon: "error",
        button: "Ok!",
      });
    } else if (expedDate === "" || expedDate === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa la fecha de expedición.",
        icon: "error",
        button: "Ok!",
      });
    } else if (typeGenero === "" || typeGenero === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa el tipo género.",
        icon: "error",
        button: "Ok!",
      });
    } else if (stateCivil === "" || stateCivil === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa el estado civil.",
        icon: "error",
        button: "Ok!",
      });
    } else if (stateLive === "" || stateLive === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa con quien vives.",
        icon: "error",
        button: "Ok!",
      });
    } else if (countChildren === "" || countChildren === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa cuantos hijos tienes.",
        icon: "error",
        button: "Ok!",
      });
    } else if (countDepends === "" || countDepends === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa cuantos dependen de ti.",
        icon: "error",
        button: "Ok!",
      });
    } else if (nivelStudent === "" || nivelStudent === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa nivel de estudio.",
        icon: "error",
        button: "Ok!",
      });
    } else {
      this.setState({
        formPart: 0,
      });
    }
  };

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  submitForm = (e) => {
    e.preventDefault();
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
    } = this.state.formdata;

    const {
      addressResidence,
      city,
      email,
      movil,
      planMovil,
      stratum,
      telephone,
      typeHouse,
      typeTransport,
      communication,
      url1,
      url2,
      url3,
      url4,
    } = this.state.formdata2;

    if (city === "" || city === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa la ciudad.",
        icon: "error",
        button: "Ok!",
      });
    } else if (addressResidence === "" || addressResidence === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa la dirección de residencia.",
        icon: "error",
        button: "Ok!",
      });
    } else if (typeHouse === "" || typeHouse === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa el tipo de casa.",
        icon: "error",
        button: "Ok!",
      });
    } else if (stratum === "" || stratum === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa el estrato de tu vivienda.",
        icon: "error",
        button: "Ok!",
      });
    } else if (telephone === "" || telephone === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa el telefóno fijo.",
        icon: "error",
        button: "Ok!",
      });
    } else if (movil === "" || movil === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa el número movil.",
        icon: "error",
        button: "Ok!",
      });
    } else if (planMovil === "" || planMovil === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa el plan movil.",
        icon: "error",
        button: "Ok!",
      });
    } else if (email === "" || email === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa el correo electrónico.",
        icon: "error",
        button: "Ok!",
      });
    } else if (!this.validateEmail(email)) {
      swal({
        title: "Error!",
        text: "Ingresa el correo correctamente.",
        icon: "error",
        button: "Ok!",
      });
    } else if (typeTransport === "" || typeTransport === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa el tipo de transporte.",
        icon: "error",
        button: "Ok!",
      });
    } else if (communication === "" || communication === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa como te enteraste de nosotros.",
        icon: "error",
        button: "Ok!",
      });
    } else if (url1 === "" || url1 === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa los extractos bancarios.",
        icon: "error",
        button: "Ok!",
      });
    } else if (url2 === "" || url2 === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa el comprobante nómina.",
        icon: "error",
        button: "Ok!",
      });
    } else if (url3 === "" || url3 === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa el certificado laboral.",
        icon: "error",
        button: "Ok!",
      });
    } else if (url4 === "" || url4 === undefined) {
      swal({
        title: "Error!",
        text: "Ingresa la declaración de renta.",
        icon: "error",
        button: "Ok!",
      });
    } else {
      let tax = this.props.data.tax;
      let month = this.props.data.month;
      let service = this.props.data.service;
      let pressing = this.props.data.value_pressing;
      let result = this.formatPressing(this.props.data.result);

      const params = {
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
        addressResidence,
        city,
        email,
        movil,
        planMovil,
        stratum,
        telephone,
        typeHouse,
        typeTransport,
        communication,
        url1,
        url2,
        url3,
        url4,
        service,
        pressing,
        tax,
        result,
        month,
      };

      axios
        .post(urlSend, params)
        .then((responde) => {
          swal({
            title: "Se ha enviado!",
            text:
              "Estudiaremos tu caso de crédito, en pocos momentos te daremos la aprobación.",
            icon: "success",
            button: "Ok!",
          }).then((value) => {
            if (value) {
              window.location.assign("https://pacte.com.co/");
            }
          });
        })
        .catch((error) => {
          console.log(`No se pudo enviar info: ${error}`);
        });
    }
  };

  render() {
    return (
      <div>
        {(() => {
          if (this.props.data.view === true) {
            return (
              <Container className="contentFormQuote">
                <Row>
                  <Col sm="12" md="7" lg="7" className="p-0">
                    <Container>
                      <Form className="formQuote">
                        {(() => {
                          if (this.state.formPart === 1) {
                            return (
                              <Part1
                                clickNext={this.clickNextform}
                                dataForm={this.dataForm}
                                outputForm={this.state.formdata}
                              />
                            );
                          } else {
                            return (
                              <Part2
                                clickPrev={this.clickPrevform}
                                dataForm={this.dataForm2}
                                submitForm={this.submitForm}
                                outputForm={this.state.formdata2}
                              />
                            );
                          }
                        })()}
                      </Form>
                    </Container>
                  </Col>
                  <Col
                    sm="12"
                    md="5"
                    lg="5"
                    className="p-2"
                    className="content-table-result"
                  >
                    <Container className="p-3">
                      <Row>
                        <Col xs="4" sm="3" md="5" lg="3" className="p-0">
                          <img src={logoGeneral} alt="image-logo" />
                        </Col>
                        <Col xs="8" sm="9" md="7" lg="9" className="p-0">
                          <div className="contentInfoservice p-0">
                            <h2 className="titelInvertion">
                              {this.props.data.service}
                            </h2>
                            <p className="txtsubInvertion">
                              Este es el resultado de tu crédito.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                    <table className="p-0 m-0">
                      <tbody>
                        <tr>
                          <td className="p-0">
                            <div className="startTablePressing">
                              <table className="p-0 m-0">
                                <tbody>
                                  <tr>
                                    <td className="columnTableLeft">
                                      <p className="txt-right">
                                        Valor Solicitado
                                      </p>
                                    </td>
                                    <td>
                                      <strong
                                        style={{
                                          color: "#fa5d15",
                                          fontWeight: 600,
                                        }}
                                      >
                                        {this.props.data.value_pressing
                                          ? this.props.data.value_pressing
                                          : ""}
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="columnTableLeft">
                                      <p className="txt-right">Interés</p>
                                    </td>
                                    <td>
                                      {this.props.data.tax != null
                                        ? `${this.props.data.tax} %`
                                        : ""}
                                      EA
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-0">
                            <div className="endTablePressing">
                              <table className="p-0 m-0">
                                <tbody>
                                  <tr>
                                    <td className="columnTableLeft">
                                      <p className="txt-right">
                                        Fecha Solicitud
                                      </p>
                                    </td>
                                    <td>
                                      <strong>
                                        <Moment format="D MMM YYYY" withTitle>
                                          {this.props.data.date}
                                        </Moment>
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="columnTableLeft">
                                      <p className="txt-right">
                                        Tiempo / Plazo
                                      </p>
                                    </td>
                                    <td>
                                      {this.props.data.month != null
                                        ? `${this.props.data.month} meses`
                                        : ""}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-0">
                            <div className="startTablePressing">
                              <table className="p-0 m-0">
                                <tbody>
                                  <tr>
                                    <td className="columnTableLeft">
                                      <p className="txt-right">Cuota por mes</p>
                                    </td>
                                    <td className="font-size-20">
                                      {this.formatPressing(
                                        this.props.data.result
                                      )}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Col>
                </Row>
              </Container>
            );
          }
        })()}
      </div>
    );
  }
}
