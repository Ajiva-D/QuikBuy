import React from 'react'
import './cart.css'
import img from '../images/bluebag.png'

const Cart = (props) =>{
	return(
		<div className="cart">
			<div className="cart-con">
				<img src={props.cart.img} alt="" className="cart-img"/>
				<div>
					<h3>{props.cart.title}</h3>
					<p>${props.cart.amount}</p>
				</div>
			</div>
		</div>
	)
}

export default Cart