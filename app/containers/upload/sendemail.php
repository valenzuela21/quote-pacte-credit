<?php
include(dirname(__FILE__) . "/load.php");

$data = json_decode(file_get_contents("php://input"), true);
define("HTML_EMAIL_HEADERS", array('Content-Type: text/html; charset=UTF-8'));


function wpb_sender_name($original_email_from)
{
    return get_bloginfo('name');
}

add_filter('wp_mail_from_name', "wpb_sender_name");


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

$email = $object_result['email-pacte'];
$subject = $object_result['subject-pacte'];
$heading = $object_result['subject-pacte'];

switch ($data['question_mount']) {

    case '1':
        $question_mount = "Inversión";
        break;
    case '2':
        $question_mount = "Gastos Personales y familiares";
        break;
    case '3':
        $question_mount = "Vacaciones";
        break;
    case '4':
        $question_mount = "Educación";
        break;
    case '5':
        $question_mount = "Un Negocio";
        break;
    default:
        $question_mount = "En osio";

}


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
    case '5':
        $stateCivil = "Soltero";
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
        $stateLive = "No tengo hijos";
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

switch ($data['doing']) {
    case '1':
        $doing = "Soy Estudiante";
        break;
    case '2':
        $doing = "Soy Empleado";
        break;
    case '3':
        $doing = "Soy Independiente";
        break;
    case '4':
        $doing = "Ya me pensione";
        break;
    case '5':
        $doing = "Formador(a) - Coach";
        break;
    default:
        $doing = " ";
}

if ($data['doing'] === '3') {

    switch ($data['doing_working']) {
        case '1':
            $doing_working = "Abogado";
            break;
        case '2':
            $doing_working = "Administrador";
            break;
        case '3':
            $doing_working = "Asesor de servicio al cliente / Telemercadeo";
            break;
        case '4':
            $doing_working = "Agricultor / Actividades agrícolas";
            break;
        case '5':
            $doing_working = "Almacenista";
            break;
        case '6':
            $doing_working = "Analista";
            break;
        case '7':
            $doing_working = "Asesor(a)";
            break;
        case '8':
            $doing_working = "Asistente";
            break;
        case '9':
            $doing_working = "Auxiliar";
            break;
        case '10':
            $doing_working = "Auxiliar de vuelo-servicios aeronáuticos";
            break;
        case '11':
            $doing_working = "Cajero";
            break;
        case '12':
            $doing_working = "Conductor de transporte terrestre";
            break;
        case '13':
            $doing_working = "Constructor y servicios de obra";
            break;
        case '14':
            $doing_working = "Consultor(a)";
            break;
        case '15':
            $doing_working = "Contador(a) ";
            break;
        case '16':
            $doing_working = "Docente, profesor";
            break;
        case '17':
            $doing_working = "Enfermero(a)";
            break;
        case '18':
            $doing_working = "Generador de contenido-marketing-publicidad";
            break;
        case '19':
            $doing_working = "Jefe de Seguridad-vigilante ";
            break;
        case '20':
            $doing_working = "Logística - Distribución";
            break;
        case '21':
            $doing_working = "Mensajero(a)";
            break;
        case '22':
            $doing_working = "Operario(a)";
            break;
        case '23':
            $doing_working = "Policía-soldado";
            break;
        case '24':
            $doing_working = "Recepcionista o Profesional secretariado";
            break;
        case '25':
            $doing_working = "Servicios Generales-mantenimiento-aseo";
            break;
        case '26':
            $doing_working = "Técnico de mantenimiento-instalación y reparaciones";
            break;
        case '27':
            $doing_working = "Vendedor(a)";
            break;
        default:
            $doing_working = " ";
    }

} else {
    switch ($data['doing_working']) {
        case '1':
            $doing_working = "Operario";
            break;
        case '2':
            $doing_working = "Auxiliar-Asistente";
            break;
        case '3':
            $doing_working = "Analista";
            break;
        case '4':
            $doing_working = "Profesional Junior";
            break;
        case '5':
            $doing_working = "Profesional Senior";
            break;
        case '6':
            $doing_working = "Administrativo";
            break;
        case '7':
            $doing_working = "Coordinador-supervisor-especialista";
            break;
        case '8':
            $doing_working = "Gerente-director";
            break;
        case '9':
            $doing_working = "Presidente-vicepresidente";
            break;
        default:
            $doing_working = " ";
    }
}

switch ($data['long_working']) {
    case '1':
        $long_working = "menos de 1 año";
        break;
    case "2":
        $long_working = "1 año";
        break;
    case "3":
        $long_working = "2 años";
        break;
    case "4":
        $long_working = "3 años";
        break;
    case "5":
        $long_working = "4 años";
        break;
    case "6":
        $long_working = "5 años o más";
        break;
    default:
        $long_working = "";
}


switch ($data['company_is']) {
    case '1':
        $company_is = "Publica";
        break;
    case '2':
        $company_is = "Privada";
        break;
    case '3':
        $company_is = "Mixta";
        break;
    default:
        $company_is = "";
}


switch ($data['area_business']) {
    case '1':
        $area_business = "Agro";
        break;
    case '2':
        $area_business = "Alimentos y bebidas";
        break;
    case '3':
        $area_business = "Aviación y Turismo";
        break;
    case '4':
        $area_business = "Consultorías";
        break;
    case '5':
        $area_business = "Comercio";
        break;
    case '6':
        $area_business = "Construcción";
        break;
    case '7':
        $area_business = "Educación";
        break;
    case '8':
        $area_business = "Editorial e impresión";
        break;
    case '9':
        $area_business = "Energía (minero-hierro-acero-petróleo-otros materiales)";
        break;
    case '10':
        $area_business = "Entretenimiento";
        break;
    case '11':
        $area_business = "Empresas del estado-gubernamentales";
        break;
    case '12':
        $area_business = "Manufactura";
        break;
    case '13':
        $area_business = "Plástico - Caucho";
        break;
    case '14':
        $area_business = "Publicidad y mercadeo";
        break;
    case '15':
        $area_business = "Químicos";
        break;
    case '16':
        $area_business = "Salud";
        break;
    case '17':
        $area_business = "Servicios";
        break;
    case '18':
        $area_business = "Tecnología y Software";
        break;
    case '19':
        $area_business = "Telecomunicaciones";
        break;
    case '20':
        $area_business = "Textiles (prendas-calzado)";
        break;
    case '21':
        $area_business = "Transporte-vehículos y partes";
        break;
    case '22':
        $area_business = "Capacitación y Formación";
        break;
    default:
        $area_business = "";
}

switch ($data['income_month']) {
    case '1':
        $income_month = "$100.000 - $500.000";
        break;
    case '2':
        $income_month = "$500.000 - $800.000";
        break;
    case '3':
        $income_month = "$800.000 - $1.200.000";
        break;
    case '4':
        $income_month = "$1.200.000 - $2.000.000";
        break;
    case '5':
        $income_month = "$2.000.000 - $3.500.000";
        break;
    case '6':
        $income_month = "$3.500.000 - $5.000.000";
        break;
    case '7':
        $income_month = "$5.000.000 o mas";
        break;
    default:
        $income_month = "";
}

switch ($data['contract']) {
    case '1':
        $contract = "Fijo";
        break;
    case '2':
        $contract = "Indefinido";
        break;
    case '3':
        $contract = "Prestación de servicios";
        break;
    case '4':
        $contract = "Temporal";
        break;
    case '5':
        $contract = "Nombramiento Provisional";
        break;
    case '6':
        $contract = "Carrera Administrativa";
        break;
    case '7':
        $contract = "Libre Nombramiento y Remoción";
        break;
    default:
        $contract = "";
}


switch ($data['bank']) {
    case '1':
        $bank = "En estos momentos no tengo cuenta";
        break;
    case '2':
        $bank = "Banco Falabella";
        break;
    case '3':
        $bank = "Banco de Bogotá";
        break;
    case '4':
        $bank = "Banco Popular";
        break;
    case '5':
        $bank = "Banco Santander de Negocios Colombia S.A.";
        break;
    case '6':
        $bank = "Banco Itaú Corpbanca Colombia S.A.";
        break;
    case '7':
        $bank = "Bancolombia";
        break;
    case '8':
        $bank = "Nequi";
        break;
    case '9':
        $bank = "Bancoomeva";
        break;
    case '10':
        $bank = "Banco Citibank";
        break;
    case '11':
        $bank = "Banco GNB Sudameris";
        break;
    case '12':
        $bank = "Banco BBVA";
        break;
    case '13':
        $bank = "Red Multibanca Colpatria-Scotiabank";
        break;
    case '14':
        $bank = "Banco de Occidente";
        break;
    case '15':
        $bank = "Banco BCSC";
        break;
    case '16':
        $bank = "Banco Agrario de Colombia";
        break;
    case '17':
        $bank = "Jp Morgan";
        break;
    case '18':
        $bank = "Banco Davivienda";
        break;
    case '19':
        $bank = "Banco AV Villas";
        break;
    case '20':
        $bank = "Banco Pichincha";
        break;
    case '21':
        $bank = "Banco Mundo Mujer";
        break;
    case '22':
        $bank = "Banco Porcredit Colombia";
        break;
    case '23':
        $bank = "Otro";
        break;
    default:
        $bank = "";
}



$message = "
    <h2>Información Personal</h2>
    <p>Utilizar el monto: " . $question_mount . "</p>
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
    <p>Cuantas personas depende de ti: " . $countDepends . "</p>
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
    <p>Que haces: " . $doing . "</p>
    <p>Dato opcional: " . $doing_working. "</p>
    <p>Caunto Llevas: " . $long_working . "</p>
    <p>Tu empresa es: " . $company_is . "</p>
    <p>Nombre de la empresa: " . $income_month . "</p>
    <p>En que área esta tu empresa: " . $area_business . "</p>
    <p>Tipo de contrato: " . $contract . "</p>
    <p>Ingresos Mensuales: " . $income_month . "</p>
    <p>Banco: " . $bank . "</p>
    <p>= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =</p>
    <h3>Documentación</h3>";

if (!empty($data['url1'])) {
    $message .= "<p><a href=" . esc_url(plugins_url('./../../../assets/upload/' . $data['url1'], __FILE__)) . " target='__blank' > Descargar Extractos Bancarios </a></p>";
}
if (!empty($data['url2'])) {
    $message .= "<p><a href=" . esc_url(plugins_url('./../../../assets/upload/' . $data['url2'], __FILE__)) . " target='__blank' > Descargar Comprobante Nomina </a></p>";
}
if (!empty($data['url3'])) {
    $message .= "<p><a href=" . esc_url(plugins_url('./../../../assets/upload/' . $data['url3'], __FILE__)) . " target='__blank' > Descargar Certificación Laboral </a></p>";
}
if (!empty($data['url4'])) {
    $message .= "<p><a href=" . esc_url(plugins_url('./../../../assets/upload/' . $data['url4'], __FILE__)) . " target='__blank' > Descargar Declaración Renta </a></p>";
}

$message .= "<p>= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =</p> 
	<h3>" . $data['service'] . "</h3>
    <p>Monto Solicitado: " . $data['pressing'] . "</p>
    <p>Tasa Interes: " . $data['calinterest'] . "</p>
    <p>Tecnología: " . $data['technology'] . "</p>
    <p>Iva: " . $data['caliva'] . "</p>
    <p>Servicio Cupo Rotativo: " . $data['calmountroute'] . "</p>
    <p>Seguros: " . $data['calsure'] . "</p>
    <p>Meses: " . $data['month'] . "</p>
    <p>Pago por mes: " . $data['result'] . "</p>";

send_email_woocommerce_style($email, $subject, $heading, $message);
