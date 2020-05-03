import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import moduleName from "./components/DisplayItem";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import DisplayItem from "./components/DisplayItem";
import Cart from "./components/cart"
import sneakers from "./images/whitesneakers.png";
import purpleshoes from "./images/purpleshoes.png";
import bluebag from "./images/bluebag.png";
import blueshoe from "./images/ecom/andrew-tanglao-tjvURCarBf0-unsplash-removebg-preview.png";
import girljean from "./images/ecom/azamat-zhanisov-vVyhotPWDdE-unsplash-removebg-preview.png";
import fullamazon from "./images/ecom/grant-ritchie-n_wXNttWVGs-unsplash-removebg-preview.png";
import darksneakers from "./images/ecom/josh-marshall-tOYvXQiPCRs-unsplash-removebg-preview.png";
import shinyheels from "./images/ecom/marcus-lewis-87DgFV9SOc4-unsplash-removebg-preview.png";
import boyjean from "./images/ecom/santosh-verma-i49yJtWD57w-unsplash-removebg-preview.png";
import smallamazon from "./images/ecom/status-quack-db4jrNvZhOQ-unsplash-removebg-preview.png";
require('dotenv').config()

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			item : "",
			cart: ""
		}
		this.handleKeyChange = this.handleKeyChange.bind(this);
		this.handleAddToCart = this.handleAddToCart.bind(this);
	}
	handleKeyChange(value){
		this.setState({item:value});
		console.log(`item: ${this.state.item}`)
	}
	handleAddToCart(value){
		// console.log(value)
		//  this.setState({cart : [...this.state.cart, value]});
		this.setState({cart:value.title});
		console.log(`cart: ${this.state.cart}`);
	}
	render() {
		let item = [
			{
				img: sneakers,
				title: "Nike Sneakers",
				amount: 3000,
				rating:3, 
				description: "This sweet shoe ride is just so great ad goes with just anything. The Cream color makes it blend and its spring under heels make you feel like you're floating"
			},
			{
				img: purpleshoes,
				title: "Purple Sneakers",
				amount: 1000,
				rating:1,
				description: "Purple Sneakers that feel amazingly comfortable"
			},
			{
				img: bluebag,
				title: "Avion Bag",
				amount: 150,
				rating:4,
				description: "The Avion bag is so popular with the female celebrities is. It's a great accessory to have"
			},
			{
				img: blueshoe,
				title: "Female Shoes",
				amount: 2300,
				rating:5,
				description: "Yes, it's what is. Nothing Else to be said"
			},
			{
				img: girljean,
				title: "Female Jeans",
				amount: 4300,
				rating:5,
				description: "Female Complete up to down jean with excellent design. Every Girl would love this"
			},
			{
				img: fullamazon,
				title: "Amazon Home",
				amount: 6500,
				rating:5,
				description: "The Ultimate Virtual Assistant. She has everything covered, if you need your life sorted then it's a must have for you. DOn't book that flight late again!"
			},
			{
				img: darksneakers,
				title: "Nike AirMax",
				amount: 1000,
				rating:4,
				description: "The Air MAx has never looked better, A sleek design that allows comfort and swag at once"
			},
			{
				img: shinyheels,
				title: "Glitter Heels",
				amount: 800,
				rating:2,
				description: "Female Glittery heels that spark of glory and essence. Walk with optimal confidence."
			},
			{
				img: boyjean,
				title: "Jean Jacket",
				amount: 300,
				rating:3,
				description: "Male Blue Denim jacket. Absolutely fantastic for this winter weather."
			},
			{
				img: smallamazon,
				title: "Amazon Speaker",
				amount: 1200,
				rating:5,
				description: "Amazon Speaker that gives you that sound you are looking for. Increadibly loud and huge bass performance. An instant favourite"
			}
		];
		return (
			<div className="App">
				
			
				<Router>
				<Header />
					<Route
						exact
						path="/"
						render={routeProps => <Home {...routeProps} item={item} onKeyChange={this.handleKeyChange}/>}
					/>
					
					<Route
						path="/item/:title"
						render={routeProps => <DisplayItem {...routeProps} item={this.state.item} onAddToCart={this.handleAddToCart}/>}
					/>
						<Route
						path="/cart"
						render={routeProps => <Cart {...routeProps} cart={this.state.cart}/>}
					/>

				</Router>
			
			</div>
		);
	}
}

export default App;
