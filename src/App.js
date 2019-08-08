import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import moduleName from "./components/DisplayItem";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import DisplayItem from "./components/DisplayItem";
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

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			item : ""
		}
		this.handleKeyChange = this.handleKeyChange.bind(this)
	}
	handleKeyChange(value){
		this.setState({item:value});
	}
	render() {
		let item = [
			{
				img: sneakers,
				title: "Nike Sneakers",
				amount: 3000
			},
			{
				img: purpleshoes,
				title: "Purple Sneakers",
				amount: 1000
			},
			{
				img: bluebag,
				title: "Avion Bag",
				amount: 150
			},
			{
				img: blueshoe,
				title: "Female Shoes",
				amount: 2300
			},
			{
				img: girljean,
				title: "Female Jeans",
				amount: 4300
			},
			{
				img: fullamazon,
				title: "Amazon Home",
				amount: 6500
			},
			{
				img: darksneakers,
				title: "Nike AirMax",
				amount: 1000
			},
			{
				img: shinyheels,
				title: "Glitter Heels",
				amount: 800
			},
			{
				img: boyjean,
				title: "Jean Jacket",
				amount: 300
			},
			{
				img: smallamazon,
				title: "Amazon Speaker",
				amount: 1200
			}
		];
		return (
			<div className="App">
				<Header />
				<Router>
					<Route
						exact
						path="/"
						render={routeProps => <Home {...routeProps} item={item} onKeyChange={this.handleKeyChange}/>}
					/>
					<Route
						exact
						path="/:title"
						render={routeProps => <DisplayItem {...routeProps} item={this.state.item} />}
					/>
				</Router>
			</div>
		);
	}
}

export default App;
