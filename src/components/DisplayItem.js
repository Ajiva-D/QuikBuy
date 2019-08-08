import React from "react";
import "./DisplayItem.css";

const DisplayItem = props => {
	return (
		<div>
			<div className="display-item">
				<div className="items">
					<img src={props.item.img} alt="" />
				</div>

				<div className="item-info">
					<div>
						<h1>{props.item.title}</h1>
						<p>${props.item.amount}</p>
						<p className="p-text">
							This item is a limited edition item with exciting bluff. It has cuting
							edge tech installed and would be a favourite in the market.
						</p>
						<form>
							<input type="number" />
							<button>Add to Cart</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
export default DisplayItem;
