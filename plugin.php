<?php
/**
 * Plugin Name: Primary Category. TODO.
 * Description: TODO.
 * Author: Pragmatic
 * Author URI: https://pragmatic.agency
 */

declare( strict_types = 1 );

namespace Pragmatic\Primary_Category;

require_once __DIR__ . '/inc/functions.php';

\add_action( 'plugins_loaded', __NAMESPACE__ . '\bootstrap' );
