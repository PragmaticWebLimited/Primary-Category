<?php
/**
 * Plugin Name: Primary Category.
 * Description: Set a primary category for a post.
 * Author: Pragmatic
 * Author URI: https://pragmatic.agency
 * Version: 0.2.2
 *
 * @copyright Copyright 2020-present, Pragmatic Agency Limited (https://pragmatic.agency)
 * @license   http://www.gnu.org/licenses/gpl-3.0.html GNU General Public License, version 3 only.
 */

declare( strict_types = 1 );

namespace Pragmatic\Primary_Category;

require_once __DIR__ . '/inc/functions.php';

\add_action( 'plugins_loaded', __NAMESPACE__ . '\bootstrap' );
