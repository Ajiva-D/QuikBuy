import React, { Component } from "react";
import {Link} from 'react-router-dom'
import Card from "./../components/card";

import Fade from 'react-reveal/Fade';

class PopularItems extends Component {
	constructor(props){
		super(props)
		this.state={
			// img:sneakers,
			title:"Nike Sneakers",
			amount:3000
		}
		this.handleItemClick = this.handleItemClick.bind(this);
	}
		handleItemClick(value){
			this.props.onHomeChange(value)
		}
	render() {
		const style ={
			display:"flex",
			justifyContent:"center",
			flexWrap:"wrap"
		}
		
		return (
			<div >
				<h1 style={{textAlign:"center"}}>Popular Items</h1>
				<Fade bottom>
				<div style={style}>
				{	this.props.item.map((e)=><Link to={`/item/${e.title}`} key={e.title}><Card img={e.img} title={e.title} amount={e.amount} click={()=>this.handleItemClick(e)}/></Link>)}
				</div>
				</Fade>
			</div>
		);
	}
}
export default PopularItems;
