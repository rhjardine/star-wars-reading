import React, {useContext} from "react";
import {Context} from "../store/appContext";
import { Card } from "../component/Card";
import "../../styles/home.css";


export const Home = () => {
	const {store,actions}= useContext (Context)
	return (
	
		<div className="container">
			<div className="d-flex flex-wrap w-100">
				<div className="d-flex overflow-scroll">
					{store.characters.map(
					(character, index) => {
						return (
						<Card key={character.uid}
							  item={character}
							  resource={"characters"}/>
						)
						}
					)};
				</div>
				<div className="d-flex overflow-scroll">
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
				<div className="d-flex overflow-scroll">
					{store.vehicles.map(
					(vehicle, index) => {
						return (
						<Card key={vehicle.uid}
							  item={vehicle} 
							  resource={"vehicles"}
							  />
						)
						}
					)};
				</div>
			</div>
		</div>			
		);
};






