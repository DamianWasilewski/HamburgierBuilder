import React, { Component } from 'react';

import Aux from '../../hoc/Auxilliary/Auxilliary';
import Burgier from '../../components/Burgier/Burgier';
import BuildControls from '../../components/Burgier/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burgier/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
}

class BurgerBuilder extends Component {

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 4,
		purchasable: false,
		purchasing: false
	}

	updatePurchaseState (ingredients) {
		const sum = Object.keys(ingredients)
			.map(ingKey => {
				return ingredients[ingKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);
		this.setState({purchasable: sum > 0});
	}

	addIngredientHandler = (type) => {
		const oldQuantity = this.state.ingredients[type];
		const updatedQuantity = oldQuantity + 1;
		const updatedIngredients = {
			...this.state.ingredients
		};

		updatedIngredients[type] = updatedQuantity;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;

		this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
		this.updatePurchaseState(updatedIngredients);
	}

	removeIngredientHandler = (type) => {
		const oldQuantity = this.state.ingredients[type];
		if (oldQuantity <= 0) {
			return;
		}
		const updatedQuantity = oldQuantity - 1;
		const updatedIngredients = {
			...this.state.ingredients
		};

		updatedIngredients[type] = updatedQuantity;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;

		this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
		this.updatePurchaseState(updatedIngredients);
	}

	purchaseHandler = () => {
		this.setState({purchasing: true});
	}

	purchaseCancelHandler = () => {
		this.setState({purchasing: false});
	}

	purchaseContinueHandler = () => {
		alert('Next step is being built...');
	}

	render () {
		const disabledButton = {
			...this.state.ingredients
		};

		for (let key in disabledButton) {
			disabledButton[key] = disabledButton[key] <= 0
		}
		return (
			<Aux>
				<Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
					<OrderSummary 
						ingredients={this.state.ingredients}
						price={this.state.totalPrice}
						purchaseCancelled={this.purchaseCancelHandler}
						purchaseContinued={this.purchaseContinueHandler} />
				</Modal>
				<Burgier ingredients={this.state.ingredients} />
				<BuildControls
				ingredientAdded = {this.addIngredientHandler}
				ingredientRemoved = {this.removeIngredientHandler}
				disabled = {disabledButton}
				price = {this.state.totalPrice}
				purchasable= {this.state.purchasable}
				ordered={this.purchaseHandler} />
			</Aux>
		);
	}
}

export default BurgerBuilder;
