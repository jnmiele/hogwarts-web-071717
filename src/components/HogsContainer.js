import React from 'react'

import Hogs from '../porkers_data'
import HogsList from './HogsList'

class HogsContainer extends React.Component {
		constructor() {
		super()

		this.state = {
			hogs: Hogs,
			sorted: "unsorted"
		}
	}

	sort = (event) => {
		if (this.state.sorted === "unsorted" || this.state.sorted === "descending") {
			let newHogs = this.state.hogs.sort((prev, next) => {
				if (prev[event.target.value] < next[event.target.value]) return -1
				if (prev[event.target.value] > next[event.target.value]) return 1
				return 0
			})

			this.setState({
				hogs: newHogs,
				sorted: "ascending"
			})
		} else if (this.state.sorted === "ascending") {
			let newHogs = this.state.hogs.reverse()	
			this.setState({
				hogs: newHogs,
				sorted: "descending"
			})
		}
	}

	hidePig = (event) => {
		let hogName = event.target.name
		let hog = this.state.hogs.find((hog) => hog.name === hogName)
		hog.infoVisible = hog.infoVisible === true ? false:true
		this.setState({
			hogs: Hogs
		})
	}

	showGreasyPigs() {
		let newHogs = Hogs.filter((pig) => {
				if (pig.greased) return pig
			})
		this.setState({
			hogs: newHogs
		})
	}

	showCleanPigs() {
		let newHogs = Hogs.filter((pig) => {
				if (!pig.greased) return pig
			})
		this.setState({
			hogs: newHogs
		})
	}

	handleChange = (event) => {
		this.setState({ hogs: Hogs})
		if (event.target.value === "With grease") {
			this.showGreasyPigs()
		} else if (event.target.value === "Without grease") {
			this.showCleanPigs()
		}
	}

	render() {
		return(
			<div>
				<div>
        	<h2> Sort de Piggies! </h2>
        	<button id="name-sort" onClick={this.sort} value="name">Sort by Name</button>
        	<button id="weight-sort" onClick={this.sort} value="weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water">Sort by Weight</button>
        	<select onChange={this.handleChange}>
        		<option></option>
        		<option>With grease</option>
        		<option>Without grease</option>
        	</select>
        	<br/><br/>
        </div>
				<HogsList hogs={this.state.hogs} hidePiggie={this.hidePig}/>
			</div>
		)
	}
}

export default HogsContainer
