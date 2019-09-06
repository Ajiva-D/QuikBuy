import React from "react";
import Ratings from "./Ratings";
import "./DisplayItem.css";

class DisplayItem extends React.Component {
	constructor(props){
		super(props)
		this.state={
			
			size : 3
		}
		this.handleRatings = this.handleRatings.bind(this)
	}
	handleRatings(){
		let rate=[]
		for(let i = 0; i<this.props.item.rating; i++){
				rate.push(<Ratings star="fas fa-star" key={i}/>)
		}
		return rate;
	}
	handlePropsAddToCart(){
		const product = {
			title : this.props.item.title,
			amount : this.props.item.amount,
			image : this.props.item.img
		}
		this.props.onAddToCart(product)
		console.log(`The product:${product.title}`)
	}
	render(){ 
	return (
		<div>
			<div className="display-item">
				<div className="items">
					<img src={this.props.item.img} alt="" />
				</div>

				<div className="item-info">
					<div>
						<h1>{this.props.item.title}</h1>
						<p>${this.props.item.amount}</p>
						<p className="p-text">
							{this.props.item.description	}
						</p>
						<div className="rating-body">
						<div className="ratings-con default-rating">
								<Ratings star="far fa-star"/>
								<Ratings star="far fa-star"/>
								<Ratings star="far fa-star"/>
								<Ratings star="far fa-star"/>
								<Ratings star="far fa-star"/>						
						</div>
						<div className="ratings-con" id="main-rating">
							{this.handleRatings()}
						</div>
						</div>
						<form>
							<input type="number" min="1" defaultValue="1"onChange={console.log("change")} />
							<button onClick={(props)=>this.handlePropsAddToCart(props)} type="button">Add to Cart</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);		
}
}
export default DisplayItem;
