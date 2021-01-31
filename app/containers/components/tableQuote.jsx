import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import {Container, Row, Col} from "shards-react";
import {description} from "../../paramConfig";
import logoGeneral from "../../../assets/img/logo-general.png";

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#070c36',
        color: '#fff',
        maxWidth: 290,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #070c36',
    },
}))(Tooltip);

export default class TableQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
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
                            <img src={logoGeneral} alt="image-logo"/>
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
                                            <strong style={{color: "#fa5d15", fontWeight: 600}}>
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
                                            <div className="row">
                                                <div className="col-8">
                                                    {this.props.calinterest != undefined
                                                        ? `${this.formatPressing(this.props.calinterest)}`
                                                        : ' '}
                                                </div>
                                                <div className="col-4">
                                                    <HtmlTooltip
                                                        placement="right-end"
                                                        title={
                                                            <React.Fragment>
                                                                {`${description["desc-1"]} por ${this.props.taxyear} % EA`}
                                                            </React.Fragment>
                                                        }
                                                    >
                                                        <Button className="btn-tooltip">?</Button>
                                                    </HtmlTooltip>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="columnTableLeft" >
                                            <p className="txt-right">Seguro</p>
                                        </td>
                                        <td>
                                            <div className="row">
                                                <div className="col-8">
                                                    {this.props.calsure != undefined
                                                        ? `${this.formatPressing(this.props.calsure)}`
                                                        : ''}
                                                </div>
                                                <div className="col-4">
                                                    <HtmlTooltip
                                                        placement="right-end"
                                                        title={
                                                            <React.Fragment>
                                                                {description['desc-2']}
                                                            </React.Fragment>
                                                        }
                                                    >
                                                        <Button className="btn-tooltip">?</Button>
                                                    </HtmlTooltip>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="columnTableLeft" >
                                            <p className="txt-right">Servicio Cupo Rotativo</p>
                                        </td>
                                        <td>
                                            <div className="row">
                                                <div className="col-8">
                                                    {this.props.calmountroute != undefined
                                                        ? `${this.formatPressing(this.props.calmountroute)}`
                                                        : ' '}
                                                </div>
                                                <div className="col-4">
                                                    <HtmlTooltip
                                                        placement="right-end"
                                                        title={
                                                            <React.Fragment>
                                                                {description['desc-7']}
                                                            </React.Fragment>
                                                        }
                                                    >
                                                        <Button className="btn-tooltip">?</Button>
                                                    </HtmlTooltip>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="columnTableLeft">
                                            <p className="txt-right">Tecnología</p>
                                        </td>
                                        <td>
                                            <div className="row">
                                                <div className="col-8">
                                                    {this.props.caltechnology != undefined
                                                        ? `${this.formatPressing(this.props.caltechnology)}`
                                                        : ' '}
                                                </div>
                                                <div className="col-4">
                                                    <HtmlTooltip
                                                        placement="right-end"
                                                        title={
                                                            <React.Fragment>
                                                                {description['desc-3']}
                                                            </React.Fragment>
                                                        }
                                                    >
                                                        <Button className="btn-tooltip">?</Button>
                                                    </HtmlTooltip>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="columnTableLeft">
                                            <p className="txt-right">Iva</p>
                                        </td>
                                        <td>
                                            <div className="row">
                                                <div className="col-8">
                                                    {this.props.caliva != undefined
                                                        ? `${this.formatPressing(this.props.caliva)}`
                                                        : ' '}
                                                </div>
                                                <div className="col-4">
                                                    <HtmlTooltip
                                                        placement="right-end"
                                                        title={
                                                            <React.Fragment>
                                                                {description['desc-4']}
                                                            </React.Fragment>
                                                        }
                                                    >
                                                        <Button className="btn-tooltip">?</Button>
                                                    </HtmlTooltip>
                                                </div>
                                            </div>
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
                                            <p className="txt-right">Tiempo o Plazo</p>
                                        </td>
                                        <td>
                                            <div className="row">
                                                <div className="col-8">
                                                    {(() => {
                                                            let month_view = this.props.month;
                                                            if (month_view != undefined) {
                                                                if (this.props.month > 9) {
                                                                    return (
                                                                        month_view + " meses"
                                                                    )
                                                                } else {
                                                                    return (
                                                                        month_view + " mes"
                                                                    )
                                                                }
                                                            } else {
                                                                return;
                                                            }
                                                        }
                                                    )()}
                                                </div>
                                                <div className="col-4">
                                                    <HtmlTooltip
                                                        placement="right-end"
                                                        title={
                                                            <React.Fragment>
                                                                {description['desc-5']}
                                                            </React.Fragment>
                                                        }
                                                    >
                                                        <Button className="btn-tooltip">?</Button>
                                                    </HtmlTooltip>
                                                </div>
                                            </div>

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
