import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";
// import "./components/card-list/card-list.styles.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: "",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) =>
				this.setState(() => {
					return { monsters: users };
				})
			);
	}

	onSearchChange = (event) => {
		// console.log(event.target.value);
		// console.log({ startingArray: this.state.monsters });
		const searchField = event.target.value.toLocaleLowerCase();

		this.setState(() => {
			return { searchField };
		});
	};
	render() {
		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;
		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});
		return (
			<div className="container mt-2">
				<h1 className="text-center text-danger">Monsters Bolodex</h1>
				<SearchBox onChangeHandler={onSearchChange} className="search-box" />

				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
