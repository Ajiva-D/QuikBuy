import React from "react";
import Hero from './Hero'
import PopularItems from "./PopularItems";

class Home extends React.Component {
	constructor(props){
		super(props)
		this.handleCardChange = this.handleCardChange.bind(this)
	}
	handleCardChange(value){
		this.props.onKeyChange(value)
	}
	render(){
	return (
		<div>
			<Hero />
			<PopularItems item={this.props.item} onHomeChange={this.handleCardChange}/>
		</div>
	);
}
}

export default Home
