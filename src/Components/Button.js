import React, {Component} from 'react';
import '../index.css';
import ChildComponent from './ChildComponent.js'


class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: 'blue'
		}

	}

	handleClick = () => {
		this.setState({
			color: this.state.color == "blue" ? "red" : "blue"
		});
	}

	makeGreen = () => {
		this.setState({
			color: "green"
		});
	}


	render() {
		return(

			<div>

			<ChildComponent color={this.state.color} makeGreen={this.makeGreen}/>

			<button
				onClick={this.handleClick}
				className={"button " + this.state.color}
			>Click Me</button>

			</div>
		);
	}
}

export default Button;