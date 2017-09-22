import React from 'react'

class Hog extends React.Component {

	render() {
		if (this.props.hog.infoVisible) {
			return(
			<div className="ui card" data-name={this.props.hog.name}>
				<div className="content"> 
					<a className="header">Name: {this.props.hog.name}</a>
					<div className="meta">
      			<span className="date">Higest Medal Achieved: {this.props.hog["highest medal achieved"]}</span>
    			</div>
    			<div className="description">
						Weight: {this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}lbs<br/>
						Specialty: {this.props.hog.specialty}<br/>
						Greased: {this.props.hog.greased ? "This one is greased!" : "This one has no grease"}
					</div>
				</div>
				<div className="extra content">
					<button name={this.props.hog.name} onClick={this.props.hidePiggie}> Hide Info </button>
				</div>
			</div>
		)
		} else {
			return(
			<div className="ui card" data-name={this.props.hog.name}>
				<div className="content"> 
					<a className="header">Name: {this.props.hog.name}</a>
					<div className="meta">
      			<span className="date">Higest Medal Achieved: {this.props.hog["highest medal achieved"]}</span>
    			</div>
    			<div className="description">
						
					</div>
				</div>
				<div className="extra content">
					<button name={this.props.hog.name} onClick={this.props.hidePiggie}> Hide Info </button>
				</div>
			</div>
		)
		}
		
	}
}

export default Hog