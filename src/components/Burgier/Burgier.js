import React from 'react';

import classes from './Burgier.css';
import BurgierIngredient from './BurgierIngredient/BurgierIngredients';

const burgier = (props) => {

	//Transforming object into array
	let transformedIngredients = Object.keys( props.ingredients )
	.map(ingKey => {
		return [...Array(props.ingredients[ingKey])].map((_, i) => {
			return <BurgierIngredient key={ingKey + i} type={ingKey} />;
		});
	})
	.reduce((arr, el) => {
		return arr.concat(el)
	}, []);

	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Ingreditens waiting to be added</p>
	}

	return (
		<div className={classes.Burgier}>
			<BurgierIngredient type="roll-top" />
			{transformedIngredients}
			<BurgierIngredient type="roll-bottom" />
		</div>
	);
};

export default burgier;