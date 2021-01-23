import React, { Component } from "react";
import { Container, Row, Col } from "shards-react";

import logoGeneral from "../../../assets/img/logo-general.png";


export default class TableQuote extends Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <div>
        <Container className="p-3">
          <Row>
            <Col xs="4" sm="3" md="5" lg="3" className="p-0">
              <img src={logoGeneral} alt="image-logo" />
            </Col>
            <Col xs="8" sm="9" md="7" lg="9" className="p-0">
              <div className="contentInfoservice2 p-0">
                {(() => {
                  if (this.props.service != undefined) {
                    return (
                      <div>
                        <h2 className="titelInvertion">
                          {this.props.service != undefined
                            ? this.props.service
                            : " "}
                        </h2>
                        <p className="txtsubInvertion">
                         {this.props.description}
                        </p>
                      </div>
                    );
                  } else {
                    return (
                      <div>
                        <h2 className="titelInvertion">
                            Solicita un <br></br> crédito
                        </h2>
                        <p className="txtsubInvertion">
                          Ingresa la opción de crédito
                        </p>
                      </div>
                    );
                  }
                })()}
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
                        <p className="txt-right"> Valor Solicitado </p>
                          </td>
                        <td>
                          <strong style={{ color: "#fa5d15", fontWeight: 600 }}>
                            {this.props.pressing != undefined
                              ? this.formatPressing(this.props.pressing)
                              : ""}
                          </strong>
                        </td>
                      </tr>
                      <tr>
                        <td className="columnTableLeft">
                        <p className="txt-right"> Interés </p>
                          </td>
                        <td>
                          {this.props.tax != undefined
                            ? `${this.props.tax} %`
                            : '0%'} EA
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
                          <p className="txt-right">Tiempo / Plazo</p>
                          </td>
                        <td>
                              {(() => {
                                  let month_view = this.props.month;
                                  if(month_view != undefined){
                                    if(this.props.month > 9){
                                      return(
                                        month_view + " meses"
                                      )
                                    }else{
                                      return(
                                        month_view + " mes"
                                      )
                                    }
                                  }else{
                                    return;
                                  }
                              }
                              )()}
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
                          <p className="txt-right" >Cuota por mes</p>
                          </td>
                        <td className="font-size-20">
                          {this.formatPressing(
                            this.props.results != undefined
                              ? this.props.results
                              : ""
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
      </div>
    );
  }
}
