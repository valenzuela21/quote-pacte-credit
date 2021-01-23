<?php

/**
 * Quota Form Pacte
 *
 *
 * @package   Quota Form Pacte
 * @author    Pangolin
 * @license   GPL-3.0
 * @link      https://gopangolin.com
 * @copyright 2017 Pangolin (Pty) Ltd
 */

namespace Quote\WPR;

use Xbox;

/**
 * @subpackage ShortcodePacte
 */
class ShortcodePacte
{

	/**
	 * Instance of this class.
	 *
	 * @since    1.0.0
	 *
	 * @var      object
	 */
	protected static $instance = null;

	/**
	 * Return an instance of this class.
	 *
	 * @since     1.0.0
	 *
	 * @return    object    A single instance of this class.
	 */
	public static function get_instance()
	{

		// If the single instance hasn't been set, set it now.
		if (null == self::$instance) {
			self::$instance = new self;
			self::$instance->do_hooks();
		}

		return self::$instance;
	}

	/**
	 * Initialize the plugin by setting localization and loading public scripts
	 * and styles.
	 *
	 * @since     1.0.0
	 */
	private function __construct()
	{
		$plugin = Plugin::get_instance();
		$this->plugin_slug = $plugin->get_plugin_slug();
		$this->version = $plugin->get_plugin_version();

		add_shortcode('quote-form-pacte', array($this, 'shortcode_pacte'));
	}


	/**
	 * Handle WP actions and filters.
	 *
	 * @since 	1.0.0
	 */
	private function do_hooks()
	{
		add_action('wp_enqueue_scripts', array($this, 'register_frontend_scripts'));
	}

	/**
	 * Register frontend-specific javascript
	 *
	 * @since     1.0.0
	 */
	public function register_frontend_scripts()
	{
		wp_register_script($this->plugin_slug . '-shortcode-script-pacte', plugins_url('assets/js/shortcodepacte.js', dirname(__FILE__)), array('jquery'), $this->version);
		wp_register_style($this->plugin_slug . '-shortcode-style-pacte', plugins_url('assets/css/shortcodepacte.css', dirname(__FILE__)), $this->version);
		wp_register_script($this->plugin_slug . 'script-general', plugins_url('app/paramConfig.js', dirname(__FILE__)), $this->version);


		$xbox = Xbox::get('my-admin-page');
		$email = $xbox->get_field_value('email-pacte');
		$subject = $xbox->get_field_value('subject-pacte');
		//Service 1
		$service_title1 =  $xbox->get_field_value('title-service1');
		$service_min_1 = $xbox->get_field_value('precio-min-1');
		$service_max_1 = $xbox->get_field_value('precio-max-1');
		$tax_1 = $xbox->get_field_value('tax-1');
		//Service 2
		$service_title2 =  $xbox->get_field_value('title-service2');
		$service_min_2 = $xbox->get_field_value('precio-min-2');
		$service_max_2 = $xbox->get_field_value('precio-max-2');
		$tax_2 = $xbox->get_field_value('tax-2');
		//Service 3
		$service_title3 =  $xbox->get_field_value('title-service3');
		$service_min_3 = $xbox->get_field_value('precio-min-3');
		$service_max_3 = $xbox->get_field_value('precio-max-3');
		$tax_3 = $xbox->get_field_value('tax-3');
		//Month service Config
		$monthMax = $xbox->get_field_value('month-max');
		$monthMin = $xbox->get_field_value('month-min');
		//Presing Slider Personalizado
		$txt_slider = $xbox->get_field_value('txt-slider');
		//Descripción Service Config
		$desc_1 = $xbox->get_field_value('desc-1');
		$desc_2 = $xbox->get_field_value('desc-2');
		$desc_3 = $xbox->get_field_value('desc-3');


		// Localize the script with new data
		$translation_array = array(
			'email' => $email,
			'subject' => $subject,
			'sliderprecing' => $txt_slider,
			'service1' => [
				'title'=> $service_title1,
				'desc'=> $desc_1,
				'min' => $service_min_1,
				'max' => $service_max_1,
				'tax' => $tax_1
			],
			'service2' => [
				'title'=> $service_title2,
				'desc'=> $desc_2,
				'min' => $service_min_2,
				'max' => $service_max_2,
				'tax' => $tax_2
			],
			'service3' => [
				'title'=> $service_title3,
				'desc'=> $desc_3,
				'min' => $service_min_3,
				'max' => $service_max_3,
				'tax' => $tax_3
			],
			'month'=>[
				'max'=> $monthMax,
				'min'=> $monthMin,
			]
		);
		wp_localize_script($this->plugin_slug . 'script-general', 'object_name', $translation_array);

		// Enqueued script with localized data.
		wp_enqueue_script($this->plugin_slug . 'script-general');
	}


	public function shortcode_pacte($atts)
	{
		wp_enqueue_script($this->plugin_slug . '-shortcode-script-pacte');
		wp_enqueue_style($this->plugin_slug . '-shortcode-style-pacte');

		$object_name = 'wpr_object_' . uniqid();

		$object = shortcode_atts(array(
			'title'       => 'Hello world',
			'api_nonce'   => wp_create_nonce('wp_rest'),
			'api_url'	  => rest_url($this->plugin_slug . '/v1/'),
		), $atts, 'wp-reactivate');

		wp_localize_script($this->plugin_slug . '-shortcode-script', $object_name, $object);

		$shortcode = '<div class="wp-form-shortcode-pacte" data-object-id="' . $object_name . '"></div>';
		return $shortcode;
	}
}
