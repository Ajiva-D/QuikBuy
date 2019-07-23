import React from 'react'
import './Hero.css'
// import herobg from './../images/ladybg.jpg'
// import vans from './../images/vans.jpg'
// import jean from './../images/jeanjacket.jpg'
// import redbag from './../images/redbag.jpg'
// import sneakers from './../images/hotsneakers.jpg'
import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide';

const Hero = () =>{
	return(
		<div className="hero">
			<div className="empty">
				<Slide left>
				<h1>SHOP SAVE</h1>	
				<h1 id="h1-2">CHECKOUT</h1>
				</Slide>
				
			<div className="grid-con">
					<img className="img1" src="https://res.cloudinary.com/ajiva/image/upload/v1563881533/quikbuy/vans.jpg" alt="vans"/>
					<img className="img2" src="https://res.cloudinary.com/ajiva/image/upload/v1563881526/quikbuy/jeanjacket.jpg" alt="jeanjacket"/>
					<img className="img3" src="https://res.cloudinary.com/ajiva/image/upload/v1563881512/quikbuy/redbag.jpg" alt="red bag"/>
					<img className="img4" src="https://res.cloudinary.com/ajiva/image/upload/v1563881524/quikbuy/hotsneakers.jpg" alt="sneakers"/>
			</div>
			</div>
			<div className="hero-bg">
				<img src="https://res.cloudinary.com/ajiva/image/upload/v1563881385/quikbuy/ladybg.jpg" alt="Img"/>
			</div>
		</div>
		// 1john 3:22-23
	);
}
export default Hero
	

