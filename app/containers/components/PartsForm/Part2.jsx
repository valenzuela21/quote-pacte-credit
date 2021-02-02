import React, {Component} from "react";

import {
    FormGroup,
    Container,
    Row,
    Col,
    Button,
    FormSelect,
    FormInput,
} from "shards-react";

class Part2 extends Component {
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
            bank,
            doing_working
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
                        <h5 className="titleSubform">Datos Laborales</h5>
                        <Row>
                            <Col sm="6" md="6" lg="6" className="p-2">
                                <div className="labelContainer">
                                    <label htmlFor="#doing" className="labelFormQuoteInfo">
                                        Que haces? (*)
                                    </label>
                                </div>
                                <FormSelect
                                    className="inputFormQuoteInfo"
                                    onChange={this.myChangeHandler}
                                    name="doing"
                                    id="#doing"
                                    value={doing != undefined ? doing : ""}
                                >
                                    <option value="">Seleccione</option>
                                    <option value="1">Soy estudiante</option>
                                    <option value="2">Soy empleado</option>
                                    <option value="3">Soy independiente</option>
                                    <option value="4">Ya me pensione</option>
                                    <option value="5">Formador(a) - Coach</option>
                                </FormSelect>

                                {(() => {
                                    if (this.state.doing === "3") {
                                        return (
                                            <Col className="content_select" >
                                                <FormSelect
                                                    className="inputFormQuoteInfo"
                                                    onChange={this.myChangeHandler}
                                                    name="doing_working"
                                                    value={doing_working != undefined ? doing_working : ""}
                                                >
                                                    <option value="">Seleccione</option>
                                                    <option value="1">Abogado</option>
                                                    <option value="2">Administrador</option>
                                                    <option value="3">Asesor de servicio al cliente / telemercadeo
                                                    </option>
                                                    <option value="4">Agricultor / actividades agrícolas</option>
                                                    <option value="5">Almacenista</option>
                                                    <option value="6">Analista</option>
                                                    <option value="7">Asesor(a)</option>
                                                    <option value="8">Asistente</option>
                                                    <option value="9">Auxiliar</option>
                                                    <option value="10">Auxiliar de vuelo-servicios aeronáuticos</option>
                                                    <option value="11">Cajero</option>
                                                    <option value="12">Conductor de transporte terrestre</option>
                                                    <option value="13">Constructor y servicios de obra</option>
                                                    <option value="14">Consultor(a)</option>
                                                    <option value="15">Contador(a)</option>
                                                    <option value="16">Docente, profesor</option>
                                                    <option value="17">Enfermero(a)</option>
                                                    <option value="18">Generador de contenido-marketing-publicidad
                                                    </option>
                                                    <option value="19">Jefe de Seguridad-vigilante</option>
                                                    <option value="20">Logística - Distribución</option>
                                                    <option value="21">Mensajero(a)</option>
                                                    <option value="22">Operario(a)</option>
                                                    <option value="23">Policía-soldado</option>
                                                    <option value="24">Recepcionista o Profesional secretariado</option>
                                                    <option value="25">Servicios Generales-mantenimiento-aseo</option>
                                                    <option value="26">Técnico de mantenimiento-instalación y
                                                        reparaciones
                                                    </option>
                                                    <option value="27">Vendedor(a)</option>
                                                </FormSelect>
                                            </Col>);
                                    } else if (this.state.doing === "2") {
                                        return (
                                            <Col className="content_select" >
                                                <FormSelect
                                                    className="inputFormQuoteInfo"
                                                    onChange={this.myChangeHandler}
                                                    name="doing_working"
                                                    value={doing_working != undefined ? doing_working : ""}
                                                >
                                                    <option value="">Seleccione</option>
                                                    <option value="1">Operario</option>
                                                    <option value="2">Auxiliar-Asistente</option>
                                                    <option value="3">Analista</option>
                                                    <option value="4">Profesional Junior</option>
                                                    <option value="5">Profesional Senior</option>
                                                    <option value="6">Administrativo</option>
                                                    <option value="7">Coordinador supervisor especialista</option>
                                                    <option value="8">Gerente-director</option>
                                                    <option value="8">Presidente-vicepresidente</option>
                                                </FormSelect>
                                            </Col>);
                                    } else {
                                        return ("");
                                    }
                                })()}

                            </Col>

                            <Col sm="6" md="6" lg="6" className="p-2">
                                <div className="labelContainer">
                                    <label htmlFor="#long_working" className="labelFormQuoteInfo">
                                        Cuanto Llevas? (*)
                                    </label>
                                </div>
                                <FormSelect
                                    className="inputFormQuoteInfo"
                                    onChange={this.myChangeHandler}
                                    name="long_working"
                                    id="#long_working"
                                    value={long_working != undefined ? long_working : ""}
                                >
                                    <option value="">Seleccione</option>
                                    <option value="1">menos de 1 año</option>
                                    <option value="2">1 año</option>
                                    <option value="3">2 años</option>
                                    <option value="4">3 años</option>
                                    <option value="5">4 años</option>
                                    <option value="6">5 años o más</option>
                                </FormSelect>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="6" md="6" lg="6" className="p-2">
                                <div className="labelContainer">
                                    <label htmlFor="#company_is" className="labelFormQuoteInfo">
                                        Tu empresa es? (*)
                                    </label>
                                </div>
                                <FormSelect
                                    className="inputFormQuoteInfo"
                                    onChange={this.myChangeHandler}
                                    name="company_is"
                                    id="#company_is"
                                    value={company_is != undefined ? company_is : ""}
                                >
                                    <option value="">Seleccione</option>
                                    <option value="1">Publica</option>
                                    <option value="2">Privada</option>
                                    <option value="3">Mixta</option>
                                </FormSelect>
                            </Col>
                            <Col sm="6" md="6" lg="6" className="p-2">
                                <div className="labelContainer">
                                    <label htmlFor="#name_business" className="labelFormQuoteInfo">
                                        Nombre de la empresa (*)
                                    </label>
                                </div>
                                <FormInput
                                    className="inputFormQuoteInfo"
                                    onChange={this.myChangeHandler}
                                    id="#email"
                                    name="name_business"
                                    type="text"
                                    placeholder=""
                                    value={name_business != undefined ? name_business : ""}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="6" md="6" lg="6" className="p-2">
                                <div className="labelContainer">
                                    <label htmlFor="#area_business" className="labelFormQuoteInfo">
                                        En que área esta tu empresa ? (*)
                                    </label>
                                </div>
                                <FormSelect
                                    className="inputFormQuoteInfo"
                                    onChange={this.myChangeHandler}
                                    name="area_business"
                                    id="#area_business"
                                    value={area_business != undefined ? area_business : ""}
                                >
                                    <option value="">Seleccione</option>
                                    <option value="1">Agro</option>
                                    <option value="2">Alimentación</option>
                                    <option value="3">Alimentos y Bebidas</option>
                                    <option value="4">Aviación y Turismo</option>
                                    <option value="5">Consultorías</option>
                                    <option value="6">Construcción</option>
                                    <option value="7">Educación</option>
                                    <option value="8">Editorial e Impresión</option>
                                    <option value="9">Energía</option>
                                    <option value="10">Entretenimiento</option>
                                    <option value="11">Empresas del estado-gubernamental</option>
                                    <option value="12">Manufactura</option>
                                    <option value="13">Plástico - Caucho</option>
                                    <option value="14">Publicidad y mercado</option>
                                    <option value="15">Químicos</option>
                                    <option value="16">Salud</option>
                                    <option value="17">Servicios</option>
                                    <option value="18">Tecnología y Software</option>
                                    <option value="19">Telecomunicaciones</option>
                                    <option value="20">Textiles(prendas-calzado)</option>
                                    <option value="21">Transporte-vehículos y partes</option>
                                    <option value="22">Capacitación y Formación</option>
                                </FormSelect>
                            </Col>
                            <Col sm="6" md="6" lg="6" className="p-2">
                                <div className="labelContainer">
                                    <label htmlFor="#income_month" className="labelFormQuoteInfo">
                                        Ingresos Mensuales (*)
                                    </label>
                                </div>
                                <FormSelect
                                    className="inputFormQuoteInfo"
                                    onChange={this.myChangeHandler}
                                    name="income_month"
                                    id="#income_month"
                                    value={income_month != undefined ? income_month : ""}
                                >
                                    <option value="">Seleccione</option>
                                    <option value="1">$100.000 - $500.000</option>
                                    <option value="2">$500.000 - $800.000</option>
                                    <option value="3">$800.000 - $1.200.000</option>
                                    <option value="4">$1.200.000 - $2.000.000</option>
                                    <option value="5">$2.000.000 - $3.500.000</option>
                                    <option value="6">$3.500.000 - $5.000.000</option>
                                    <option value="7">$5.000.000 o mas</option>
                                </FormSelect>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="6" md="6" lg="6" className="p-2">
                                <div className="labelContainer">
                                    <label htmlFor="#contract" className="labelFormQuoteInfo">
                                        Que tipo de contrato tienes ? (*)
                                    </label>
                                </div>
                                <FormSelect
                                    className="inputFormQuoteInfo"
                                    onChange={this.myChangeHandler}
                                    name="contract"
                                    id="#contract"
                                    value={contract != undefined ? contract : ""}
                                >
                                    <option value="">Seleccione</option>
                                    <option value="1">Fijo</option>
                                    <option value="2">Indefinido</option>
                                    <option value="3">Prestación de servicios</option>
                                    <option value="4">Temporal</option>
                                    <option value="5">Nombramiento Provisional</option>
                                    <option value="6">Carrera Administrativa</option>
                                    <option value="7">Libre Nombramiento y Remoción</option>
                                </FormSelect>
                            </Col>
                            <Col sm="6" md="6" lg="6" className="p-2">
                                <div className="labelContainer">
                                    <label htmlFor="#bank" className="labelFormQuoteInfo">
                                        En donde tienes tu cuenta ? (*)
                                    </label>
                                </div>
                                <FormSelect
                                    className="inputFormQuoteInfo"
                                    onChange={this.myChangeHandler}
                                    name="bank"
                                    id="#bank"
                                    value={bank != undefined ? bank : ""}
                                >
                                    <option value="">Seleccione</option>
                                    <option value="1">En estos momentos no tengo cuenta</option>
                                    <option value="2">Banco Falabella</option>
                                    <option value="3">Banco de Bogotá</option>
                                    <option value="4">Banco Popular</option>
                                    <option value="5">Banco Santander de Negocios Colombia S.A.</option>
                                    <option value="6">Banco Itaú Corpbanca Colombia S.A.</option>
                                    <option value="7">Bancolombia</option>
                                    <option value="8">Nequi</option>
                                    <option value="9">Bancoomeva</option>
                                    <option value="10">Banco Citibank</option>
                                    <option value="11">Banco GNB Sudameris</option>
                                    <option value="12">Banco BBVA</option>
                                    <option value="13">Red Multibanca Colpatria-Scotiabank</option>
                                    <option value="14">Banco de Occidente</option>
                                    <option value="15">Banco BCSC</option>
                                    <option value="16">Banco Agrario de Colombia</option>
                                    <option value="17">Jp Morgan</option>
                                    <option value="18">Banco Davivienda</option>
                                    <option value="19">Banco AV Villas</option>
                                    <option value="20">Banco Pichincha</option>
                                    <option value="21">Banco Mundo Mujer</option>
                                    <option value="21">Banco Porcredit Colombia</option>
                                    <option value="22">Otro</option>
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

            </div>
        );
    }
}

export default Part2;
