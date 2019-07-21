import React, { Component } from "react";
import Card from "./../components/card";
import sneakers from './../images/whitesneakers.png'
import purpleshoes from './../images/purpleshoes.png'
import bluebag from './../images/bluebag.png'
import blueshoe from './../images/ecom/andrew-tanglao-tjvURCarBf0-unsplash-removebg-preview.png'
import girljean from './../images/ecom/azamat-zhanisov-vVyhotPWDdE-unsplash-removebg-preview.png'
import fullamazon from './../images/ecom/grant-ritchie-n_wXNttWVGs-unsplash-removebg-preview.png'
import darksneakers from './../images/ecom/josh-marshall-tOYvXQiPCRs-unsplash-removebg-preview.png'
import shinyheels from './../images/ecom/marcus-lewis-87DgFV9SOc4-unsplash-removebg-preview.png'
import boyjean from './../images/ecom/santosh-verma-i49yJtWD57w-unsplash-removebg-preview.png'
import smallamazon from './../images/ecom/status-quack-db4jrNvZhOQ-unsplash-removebg-preview.png'


class PopularItems extends Component {
	constructor(){
		super()
		this.state={
			// img:sneakers,
			title:"Nike Sneakers",
			amount:3000
		}
	}

	render() {
		const style ={
			display:"flex",
			justifyContent:"center",
			flexWrap:"wrap"
		}
		let item = []
		return (
			<div >
				<h1 style={{textAlign:"center"}}>Popular Items</h1>
				<div style={style}>
				<Card img={sneakers} title={this.state.title} amount={this.state.amount} />
				<Card img={blueshoe} title="Army Green Heels" amount="1500" />
				<Card img={girljean} title="Jean Jacket" amount="250" />
				<Card img={fullamazon} title="Amazon Assistant" amount="2000" />
				<Card img={sneakers} title={this.state.title} amount={this.state.amount} />
				<Card img={blueshoe} title="Army Green Heels" amount="1500" />
				<Card img={girljean} title="Jean Jacket" amount="250" />
				<Card img={fullamazon} title="Amazon Assistant" amount="2000" />
				<Card img={sneakers} title={this.state.title} amount={this.state.amount} />
				<Card img={blueshoe} title="Army Green Heels" amount="1500" />
				<Card img={girljean} title="Jean Jacket" amount="250" />
				<Card img={fullamazon} title="Amazon Assistant" amount="2000" />
				</div>
				
			</div>
		);
	}
}
export default PopularItems;
