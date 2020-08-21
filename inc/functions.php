<?php
/**
 * Primary Category plugin loader.
 */

declare( strict_types = 1 );

namespace Pragmatic\Primary_Category;

/**
 * Set up plugin.
 *
 * Register actions and filters.
 */
function bootstrap() : void {

	add_action( 'init', __NAMESPACE__ . '\register_assets' );
}

/**
 * Registers all JS/CSS assets.
 */
function register_assets() : void {

	$dir = dirname( __DIR__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		return;
	}

	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );

	\wp_register_script(
		'pragmatic-primary-category-block-editor',
		\plugins_url( $index_js, __DIR__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$editor_css = 'build/index.css';
	\wp_register_style(
		'pragmatic-primary-category-block-editor',
		\plugins_url( $editor_css, __DIR__ ),
		[],
		\filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	\wp_register_style(
		'pragmatic-primary-category-block',
		\plugins_url( $style_css, __DIR__ ),
		[],
		\filemtime( "$dir/$style_css" )
	);

	\register_block_type( 'pragmatic/primary-category', [
		'editor_script' => 'pragmatic-primary-category-block-editor',
		'editor_style'  => 'pragmatic-primary-category-block-editor',
		'style'         => 'pragmatic-primary-category-block',
	] );
}
