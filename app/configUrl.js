const URL = window.location.hostname;
const SLL = window.location.protocol;

let urlUpload, urlSend;

if (URL === 'localhost') {
 urlUpload = `http://localhost:8888/wordpress/wp-content/plugins/quote-pacte-credit/app/containers/upload/`;
 urlSend = `http://localhost:8888/wordpress/wp-content/plugins/quote-pacte-credit/app/containers/upload/sendemail.php`;
}else{
 urlUpload = `${SLL}//${URL}/wp-content/plugins/quote-pacte-credit/app/containers/upload/`;
 urlSend = `${SLL}//${URL}/wp-content/plugins/quote-pacte-credit/app/containers/upload/sendemail.php`;
}

export {urlUpload , urlSend};