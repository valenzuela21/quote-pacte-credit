import React, {Component} from "react";
import {Form, Container, Row, Col} from "shards-react";

import swal from "sweetalert";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import axios from "axios";
import {urlSend} from "../../configUrl";

//Part Form Quote Info
import Part1 from "../components/PartsForm/Part1";
import Part2 from "./PartsForm/Part2";
import Part3 from "./PartsForm/Part3";

import TableQuote2 from './tableQuote2';


export class InfoPacteform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formPart: 1,
            formdata: {},
            formdata2: {},
            formdata3: {},
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

    clickPrevform = (param) => {
        this.setState({
            formPart: param,
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

    dataForm3 = (param) => {
        this.setState({
            formdata3: param,
        });
    };

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    clickNextform = (param) => {

        switch (param) {
            case 1:
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
                } = this.state.formdata;

                if(question_mount === "" || question_mount === undefined ){
                    swal({
                        title: "Error!",
                        text: "Seleccione el por que vas a utilizar el monto.",
                        icon: "error",
                        button: "Ok!",
                    });
                } else if (firtsName === "" || firtsName === undefined) {
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
                        formPart: 2,
                    });
                }
                break;
            case 2:
                const {
                    city,
                    addressResidence,
                    typeHouse,
                    stratum,
                    telephone,
                    movil,
                    planMovil,
                    email,
                    typeTransport,
                    communication,
                    doing,
                    long_working,
                    company_is,
                    name_business,
                    area_business,
                    income_month,
                    contract,
                    bank
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
                } else if (doing === "" || doing === undefined) {
                    swal({
                        title: "Error!",
                        text: "Ingresa que haces",
                        icon: "error",
                        button: "Ok!",
                    });
                } else if (long_working === "" || long_working === undefined) {
                    swal({
                        title: "Error!",
                        text: "Cuantos años de experiencia llevas.",
                        icon: "error",
                        button: "Ok!",
                    });
                } else if (company_is === "" || company_is === undefined) {
                    swal({
                        title: "Error!",
                        text: "Seleccione el tipo de empresa.",
                        icon: "error",
                        button: "Ok!",
                    });
                } else if (name_business === "" || name_business === undefined) {
                    swal({
                        title: "Error!",
                        text: "Ingresa el nombre de la empresa.",
                        icon: "error",
                        button: "Ok!",
                    });
                } else if (area_business === "" || area_business === undefined) {
                    swal({
                        title: "Error!",
                        text: "Ingresa el area en que trabajas",
                        icon: "error",
                        button: "Ok!",
                    });
                } else if (income_month === "" || income_month === undefined) {
                    swal({
                        title: "Error!",
                        text: "Ingresa los ingresos mensuales",
                        icon: "error",
                        button: "Ok!",
                    });
                } else if (contract === "" || contract === undefined) {
                    swal({
                        title: "Error!",
                        text: "Ingresa el tipo de contrato que tienes",
                        icon: "error",
                        button: "Ok!",
                    });
                } else if (bank === "" || bank === undefined) {
                    swal({
                        title: "Error!",
                        text: "Ingresa en donde tienes la cuenta",
                        icon: "error",
                        button: "Ok!",
                    });
                } else {
                    this.setState({
                        formPart: 3,
                    });
                }


                break;
            default:
                const data1 = this.state.formdata;
                const data2 = this.state.formdata2;
                const data3 = this.state.formdata3;

                //Props Redux Store
                let tax = this.props.data.tax;
                let month = this.props.data.month;
                let service = this.props.data.service;
                let pressing = this.props.data.value_pressing;
                let result = this.formatPressing(this.props.data.result);

                const params = {
                    ...data1,
                    ...data2,
                    ...data3,
                    service,
                    pressing,
                    tax,
                    result,
                    month,
                };

                if (data3.check === false || data3.check === undefined) {
                    swal({
                        title: "Error!",
                        text: "Acepte los términos y condiciones de tu crédito",
                        icon: "error",
                        button: "Ok!",
                    });

                    return;
                }


            axios
                .post(urlSend, params)
                .then(() => {
                    swal({
                        title: "Se ha enviado correctamente!",
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
                                                                clickNext={e => this.clickNextform(1)}
                                                                dataForm={this.dataForm}
                                                                outputForm={this.state.formdata}
                                                            />
                                                        );
                                                    } else if (this.state.formPart === 2) {
                                                        return (
                                                            <Part2
                                                                clickNext={e => this.clickNextform(2)}
                                                                clickPrev={e => this.clickPrevform(1)}
                                                                dataForm={this.dataForm2}
                                                                outputForm={this.state.formdata2}
                                                            />
                                                        );
                                                    } else {
                                                        return (<Part3
                                                            clickPrev={e => this.clickPrevform(2)}
                                                            submitForm={e => this.clickNextform(3)}
                                                            dataForm={this.dataForm3}
                                                            outputForm={this.state.formdata3}
                                                        />);
                                                    }
                                                })()}
                                            </Form>
                                        </Container>
                                    </Col>
                                    <Col
                                        sm="12"
                                        md="5"
                                        lg="5"
                                        className="p-2 content-table-result"
                                    >

                                        <TableQuote2
                                            result={this.formatPressing(this.props.data.result)}
                                            month={this.props.data.month}
                                            date={this.props.data.date}
                                            tax={this.props.data.tax}
                                            sure={this.props.data.sure}
                                            iva={this.formatPressing(this.props.data.iva)}
                                            technology={this.formatPressing(this.props.data.technology)}
                                            calinterest={this.formatPressing(this.props.data.cal_interest)}
                                            calmountroute={this.formatPressing(this.props.data.cal_mount_route)}
                                            caltechnology={this.formatPressing(this.props.data.technology)}
                                            calsure={this.formatPressing(this.props.data.cal_sure)}
                                            caliva={this.formatPressing(this.props.data.cal_iva)}
                                            pressing={this.props.data.value_pressing}
                                            service={this.props.data.service}
                                        />

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
