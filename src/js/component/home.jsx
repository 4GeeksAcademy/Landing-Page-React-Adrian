import React from "react";

import {Navbar} from "./navbar.jsx"
import {Jumbotron} from "./jumbotrom.jsx"
import {Cards} from "./cards.jsx"  
import {Footer} from "./footer.jsx"

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="">
			<Navbar/>
			<Jumbotron/>

			<div className="d-flex flex-wrap bg-black contenedorPhotos">
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
