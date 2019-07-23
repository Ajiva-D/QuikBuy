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
import Fade from 'react-reveal/Fade';

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
		let item = [{
			img:sneakers,
			title:"Nike Sneakers",
			amount:3000
		},
		{
			img:purpleshoes,
			title:"Purple Sneakers",
			amount:1000
		},
		{
			img:bluebag,
			title:"Avion Bag",
			amount:150
		},
		{
			img:blueshoe,
			title:"Female Shoes",
			amount:2300
		},
		{
			img:girljean,
			title:"Female Jeans",
			amount:4300
		},
		{
			img:fullamazon,
			title:"Amazon Home",
			amount:6500
		},
		{
			img:darksneakers,
			title:"Nike AirMax",
			amount:1000
		},
		{
			img:shinyheels,
			title:"Glitter Heels",
			amount:800
		},
		{
			img:boyjean,
			title:"Jean Jacket",
			amount:300
		},
		{
			img:smallamazon,
			title:"Amazon Speaker",
			amount:1200
		}]
		return (
			<div >
				<h1 style={{textAlign:"center"}}>Popular Items</h1>
				<Fade bottom>
				<div style={style}>
				{	item.map((e)=><Card img={e.img} title={e.title} amount={e.amount} key={e.title}/>)}
				</div>
				</Fade>
			</div>
		);
	}
}
export default PopularItems;
