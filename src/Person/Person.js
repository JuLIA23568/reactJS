/**
 * Created by Юлия on 01.05.2018.
 */
import React, { Component } from 'react';



class Person extends Component {

    render() {
console.log(this.props);
        return (
            <div className="Person">
                <h1 >Name is {this.props.name} and age is {this.props.age}</h1>
                <p onClick={this.props.click}>just click me</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    }
}

export default Person;
