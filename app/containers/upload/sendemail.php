<?php
include(dirname(__FILE__) . "/load.php");

$data = json_decode(file_get_contents("php://input"), true);
define("HTML_EMAIL_HEADERS", array('Content-Type: text/html; charset=UTF-8'));


function wpb_sender_name($original_email_from)
{
  return get_bloginfo('name');
}

add_filter('wp_mail_from_name',  "wpb_sender_name");


// @email - Email address of the reciever
// @subject - Subject of the email
// @heading - Heading to place inside of the woocommerce template
// @message - Body content (can be HTML)
function send_email_woocommerce_style($email, $subject, $heading, $message)
{

  // Get woocommerce mailer from instance
  $mailer = WC()->mailer();

  // Wrap message using woocommerce html email template
  $wrapped_message = $mailer->wrap_message($heading, $message);

  // Create new WC_Email instance
  $wc_email = new WC_Email;

  // Style the wrapped message with woocommerce inline styles
  $html_message = $wc_email->style_inline($wrapped_message);

  // Send the email using wordpress mail function
  wp_mail($email, $subject, $html_message, HTML_EMAIL_HEADERS);
}

$object_result = get_option('my-admin-page');

$email =  $object_result['email-pacte'];
$subject = $object_result['subject-pacte'];
$heading = $object_result['subject-pacte'];

switch ($data['typeDocument']) {
  case '1':
    $type_document = "Cédula de ciudadanía";
    break;
  case '2':
    $type_document = "NIT";
    break;
  case '3':
    $type_document = "Pasaporte";
    break;
  case '4':
    $type_document = "Cédula Extrangeria";
    break;
  default:
    $type_document = "No tiene documento.";
}

switch ($data['typeGenero']) {
  case 'M':
    $typeGenero = "Masculino";
    break;
  case 'F':
    $typeGenero = "Femenino";
    break;
  default:
    $typeGenero = "";
}

switch ($data['stateCivil']) {
  case '1':
    $stateCivil = "Viudo(a)";
    break;
  case '2':
    $stateCivil = "Casado";
    break;
  case '3':
    $stateCivil = "Divorciado";
    break;
  case '4':
    $stateCivil = "Union Libre";
    break;
  default:
    $stateCivil = "Ninguna de las anteriores";
}


switch ($data['stateLive']) {
  case '1':
    $stateLive = "Solo";
    break;
  case '2':
    $stateLive = "Casa Familiar";
    break;
  case '3':
    $stateLive = "Mi familia e hijos";
    break;
  case '4':
    $stateLive = "Comparto un lugar";
    break;
  default:
    $stateLive = "Otro";
}

switch ($data['countChildren']) {
  case '6':
    $countChildren = "Ninguna de las anteriores";
    break;
  default:
    $countChildren = $data['countChildren'];
}

switch ($data['countDepends']) {
  case '6':
    $countDepends = "Ninguna de las anteriores";
    break;
  default:
    $countDepends = $data['countDepends'];
}

switch ($data['nivelStudent']) {
  case '1':
    $nivelStudent = "Primaria";
    break;
  case '2':
    $nivelStudent = "Bachillerato";
    break;
  case '3':
    $nivelStudent = "Técnico";
    break;
  default:
    $nivelStudent = "Sin nivel estudio";
}

switch ($data['typeHouse']) {
  case '1':
    $typeHouse = "Propia";
    break;
  case '2':
    $typeHouse = "Alquilada";
    break;
  case '3':
    $typeHouse = "Familiar";
    break;
  default:
    $typeHouse = "Sin vivienda";
}

switch ($data['planMovil']) {
  case '1':
    $planMovil = "Pos Pagos";
    break;
  case '2':
    $planMovil = "Prepago";
    break;
  default:
    $planMovil = "Sin plan movil";
}

switch ($data['typeTransport']) {
  case '1':
    $typeTransport = "Pos Pagos";
    break;
  case '2':
    $typeTransport = "Prepago";
    break;
  default:
    $typeTransport = "Sin plan movil";
}

switch ($data['communication']) {
  case '1':
    $communication = "Facebook";
    break;
  case '2':
    $communication = "Un amigo o conocido";
    break;
  case '3':
    $communication = "Whatsapp";
    break;
  default:
    $communication = "Google o Web";
}


$message = "
    <h2>Información Personal</h2>
    <p>Primer Nombre: " . ucfirst($data['firtsName']) . "</p>
    <p>Segundo Nombre: " . ucfirst($data['secondName']) . "</p>
    <p>Primer Apellido: " . ucfirst($data['lastName']) . "</p>
    <p>Segundo Apellido: " . ucfirst($data['lastName2']) . "</p>
    <p>Fecha Nacimiento: " . $data['birthDate'] . "</p>
    <p>Tipo Documento: " . $type_document . "</p>
    <p>Número Documento: " . $data['numberDocument'] . "</p>
    <p>Expedido en: " . $data['expedDocument'] . "</p>
    <p>Fecha Expedida: " . $data['expedDate'] . "</p>
    <p>Género: " . $typeGenero . "</p>
    <p>Estado Civil: " . $stateCivil . "</p>
    <p>Vives Con: " . $stateLive . "</p>
    <p>Cuantos hijos tienes: " . $countChildren . "</p>
    <p>Cuantas persnas depende de ti: " . $countDepends . "</p>
    <p>Cual es tu nivel estudios: " . $nivelStudent . "</p>
    <p>= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =</p>
    <p>Ciudad donde recibe: " . $data['city'] . "</p>
    <p>Dirección de residencia: " . $data['addressResidence'] . "</p>
    <p>Tipo de vivienda: " . $typeHouse . "</p>
    <p>Estrato: " . $data['stratum'] . "</p>
    <p>Telefóno: " . $data['telephone'] . "</p>
    <p>Número Célular: " . $data['movil'] . "</p>
    <p>Plan Movil: " . $planMovil . "</p>
    <p>Correo Electrónico: " . $data['email'] . "</p>
    <p>Que medio de transporte: " . $typeTransport . "</p>
    <p>Como te enteraste de nosotros: " . $communication . "</p>
    <p>= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =</p>
    <h3>Documentación</h3>
    <p><a href=" . esc_url(plugins_url('./../../../assets/upload/' . $data['url1'], __FILE__)) . " target='__blank' > Descargar Extractos Bancarios </a></p>
    <p><a href=" . esc_url(plugins_url('./../../../assets/upload/' . $data['url2'], __FILE__)) . " target='__blank' > Descargar Comprobante Nomina </a></p>
    <p><a href=" . esc_url(plugins_url('./../../../assets/upload/' . $data['url3'], __FILE__)) . " target='__blank' > Descargar Certificación Laboral </a></p>
    <p><a href=" . esc_url(plugins_url('./../../../assets/upload/' . $data['url4'], __FILE__)) . " target='__blank' > Descargar Declaración Renta </a></p>
    <p>= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =</p>
    <h3>" . $data['service'] . "</h3>
    <p>Monto Solicitado: " . $data['pressing'] . "</p>
    <p>Tasa Interes: " . $data['tax'] . "%</p>
    <p>Meses: " . $data['month'] . "</p>
    <p>Pago por mes: " . $data['result'] . "</p>


";

send_email_woocommerce_style($email, $subject, $heading, $message);
