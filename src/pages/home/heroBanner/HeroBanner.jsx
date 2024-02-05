import React, { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
const HeroBanner = () => {
	// const [background, setbackground] = useState("");
	const [query, setQuery] = useState("");
	const navigate = useNavigate();

	const searchHandler = (e) => {
		if (e.key === "Enter" && query.length > 0) {
			navigate(`search/${query}`);
		}
	};
	return (
		<div className="heroBanner">
			<div className="wrapper">
				<div className="heroBannerContent">
					<span className="title">Welcom</span>
					<span className="subTitle">
						Millions of movies, TV shows and people to discover. Explore now.
					</span>
					<div className="searchInput">
						<input
							type="text"
							placeholder="Search for a movie or tv show ..."
							onChange={(e) => {
								setQuery(e.target.value);
							}}
							onKeyUp={searchHandler}
						/>
						<button>Search</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
