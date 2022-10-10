import { Component } from "react";
import "./card-list.styles.css";
import CardComponent from "./card-component";

class CardList extends Component {
	// state = {};

	render() {
		// console.log(this.props);
		const { monsters } = this.props;

		return (
			<div className="card-list">
				{monsters.map((monster) => {
					const { id } = monster;
					return (
						<div key={id}>
							<CardComponent monster={monster} />
						</div>
					);
				})}
			</div>
		);
	}
}

export default CardList;
