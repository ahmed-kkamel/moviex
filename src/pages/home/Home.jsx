import React from "react";
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
const Home = () => {
	return (
		<>
			<HeroBanner />
			<Trending />
			<div style={{ height: "100vh" }}></div>
		</>
	);
};

export default Home;
