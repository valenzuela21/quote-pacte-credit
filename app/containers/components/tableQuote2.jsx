import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import {Container, Row, Col} from "shards-react";

import Moment from "react-moment";
import logoGeneral from "../../../assets/img/logo.png";

import {description} from "../../paramConfig";

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#070c36',
        color: '#fff',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #070c36',
    },
}))(Tooltip);

const TableQuote2 = (props) => {

    return (<div>
        <Container className="p-3">
            <Row>
                <Col xs="4" sm="3" md="5" lg="3" className="p-0">
                    <img src={logoGeneral} alt="image-logo"/>
                </Col>
                <Col xs="8" sm="9" md="7" lg="9" className="p-0">
                    <div className="contentInfoservice p-0">
                        <h2 className="titelInvertion">
                            {props.service}
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
                                        {props.pressing
                                            ? props.pressing
                                            : ""}
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td className="columnTableLeft">
                                    <p className="txt-right">Interés</p>
                                </td>
                                <td>
                                    <div className="row">
                                        <div className="col-8">
                                            {props.calinterest != null
                                                ? `${props.calinterest}`
                                                : " "}

                                        </div>
                                        <div className="col-4">
                                            <HtmlTooltip
                                                placement="right-end"
                                                title={
                                                    <React.Fragment>
                                                        {`${description["desc-1"]} por ${props.tax} % EA`}
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
                                    <p className="txt-right">Seguro</p>
                                </td>
                                <td>
                                    <div className="row">
                                        <div className="col-8">
                                            {props.calsure != null
                                                ? `${props.calsure}`
                                                : " "}
                                        </div>
                                        <div className="col-4">
                                            <HtmlTooltip
                                                placement="right-end"
                                                title={
                                                    <React.Fragment>
                                                        {description["desc-2"]}
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
                                    <p className="txt-right">Servicio Cupo Rotativo</p>
                                </td>
                                <td>
                                    <div className="row">
                                        <div className="col-8">
                                            {props.calmountroute != null
                                                ? `${props.calmountroute}`
                                                : " "}
                                        </div>
                                        <div className="col-4">
                                            <HtmlTooltip
                                                placement="right-end"
                                                title={
                                                    <React.Fragment>
                                                        {description["desc-7"]}
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
                                            {props.caltechnology != null
                                                ? props.caltechnology
                                                : " "}
                                        </div>
                                        <div className="col-4">
                                            <HtmlTooltip
                                                placement="right-end"
                                                title={
                                                    <React.Fragment>
                                                        {description["desc-3"]}
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
                                            {props.caliva != null
                                                ? props.caliva
                                                : ""}
                                        </div>
                                        <div className="col-4">
                                            <HtmlTooltip
                                                placement="right-end"
                                                title={
                                                    <React.Fragment>
                                                        {description["desc-4"]}
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
                                    <p className="txt-right">
                                        Fecha Solicitud
                                    </p>
                                </td>
                                <td>
                                    <strong>
                                        <Moment format="D MMM YYYY" withTitle>
                                            {props.date}
                                        </Moment>
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td className="columnTableLeft">
                                    <p className="txt-right">
                                        Tiempo o Plazo
                                    </p>
                                </td>
                                <td>
                                    <div className="row">
                                        <div className="col-8">
                                            {props.month != null
                                                ? `${props.month} meses`
                                                : ""}
                                        </div>
                                        <div className="col-4">
                                            <HtmlTooltip
                                                placement="right-end"
                                                title={
                                                    <React.Fragment>
                                                        {description['desc-5']}
                                                    </React.Fragment>
                                                }>
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
                                    {props.result}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>


    </div>);
}

export default TableQuote2;