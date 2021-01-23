<?php

namespace Admin;

use Xbox as Xbox;

if( ! defined( 'XBOX_HIDE_DEMO' ) ){
	define( 'XBOX_HIDE_DEMO', true);
}

class AdminPacte
{
    function __construct()
    {
        add_action('xbox_init', array($this, 'add_box_pacte_admin'));
    }

    public function add_box_pacte_admin()
    {
        $options = array(
            'id' => 'my-admin-page', //It will be used as "option_name" key to save the data in the wp_options table
            'title' => __('Pacte Config', 'wp-pacte-form'),
            'menu_title' => __('Pacte Config', 'wp-pacte-form'),
            'form_options' => array(
                'id' => 'id-form-tag',
                'action' => '',
                'method' => 'post',
                'save_button_text' => __('Guardar Cambios', 'wp-pacte-form'),
                'save_button_class' => '',
                'reset_button_text' => __('Restablecer Cambios', 'wp-pacte-form'),
                'reset_button_class' => '',
            ),
        );

        $xbox = xbox_new_admin_page($options);
        //Config send email
        $xbox->add_field(array(
            'id' => 'config-pacte-send',
            'name' => __('Email Config', 'wp-pacte-form'),
            'type' => 'title',
            'desc' => 'Configuración de envio.',
        ));

        $xbox->add_field(array(
            'id' => 'subject-pacte',
            'name' => __('Asunto Correo', 'wp-pacte-form'),
            'type' => 'text',
            'default' => '',
        ));

        $xbox->add_field(array(
            'id' => 'email-pacte',
            'name' => __('Correo electrónico', 'wp-pacte-form'),
            'type' => 'text',
            'default' => '',
        ));

        //Config Pressing Slider Quote

        //Config Service 1
        $xbox->open_mixed_field(array('name' => 'Servicio 1'));
        $xbox->add_field(array(
            'name' => __( 'Titulo servicio tab 1', 'wp-pacte-form' ),
            'id' => 'title-service1',
            'type' => 'text',
            'default' => '',
            'grid' => '2-of-12',
        ));

        $xbox->add_field(array(
            'id' => 'desc-1',
            'name' => __( 'Descripción servicio 1', 'wp-pacte-form' ),
            'desc' => __( 'Ingresa una breve descripción corta.', 'wp-pacte-form' ),
            'type' => 'textarea',
            'default' => '',
        ));

        $xbox->add_field(array(
            'name' => __( 'Precio Min', 'wp-pacte-form' ),
            'id' => 'precio-min-1',
            'type' => 'number',
            'default' => '',
            'grid' => '2-of-6',
            'desc' => __( 'No ingresar (.) ni (,)', 'wp-pacte-form' ),
            'options' => array(
                'unit' => '$',
                'show_unit' => true,
                'show_spinner' => true,
                'disable_spinner' => false,
            ),
        ));
        $xbox->add_field(array(
            'name' => __( 'Precio Max', 'wp-pacte-form' ),
            'id' => 'precio-max-1',
            'type' => 'number',
            'default' => '',
            'grid' => '2-of-6',
            'desc' => __( 'No ingresar (.) ni (,)', 'wp-pacte-form' ),
            'options' => array(
                'unit' => '$',
                'show_unit' => true,
                'show_spinner' => true,
                'disable_spinner' => false,
            ),
        ));
        $xbox->add_field(array(
            'name' => __( 'Taza de interes', 'wp-pacte-form' ),
            'id' => 'tax-1',
            'type' => 'text',
            'default' => '',
            'grid' => '2-of-6 last',
        ));
        $xbox->close_mixed_field();
         //End Config Service 1

         //Config Service 2
        $xbox->open_mixed_field(array('name' => 'Servicio 2'));
        $xbox->add_field(array(
            'name' => __( 'Titulo servicio tab 2', 'wp-pacte-form' ),
            'id' => 'title-service2',
            'type' => 'text',
            'default' => '',
            'grid' => '2-of-12',
        ));
        $xbox->add_field(array(
            'id' => 'desc-2',
            'name' => __( 'Descripción servicio 2', 'wp-pacte-form' ),
            'desc' => __( 'Ingresa una breve descripción corta.', 'wp-pacte-form' ),
            'type' => 'textarea',
            'default' => '',
        ));
        $xbox->add_field(array(
            'name' => __( 'Precio Min', 'wp-pacte-form' ),
            'id' => 'precio-min-2',
            'type' => 'number',
            'default' => '',
            'grid' => '2-of-6',
            'desc' => __( 'No ingresar (.) ni (,)', 'wp-pacte-form' ),
            'options' => array(
                'unit' => '$',
                'show_unit' => true,
                'show_spinner' => true,
                'disable_spinner' => false,
            ),
        ));
        $xbox->add_field(array(
            'name' => __( 'Precio Max', 'wp-pacte-form' ),
            'id' => 'precio-max-2',
            'type' => 'number',
            'default' => '',
            'grid' => '2-of-6',
            'desc' => __( 'No ingresar (.) ni (,)', 'wp-pacte-form' ),
            'options' => array(
                'unit' => '$',
                'show_unit' => true,
                'show_spinner' => true,
                'disable_spinner' => false,
            ),
        ));
        $xbox->add_field(array(
            'name' => __( 'Taza de interes', 'wp-pacte-form' ),
            'id' => 'tax-2',
            'type' => 'text',
            'default' => '',
            'grid' => '2-of-6 last',
          
        ));
        $xbox->close_mixed_field();
         //End Config Service 2

         //Config Service 3
        $xbox->open_mixed_field(array('name' => 'Servicio 3'));
        $xbox->add_field(array(
            'name' => __( 'Titulo servicio tab 3', 'wp-pacte-form' ),
            'id' => 'title-service3',
            'type' => 'text',
            'default' => '',
            'grid' => '2-of-12',
        ));
        $xbox->add_field(array(
            'id' => 'desc-3',
            'name' => __( 'Descripción servicio 3', 'wp-pacte-form' ),
            'desc' => __( 'Ingresa una breve descripción corta.', 'wp-pacte-form' ),
            'type' => 'textarea',
            'default' => '',
        ));
        $xbox->add_field(array(
            'name' => __( 'Precio Min', 'wp-pacte-form' ),
            'id' => 'precio-min-3',
            'type' => 'number',
            'default' => '',
            'grid' => '2-of-6',
            'desc' => __( 'No ingresar (.) ni (,)', 'wp-pacte-form' ),
            'options' => array(
                'unit' => '$',
                'show_unit' => true,
                'show_spinner' => true,
                'disable_spinner' => false,
            ),
        ));
        $xbox->add_field(array(
            'name' => __( 'Precio Max', 'wp-pacte-form' ),
            'id' => 'precio-max-3',
            'type' => 'number',
            'default' => '',
            'grid' => '2-of-6',
            'desc' => __( 'No ingresar (.) ni (,)', 'wp-pacte-form' ),
            'options' => array(
                'unit' => '$',
                'show_unit' => true,
                'show_spinner' => true,
                'disable_spinner' => false,
            ),
        ));
        $xbox->add_field(array(
            'name' => __( 'Taza de interes', 'wp-pacte-form' ),
            'id' => 'tax-3',
            'type' => 'text',
            'default' => '',
            'grid' => '2-of-6 last',
           
        ));
        $xbox->close_mixed_field();
         //End Config Service 3
          //Config Month
        $xbox->open_mixed_field(array('name' => 'Servicio 3'));
  
        $xbox->add_field(array(
            'name' => __( 'Mes min', 'wp-pacte-form' ),
            'id' => 'month-min',
            'type' => 'number',
            'default' => '',
            'grid' => '2-of-6',
            'desc' => __( 'No ingresar (.) ni (,)', 'wp-pacte-form' ),
            'options' => array(
                'unit' => 'Month',
                'show_unit' => true,
                'show_spinner' => true,
                'disable_spinner' => false,
            ),
        ));
        $xbox->add_field(array(
            'name' => __( 'Mes max', 'wp-pacte-form' ),
            'id' => 'month-max',
            'type' => 'number',
            'default' => '',
            'grid' => '2-of-6',
            'desc' => __( 'No ingresar (.) ni (,)', 'wp-pacte-form' ),
            'options' => array(
                'unit' => 'Month',
                'show_unit' => true,
                'show_spinner' => true,
                'disable_spinner' => false,
            ),
        ));
        $xbox->close_mixed_field();
         //End Config Month

        $xbox->add_field(array(
            'name' => __( 'Precio por defecto slider', 'wp-pacte-form' ),
            'id' => 'txt-slider',
            'type' => 'number',
            'default' => 1000000,
            'grid' => '2-of-8',
            'options' => array(
                'unit' => '$',
                'show_unit' => true,
                'show_spinner' => true,
                'disable_spinner' => false,
            ),
            'desc' => __( 'No ingresar (.) ni (,); Valor aceptado minimo 1000000 y máximo 9000000', 'wp-pacte-form' ),
            'attributes' => array(
                'min' => 1000000,//Default: 'null'
                'max' => 9000000,//Default: 'null'
                'step' => 1,
                'precision' => 0,
            )
        ));
      
    }

}
new AdminPacte;

