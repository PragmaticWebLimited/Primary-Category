// External dependencies.
import PropTypes from 'prop-types';

/**
 * Converts HTML entities to the actual symbols.
 *
 * Source: http://stackoverflow.com/questions/3700326/decode-amp-back-to-in-javascript
 *
 * @param {string} htmlText The HTML text.
 *
 * @returns {string} The string with converted HTML entities.
 */
const decodeHTML = ( htmlText ) => {
	var txt = document.createElement( 'textarea' );
	txt.innerHTML = htmlText;
	return txt.value;
};

/**
 * A select box for selecting a taxonomy.
 *
 * @param {Object} props The component's props.
 *
 * @returns {wp.Element} The rendered TaxonomyPicker component.
 */
const TaxonomyPicker = ( props ) => {
	const { value, id, terms, onChange } = props;

	return (
		<div>
			<select
				className="components-select-control__input"
				id={ id }
				value={ value }
				onChange={ ( e ) => {
					onChange( parseInt( e.target.value, 10 ) );
				} }
			>
				{ terms.map( ( term ) => {
					return (
						<option key={ term.id } value={ term.id }>
							{ decodeHTML( term.name ) }
						</option>
					);
				} ) }
			</select>
		</div>
	);
};

TaxonomyPicker.propTypes = {
	terms: PropTypes.arrayOf(
		PropTypes.shape( {
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		} )
	),
	onChange: PropTypes.func.isRequired,
	id: PropTypes.string,
	value: PropTypes.string,
};

export default TaxonomyPicker;
