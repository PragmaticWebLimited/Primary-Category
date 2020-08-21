// External dependencies.
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { sprintf, __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { difference } from 'lodash-es';

// Internal dependencies.
import TaxonomyPicker from './TaxonomyPicker';

/**
 * A component for selecting a primary taxonomy term.
 */
class PrimaryTaxonomyPicker extends Component {
	constructor( props ) {
		super( props );

		this.onChange = this.onChange.bind( this );
		const { fieldId } = props.taxonomy;
		this.input = document.getElementById( fieldId );

		this.state = {
			selectedTerms: [],
			terms: [],
		};
	}

	/**
	 * Fetches the terms for the given taxonomy.
	 *
	 * @returns {void}
	 */
	componentDidMount() {
		this.fetchTerms();
	}

	/**
	 * Handle prop changes when needed.
	 *
	 * @param {Object} prevProps The previous props.
	 * @param {Object} prevState The previous state.
	 *
	 * @returns {void}
	 */
	componentDidUpdate( prevProps, prevState ) {
		// Check if a term has been added and retrieve new terms if so.
		if ( prevProps.selectedTermIds.length < this.props.selectedTermIds.length ) {
			const newId = difference( this.props.selectedTermIds, prevProps.selectedTermIds )[ 0 ];
			if ( ! this.termIsAvailable( newId ) ) {
				this.fetchTerms();
				return;
			}
		}

		// Check if the selected terms have changed.
		if ( prevProps.selectedTermIds !== this.props.selectedTermIds ) {
			this.updateSelectedTerms( this.state.terms, this.props.selectedTermIds );
		}

		// Handle terms change.
		if ( prevState.selectedTerms !== this.state.selectedTerms ) {
			this.handleSelectedTermsChange();
		}
	}

	/**
	 * Checks if the current value still has a corresponding option, and if not changes
	 * the value to the first term's id.
	 *
	 * @returns {void}
	 */
	handleSelectedTermsChange() {
		const { selectedTerms } = this.state;

		const selectedTerm = selectedTerms.find( ( term ) => {
			return term.id === this.input.value;
		} );

		if ( ! selectedTerm ) {
			/*
			 * If the selected term is no longer available, set the primary term id to
			 * the first term, and to -1 if no term is available.
			 */
			this.onChange( selectedTerms.length ? selectedTerms[ 0 ].id : -1 );
		}
	}

	/**
	 * Determines whether the term with the given id is among the retrieved terms.
	 *
	 * @param {number} termId The term's id.
	 *
	 * @returns {boolean} Whther the term is available.
	 */
	termIsAvailable( termId ) {
		return !! this.state.terms.find( ( term ) => term.id === termId );
	}

	/**
	 * Fetches the terms from the WordPress API.
	 *
	 * @returns {void}
	 */
	fetchTerms() {
		const { taxonomy } = this.props;
		if ( ! taxonomy ) {
			return;
		}

		this.fetchRequest = apiFetch( {
			path: addQueryArgs( `/wp/v2/${ taxonomy.restBase }`, {
				per_page: -1,
				orderby: 'count',
				order: 'desc',
				_fields: 'id,name',
			} ),
		} );

		this.fetchRequest.then( ( terms ) => {
			const oldState = this.state;

			this.setState(
				{
					terms,
					selectedTerms: this.getSelectedTerms( terms, this.props.selectedTermIds ),
				},
				() => {
					if ( oldState.terms.length === 0 && this.state.terms.length > 0 ) {
						const theField = document.getElementById( taxonomy.fieldId );
						theField.value = '';
					}
				}
			);
		} );
	}

	/**
	 * Determines what terms are selected.
	 *
	 * @param {Array} terms           The available terms.
	 * @param {Array} selectedTermIds The ids of the selected terms.
	 *
	 * @returns {Array} The selected terms.
	 */
	getSelectedTerms( terms, selectedTermIds ) {
		return terms.filter( ( term ) => {
			return selectedTermIds.includes( term.id );
		} );
	}

	/**
	 * Updates the state with the selected terms.
	 *
	 * @param {Array} terms           The available terms.
	 * @param {Array} selectedTermIds The ids of the selected terms.
	 *
	 * @returns {void}
	 */
	updateSelectedTerms( terms, selectedTermIds ) {
		const selectedTerms = this.getSelectedTerms( terms, selectedTermIds );

		this.setState( {
			selectedTerms,
		} );
	}

	/**
	 * Handles an onChange event.
	 *
	 * Updates the primary taxonomy in the store, as well as the replacement variable and the hidden field.
	 *
	 * @param {number} termId The term's id.
	 *
	 * @returns {void}
	 */
	onChange( termId ) {
		this.input.value = termId === -1 ? '' : termId;
	}

	/**
	 * Updates the primary taxonomy replacement variable.
	 *
	 * @param {number} termId The term's id.
	 *
	 * @returns {void}
	 */
	updateReplacementVariable( termId ) {
		/*
		 * We only use the primary category replacement variable, therefore only do this for the
		 * category taxonomy.
		 */
		if ( this.props.taxonomy.name !== 'category' ) {
			return;
		}

		const primaryTerm = this.state.selectedTerms.find( ( term ) => term.id === termId );

		this.props.updateReplacementVariable(
			`primary_${ this.props.taxonomy.name }`,
			primaryTerm ? primaryTerm.name : ''
		);
	}

	/**
	 * Renders the PrimaryTaxonomyPicker component.
	 *
	 * @returns {wp.Element} The rendered component.
	 */
	render() {
		const { taxonomy } = this.props;

		if ( this.state.selectedTerms.length < 2 ) {
			return null;
		}

		const fieldId = `pragmatic-primary-${ taxonomy.name }-picker`;

		return (
			<div className="components-base-control__field">
				<label htmlFor={ fieldId } className="components-base-control__label">
					{ sprintf(
						/* translators: %s expands to the taxonomy name. */
						__( 'Select the primary %s', 'primary-taxonomy' ),
						taxonomy.singularLabel.toLowerCase()
					) }
				</label>
				<TaxonomyPicker
					value={ this.input.value }
					onChange={ this.onChange }
					id={ fieldId }
					terms={ this.state.selectedTerms }
				/>
			</div>
		);
	}
}

PrimaryTaxonomyPicker.propTypes = {
	selectedTermIds: PropTypes.arrayOf( PropTypes.number ),
	updateReplacementVariable: PropTypes.func,
	receiveEntityRecords: PropTypes.func,
	taxonomy: PropTypes.shape( {
		name: PropTypes.string,
		fieldId: PropTypes.string,
		restBase: PropTypes.string,
		singularLabel: PropTypes.string,
	} ),
};

export default compose( [
	withSelect( ( select, props ) => {
		const editorData = select( 'core/editor' );
		const { taxonomy } = props;
		const selectedTermIds = editorData.getEditedPostAttribute( taxonomy.restBase ) || [];

		return {
			selectedTermIds,
		};
	} ),
] )( PrimaryTaxonomyPicker );
