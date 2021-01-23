/* global window, document
*Librery Desing UX/IU: https://designrevision.com/docs/shards-react/component/slider/
*/
if (! window._babelPolyfill) {
  require('@babel/polyfill');
}

import React from 'react';
import ReactDOM from 'react-dom';
import ShortcodePacte from './containers/ShortcodePacte.jsx';

document.addEventListener('DOMContentLoaded', function() {
  const shortcode_containers = document.querySelectorAll('.wp-form-shortcode-pacte');

  for (let i = 0; i < shortcode_containers.length; ++i) {
    const objectId = shortcode_containers[i].getAttribute('data-object-id');

    ReactDOM.render(<ShortcodePacte wpObject={window[objectId]} />, shortcode_containers[i]);
  }
});
