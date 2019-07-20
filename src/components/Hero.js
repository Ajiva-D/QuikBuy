import React from 'react'
import './Hero.css'
import herobg from './../images/ladybg.jpg'
import vans from './../images/vans.jpg'
import jean from './../images/jeanjacket.jpg'
import redbag from './../images/redbag.jpg'
import sneakers from './../images/hotsneakers.jpg'

const Hero = () =>{
	return(
		<div className="hero">
			<div className="empty">
			<h1>SHOP SAVE</h1>	
			<h1 id="h1-2">CHECKOUT</h1>
			<div class="grid-con">
					<img className="img1" src={vans} alt="vans"/>
					<img className="img2" src={jean} alt="jeanjacket"/>
					<img className="img3" src={redbag} alt="red bag"/>
					<img className="img4" src={sneakers} alt="sneakers"/>
			</div>
			</div>
			<div className="hero-bg">
				<img src={herobg} alt="Img"/>
			</div>
		</div>
	);
}
export default Hero
	

