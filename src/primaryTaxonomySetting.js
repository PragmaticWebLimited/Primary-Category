// External dependencies.
import PropTypes from 'prop-types';
import { Component, Fragment } from '@wordpress/element';

// Internal dependencies.
import PrimaryTaxonomyPicker from './PrimaryTaxonomyPicker';

class PrimaryTaxonomySetting extends Component {
	/**
	 * Determines whether the taxonomy has primary term support.
	 *
	 * @returns {boolean} Whether or not the taxonomy has primary term support.
	 */
	taxonomyHasPrimaryTermSupport() {
		// TODO: support opt-in to primary term support.
		return true;
	}

	/**
	 * Renders the PrimaryTaxonomySetting component.
	 *
	 * @returns {wp.Element} The rendered PrimaryTaxonomySetting.
	 */
	render() {
		const { OriginalComponent } = this.props;

		if ( ! this.taxonomyHasPrimaryTermSupport() ) {
			return <OriginalComponent { ...this.props } />;
		}

		// TODO: fetch these via REST API.
		const taxonomyData = {
			fieldId: 'acf-field_primary_category', // TODO: currently implemented with ACF. We should fetch/store from REST API.
			name: 'category',
			restBase: 'categories',
			singularLabel: 'Video Category',
		};

		return (
			<Fragment>
				<OriginalComponent { ...this.props } />
				<PrimaryTaxonomyPicker taxonomy={ taxonomyData } />
			</Fragment>
		);
	}
}

PrimaryTaxonomySetting.propTypes = {
	OriginalComponent: PropTypes.func.isRequired,
	slug: PropTypes.string.isRequired,
};

export default PrimaryTaxonomySetting;
