<?php
/**
 * Quota Form Pacte
 *
 *
 * @package   Quota Form Pacte
 * @author    David Fernando Valenzuela Pardo
 * @license   GPL-3.0
 * @link      https://creatives.com.co/
 * @copyright 2020 Creatives
 *
 *
 * @wordpress-plugin
 * Plugin Name:       Quota Form Pacte
 * Plugin URI:        https://creatives.com.co/
 * Description:       This component form pacte quota, shortcode: [quote-form-pacte]
 * Version:           1.0.2
 * Author:            David Fernando Valenzuela Pardo
 * Author URI:        https://github.com/valenzuela21
 * Text Domain:       wp-pacte-form
 * License:           GPL-3.0
 * License URI:       https://creatives.com.co/
 * Domain Path:       /languages
 */


namespace Quote\WPR;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'WP_REACTIVATE_VERSION', '1.0.2' );

require_once('admin/xbox/xbox.php');
require_once plugin_dir_path(__FILE__) . './admin/admin.php';

/**
 * Autoloader
 *
 * @param string $class The fully-qualified class name.
 * @return void
 *
 *  * @since 1.0.0
 */
spl_autoload_register(function ($class) {

    // project-specific namespace prefix
    $prefix = __NAMESPACE__;

    // base directory for the namespace prefix
    $base_dir = __DIR__ . '/includes/';

    // does the class use the namespace prefix?
    $len = strlen($prefix);
    if (strncmp($prefix, $class, $len) !== 0) {
        // no, move to the next registered autoloader
        return;
    }

    // get the relative class name
    $relative_class = substr($class, $len);

    // replace the namespace prefix with the base directory, replace namespace
    // separators with directory separators in the relative class name, append
    // with .php
    $file = $base_dir . str_replace('\\', '/', $relative_class) . '.php';

    // if the file exists, require it
    if (file_exists($file)) {
        require $file;
    }
});

/**
 * Initialize Plugin
 *
 * @since 1.0.0
 */
function init() {
	$wpr = Plugin::get_instance();
	$wpr_shortcode = ShortcodePacte::get_instance();
	$wpr_admin = Admin::get_instance();
    $wpr_rest = Endpoint\Example::get_instance();
}

add_action( 'plugins_loaded', 'Quote\\WPR\\init' );


/**
 * Register activation and deactivation hooks
 */
register_activation_hook( __FILE__, array( 'Quote\\WPR\\Plugin', 'activate' ) );
register_deactivation_hook( __FILE__, array( 'Quote\\WPR\\Plugin', 'deactivate' ) );

