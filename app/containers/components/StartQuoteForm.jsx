import React from "react";
import {
  Form,
  FormInput,
  FormGroup,
  Slider,
  Container,
  Row,
  Col,
  Button,
} from "shards-react";
import {service1, service2, service3, month, defaultPresing} from "../../paramConfig";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import swal from 'sweetalert';
import TableQuote  from "./tableQuote";

export class StartQuoteForm extends React.Component {

  formatPressing = (number) =>
    this.formatCurrency("es-CO", "COP", null, number);

    pressing = "";

  constructor(props) {
    super(props);
    this.handleSlide = this.handleSlide.bind(this);
    this.handleSlideMoth = this.handleSlideMoth.bind(this);
    this.state = {
      title_service: null, 
      desc_service: null,
      value_min: this.pressing,
      value_max: 2000000,
      value_moth_max: month.max,
      value_pressing: this.pressing,
      txtFormat: this.formatPressing(this.pressing),
      value_moth: 1,
      results: null,
      option: null,
      tax: null,
      view: false,
    };
  }

  //Start Component
  componentDidMount() {
    this.tabOptions([1, service1.title, service1.tax, defaultPresing, service1.max, service1.min, service1.desc ]);
    this.setState({
      value_pressing: defaultPresing,
    });
  }


  //Slider Input Pressing

  handleSlide(e) {
    const {value_moth, tax} = this.state
    let pressing = this.formatPressing(parseInt(e[0]));
    let result = this.calculateResult(value_moth, tax, parseInt(e[0]))
    this.setState({
      value_pressing: parseInt(e[0]),
      txtFormat: pressing,
      results: result
    });
  }

  //Slider Input Month

  handleSlideMoth(e) {
    const {value_pressing, tax} = this.state;

    let dataInput;
    (e[0] === null || e[0] === '')? dataInput = 1 : dataInput = e[0];
      
    let result = this.calculateResult(dataInput, tax, value_pressing);
    this.setState({
        value_moth: parseInt(dataInput),
        results: result
    });
  }

  //Text Input Pressing

  handleTxtSlide = (event) => {
    event.preventDefault();
    if(event.target.value === undefined || event.target.value.length < 0){
      swal({
        title: "¡Alerta!",
        text: `Te excediste del minimo aceptado. \n Valor minimo aceptado: ${this.formatPressing(this.state.value_min)}`,
        icon: "warning",
        button: "Ok!",
      });

    } else if (event.target.value > Number(this.state.value_max) || event.target.value.length >= 9){
      swal({
        title: "¡Alerta!",
        text: `Te excediste del valor de este servicio de crédito.  \n Valor máximo aceptado: ${this.formatPressing(this.state.value_max)}`,
        icon: "warning",
        button: "Ok!",
      });
   
    } else {
      const {value_moth, tax} = this.state

      let pressing = this.formatCurrency(
          "es-CO",
          "COP",
          null,
          event.target.value
      );

      let result = this.calculateResult(value_moth, tax, event.target.value)

      this.setState({
        results: result,
        value_pressing: event.target.value,
        txtFormat: pressing
      });
    }
  };

  //Text Input Month

  handleNumberSlide = (event) => {
    event.preventDefault();

    const {value_pressing, tax} = this.state

    if(event.target.value > this.state.value_moth_max || event.target.value.length > 2){
      swal({
        title: "¡Alerta!",
        text: `Te excediste el plazo por mes.  \n Valor mes máximo aceptado: ${this.state.value_moth_max}`,
        icon: "warning",
        button: "Ok!",
      });
      return;
    }


    let dataInput;
    (event.target.value === null || event.target.value === '')? dataInput = 1 :dataInput = event.target.value;

    let result = this.calculateResult(event.target.value, tax, value_pressing)

    this.setState({
      results: result,
      value_moth: dataInput
    });

  };



  tabOptions = (option) => {
  
    this.setState({
      results: '',
      value_pressing: defaultPresing,
      txtFormat: this.formatPressing(option[3]),
      value_moth: 1,
      title_service: option[1],
      desc_service: option[6],
      option: option[0],
      tax: option[2],
      value_min: option[3],
      value_max: option[4],
      txt_min: option[5]  
    });
    

    let result = this.calculateResult(1, option[2], option[3]);
      this.setState({
        results: result
      })
  };

  calculateResult(month, tax, pressing){
    let n = month;
    let i = tax/100;

    let factor = Math.pow(i+1, n);
    let result = pressing*i*factor/(factor-1);

    this.props.calculate(result);

    return Math.round(result);

  }

  formatCurrency(local, currency, fractionDigits, number) {
    let formatted = new Intl.NumberFormat(local, {
      style: "currency",
      currency: currency,
      minimumFractionDigits: fractionDigits,
    }).format(number);

    return formatted;
  }

  getCalculateCredit = e =>{
    e.preventDefault();

    const { results } = this.state;

    if(results === 0 || results === undefined || results === "") {
      swal({
        title: "¡Alerta!",
        text: `El valor de resultado de crédito no puede dar 0`,
        icon: "warning",
        button: "Ok!",
      });

      return true;
    }

    //Next Vista View
    this.setState({
      view: true
    });

    setTimeout(()=>{
      const {title_service, value_min, value_max, value_pressing, txtFormat, value_moth, option, tax, view, results } = this.state;
      const addData = {
        title_service,
        value_min,
        value_max,
        value_pressing,
        txtFormat,
        value_moth,
        option,
        tax,
        view,
        result: results,
      }

      //Add Data Redux
      this.props.calculate(addData);

    }, 200)

  }
  

  render() {
    const service = {
      option1: this.state.option === 1 ? "active" : null,
      option2: this.state.option === 2 ? "active" : null,
      option3: this.state.option === 3 ? "active" : null,
    };

    return (
        <div>
          {(() => {
           if(this.state.view === false) {
             return (
                 <Container className="contentFormQuote">
                   <Row>
                     <Col sm="12" md="7" lg="7" className="p-4">
                       <Container className="p-0">
                         <Row>
                           <Col xs="4" sm="4" md="4" lg="4" className="p-1">
                             <Button
                                 onClick={(e) => this.tabOptions([1, service1.title, service1.tax, defaultPresing, service1.max, service1.min, service1.desc], e)}
                                 className={`btnTabForm ${service.option1}`}
                                 block
                             >
                               <i className="icon-micro-credit"></i>
                               {service1.title}
                             </Button>
                           </Col>
                           <Col xs="4" sm="4" md="4" lg="4" className="p-1">
                             <Button
                                 onClick={(e) => this.tabOptions([2, service2.title, service2.tax, defaultPresing, service2.max, service2.min, service2.desc], e)}
                                 className={`btnTabForm ${service.option2}`}
                                 block
                             >
                               <i className="icon-free-investment"></i>
                               {service2.title}
                             </Button>
                           </Col>
                           <Col xs="4" sm="4" md="4" lg="4" className="p-1">
                             <Button
                                 onClick={(e) =>  this.tabOptions([3, service3.title, service3.tax, defaultPresing, service3.max, service3.min, service3.desc], e)}
                                 className={`btnTabForm ${service.option3}`}
                                 block
                             >
                               <i className="icon-free-order"></i>
                               {service3.title}
                             </Button>
                           </Col>
                         </Row>
                       </Container>
                       {(() => {
                         if (this.state.option === null) {
                           return (
                               <Col className="text-center">
                                 <i className="icon-info"></i>
                                 <p className="txtoption">Ingresa la opción de crédito de interés.</p>
                               </Col>
                           )

                         } else {
                           return (
                               <Form className="formQuote">
                                 <FormGroup>
                                   <Container>
                                     <Row>
                                       <Col xs="6" sm="6" md="6" lg="6" className="p-0">
                                         <label htmlFor="#monto" className="labelFormQuote">
                                           Monto Solicitado
                                         </label>
                                       </Col>
                                       <Col xs="6" sm="6" md="6" lg="6" className="p-1 text-right">
                                         <p className="labelRigtResult">
                                           {this.state.txtFormat}
                                         </p>
                                       </Col>
                                     </Row>
                                   </Container>
                                   <FormInput
                                       className="inputFormQuote"
                                       id="#monto"
                                       type="number"
                                       placeholder="Monto o  Valor"
                                       value={this.state.value_pressing}
                                       onChange={this.handleTxtSlide}
                                       min={this.state.value_min}
                                       max={this.state.value_max}
                                   />
                                   <p className="note_form"> 
                                   <strong>Nota:</strong> No se acepta (.) ni (,) en este campo. Ejemplo: 130000
                                   </p>
                                   <Container className="p-0">
                                     <Row>
                                       <Col className="columnSliderLeft">
                                         <label htmlFor="day_moth" className="labelFormQuote">
                                           {this.formatPressing(this.state.txt_min)}
                                         </label>
                                       </Col>
                                       <Col className="columnSliderCenter">
                                         <Slider
                                             onChange={this.handleSlide}
                                             connect={[true, false]}
                                             range={{min: Number(this.state.txt_min), max: (this.state.value_max != "")? parseInt(this.state.value_max) : 2000000}}
                                             start={[Number(this.state.value_pressing)]}
                                             step={10000}
                                         />
                                       </Col>
                                       <Col className="columnSliderRigth">
                                         <label htmlFor="day_moth" className="labelFormQuote">
                                           {(this.state.value_max != "")? this.formatPressing(this.state.value_max) : this.formatPressing(2000000)}
                                         </label>
                                       </Col>
                                     </Row>
                                   </Container>
                                 </FormGroup>
                                 <FormGroup>
                                   <Container>
                                     <Row>
                                       <Col xs="6" sm="6" md="6" lg="6" className="p-1">
                                         <label htmlFor="day_moth" className="labelFormQuote">
                                           Plazo por mes
                                         </label>
                                       </Col>
                                       <Col xs="6" sm="6" md="6" lg="6" className="p-1 text-right">
                                         <p className="labelRigtResult">
                                           {this.state.value_moth >= 2
                                               ? `${(this.state.value_moth != '')? parseInt(this.state.value_moth) : 12} meses`
                                               : `${(this.state.value_moth != '')? parseInt(this.state.value_moth) : 1} mes`}{" "}
                                         </p>
                                       </Col>
                                     </Row>
                                   </Container>
                                   <FormInput
                                       className="inputFormQuote"
                                       id="#day_moth"
                                       placeholder="Mes"
                                       type="number"
                                       onChange={this.handleNumberSlide}
                                       value={this.state.value_moth}
                                       min={(month.min != "")? parseInt(month.min) : 1}
                                       max={(month.max != "")? parseInt(month.max) : 12}
                                   />
                                   <Container className="p-0">
                                     <Row>
                                       <Col className="columnSliderLeft">
                                         <label htmlFor="day_moth" className="labelFormQuote">
                                         {(month.min.length > 1)? `${(month.min != '')? parseInt(month.min) : 12} meses`  : `${(month.min != '')? parseInt(month.min) : 1} mes` }
                                         </label>
                                       </Col>
                                       <Col className="columnSliderCenter">
                                         <Slider
                                             onChange={this.handleSlideMoth}
                                             connect={[true, false]}
                                             range={{min: (month.min != "")? parseInt(month.min) : 1, max: (month.max != "")? parseInt(month.max) : 6}}
                                             start={[this.state.value_moth]}
                                         />
                                       </Col>
                                       <Col className="columnSliderRigth">
                                         <label htmlFor="day_moth" className="labelFormQuote">
                                           {(month.max.length > 1)? `${(month.max != "")? parseInt(month.max) : 12 } meses`  : `${(month.max != "")? parseInt(month.max) : 1} mes` }
                                         </label>
                                       </Col>
                                     </Row>
                                   </Container>
                                 </FormGroup>
                                 <FormGroup className="p-0 pr-4 pl-4 ">
                                   <Button type="button" onClick={this.getCalculateCredit} className="btnFormQuote"
                                           block>
                                     Solicitar Crédito
                                   </Button>
                                 </FormGroup>
                               </Form>
                           )
                         }
                       })()}
                     </Col>
                     <Col sm="12" md="5" lg="5" className="p-4">
                       
                      <TableQuote 
                        service={this.state.title_service} 
                        description={this.state.desc_service}
                        pressing={this.state.value_pressing}
                        tax={this.state.tax}
                        date={()=>{
                          let d = new Date();
                              d.getTime();
                              return d;
                        }}
                        month={this.state.value_moth}
                        results={this.state.results}
                        />
                       
                     </Col>
                   </Row>
                 </Container>)
           }
           })()}
        </div>
    );
  }
}
