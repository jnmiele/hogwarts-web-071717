import React from 'react'
import Hog from './Hog'

class HogsList extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log(this.props)
		const hogs = this.props.hogs.map((hog, index) => <Hog hidePiggie={this.props.hidePiggie} key={index} hog={hog}/>) // this actually renders each individual hog to the container
		return(	
			<div className="ui cards">
				{hogs}
			</div>
		)
	}
}

export default HogsList