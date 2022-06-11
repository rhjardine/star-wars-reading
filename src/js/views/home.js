import React, {useContext} from "react";
import {Context} from "../store/appContext";
import { Card } from "../component/Card";
import "../../styles/home.css";


export const Home = () => {
	const {store,actions}= useContext (Context)
	return (
	
		<div className="container">
			<div className="d-flex flex-wrap w-100">
				<div className="d-flex">
					{store.characters.map(
					(character, index) => {
						return (
						<Card key={character.uid}
							  item={character}
							  resource={"people"}/>
						)
						}
					)};
				</div>

				<div className="d-flex">
					{store.planets.map(
					(planet, index) => {
						return (
						<Card key={planet.uid}
							  item={planet} 
							  resource={"planets"}
							  />
						)
						}
					)};
				</div>

			
			</div>
		</div>			
		);
};






