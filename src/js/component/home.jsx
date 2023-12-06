import React from "react";

import {Navbar} from "./navbar.jsx"
import {Jumbotron} from "./jumbotron.jsx"
import {Cards} from "./cards.jsx"  


//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="">
			<Navbar/>
			<Jumbotron/>

			<div className="container">
				<Cards/> 
				<Cards/> 
				<Cards/> 
				<Cards/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
