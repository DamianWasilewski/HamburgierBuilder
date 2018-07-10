import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgierIngredients.css';

class BurgierIngredient extends Component {
	render () {
	let ingredient = null;

		switch (this.props.type) {
			case ('roll-bottom'):
				ingredient = <div className={classes.RollBottom}></div>;
				break;
			case ('roll-top'):
				ingredient = (
					<div className={classes.RollTop}>
						<div className={classes.Seeds1}></div>
						<div className={classes.Seeds2}></div>
					</div>
				);
				break;
			case ('meat'):
				ingredient = <div className={classes.Meat}></div>;
				break;
			case ('cheese'):
				ingredient = <div className={classes.Cheese}></div>;
				break;
			case ('bacon'):
				ingredient = <div className={classes.Bacon}></div>;
				break;
			case ('salad'):
				ingredient = <div className={classes.Salad}></div>;
				break;
			default:
				ingredient = null;
			}

		return ingredient;
	}
}

BurgierIngredient.propTypes = {
	type: PropTypes.string.isRequired
};

export default BurgierIngredient;