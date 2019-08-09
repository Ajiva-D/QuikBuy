import React from "react";
import './card.css'

const Card = (props) => {
	return (
		<div className="card" onClick={props.click}>
			<div className="card-img-con">
				<img src={props.img} alt="card item" />	
			</div>
			<h5>{props.title}</h5>
			<p>${props.amount}</p>
		</div>
	);
};
export default Card;
