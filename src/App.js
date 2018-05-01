import React, { Component } from 'react';
import Person from './Person/Person';


class App extends Component {

    state ={
        persons:[
            {name: 'Juli', age:28},
            {name: 'kli', age:35},
        ],
        otherState: 'some other value'
    };
    switchNameHandler =(newName)=>{
       // console.log(this.state)
        this.setState({
            persons:[
                {name: newName, age:28},
                {name: 'niki', age:75},
            ]
        });
    };

    nameChangeHandler = (event)=>{
        this.setState({
            persons:[
                {name: 'julia', age:28},
                {name: event.target.value, age:75},
            ]
        });

    };

  render() {
    return (
      <div className="App">

       <h1>Hi</h1>
          <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
          />
          <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Julia io')}
              changed={this.nameChangeHandler}
          >Habbit:sleep</Person>
          <button onClick={()=>this.switchNameHandler('Jul123')}>Switch name</button>
      </div>
    );
  }
}

export default App;
