import {connect} from 'react-redux';
import {StartQuoteForm} from '../components/StartQuoteForm';
import {InfoPacteform}  from '../components/InfoQuoteForm';

const mapStateToProps = state =>{
    return{ data: state.data}
}

const mapDispacthToProps  =  dispatch =>{
    return{
        calculate:(param) => dispatch({type: 'CALCULATE', param})
    }
}

const createConnection = connect(
    mapStateToProps,
    mapDispacthToProps
)

export const ComponentStartQuoteForm = createConnection(StartQuoteForm);
export const ComponentInfoQuoteForm = createConnection(InfoPacteform);

