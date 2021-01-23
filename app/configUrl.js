const URL = window.location.hostname;
const SLL = window.location.protocol;

let urlUpload, urlSend;

if (URL === 'localhost') {
 urlUpload = `${SLL}//${URL}/wordpress/wp-content/plugins/quote-form-pacte/app/containers/upload/`;
 urlSend = `${SLL}//${URL}/wordpress/wp-content/plugins/quote-form-pacte/app/containers/upload/sendemail.php`;
}else{
 urlUpload = `${SLL}//${URL}/wp-content/plugins/quote-form-pacte/app/containers/upload/`;
 urlSend = `${SLL}//${URL}/wp-content/plugins/quote-form-pacte/app/containers/upload/sendemail.php`;
}

export {urlUpload , urlSend};