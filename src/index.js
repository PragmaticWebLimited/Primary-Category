// External dependencies.
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';

// Internal dependencies.
import PrimaryTaxonomySetting from './primaryTaxonomySetting';

/**
 * Registers the plugin into the gutenberg editor, creates a sidebar entry for the plugin,
 * and creates that sidebar's content.
 *
 * @param {object} store The editor store.
 *
 * @returns {void}
 */

addFilter( 'editor.PostTaxonomyType', 'pragmatic-primary-category', ( OriginalComponent ) => {
	return class Filter extends Component {
		/**
		 * Renders the primary taxonomy setting component.
		 *
		 * @returns {wp.Element} The component.
		 */
		render() {
			return <PrimaryTaxonomySetting OriginalComponent={ OriginalComponent } { ...this.props } />;
		}
	};
} );
