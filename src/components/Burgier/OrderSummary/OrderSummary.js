import React from 'react';

import Aux from '../../../hoc/Auxilliary/Auxilliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients)
		.map(ingKey => {
			return (
				<li key={ingKey}>
					<span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
				</li> );
		});
	return (
		<Aux>
			<h3>Your burger contains:</h3>
			<ul>
				{ingredientSummary}
			</ul>
			<p><strong>Total price: {props.price.toFixed(2) + '$'}</strong></p>
			<p>Continue to checkout</p>
			<Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
			<Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
		</Aux>
	);
};

export default orderSummary;