import React, {Component} from 'react';
import '../index.css';

class ChildComponent extends Component{

    constructor(props){
        super(props);
    }


    render(){

        return(
        <div>
            <p onClick = {this.props.makeGreen}>
                The button color is {this.props.color}
            </p>
        </div>
        )
    }
}

export default ChildComponent;