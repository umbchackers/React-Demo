import React, {Component} from 'react';
import './index.css';


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


	render() {
		return(
			<button
				onClick={this.handleClick}
				className={"button " + this.state.color}
			>Click Me</button>
		);
	}
}

export default Button;