import React, { Component } from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
	state = {
		monsters: [],
		searchField: '',
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((user) => this.setState({ monsters: user }));
	}

	handleChange = (e) => {
		this.setState({ searchField: e.target.value }, () =>
			// setState is async so to get the live update i.e(this.state.searchField) we used callback which is 2nd argument of setState
			console.log(this.state.searchField)
		);
	};
	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className='App'>
			<h1>Monster Card</h1>
				<SearchBox
					placeholder='search monster'
					handleChange={this.handleChange}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
