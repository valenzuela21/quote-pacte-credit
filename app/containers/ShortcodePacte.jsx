import React, { Component } from "react";

//Import Components
import {ComponentStartQuoteForm, ComponentInfoQuoteForm}  from './reducers/methods';

import {actionApp} from './reducers/action';
import {createStore} from 'redux';

import {Provider} from 'react-redux';

class ShortcodePacte extends Component {
  render(){

    const store = createStore(actionApp, 
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

      return (
        <div className="container-form-quote">
          <Provider store={store}>
            <ComponentStartQuoteForm />
            <ComponentInfoQuoteForm />
          </Provider>
        </div>
      );
    }
}

export default ShortcodePacte;
