import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      count: 4
    }
  }

  update(e){
    this.setState({
      // count: e.target.value
      // count: this.refs.count.value,
      count: this.count.refs.count.value,
      person: this.count.refs.person.value,
    })

    console.log(this.state.count, this.state.person);
  }

  render() {
    let count = this.props.count
    return (
      <div>
        <h1>Welcome to PermaBand! We have {this.state.count} guild mates</h1>
        <h3>Updated by {this.state.person}</h3>
        {/* <input type="number" onChange={this.update.bind(this)} /> */}
        <Counter ref={component=> this.count = component} update={this.update.bind(this)} />
      </div>
    )
  }
}

// const App = () => <h1>Welcome to PermaBand</h1>
// const Counter = (props) => (
class Counter extends React.Component {
  render(){
    return (
      <div>
        {/* <input type="number" onChange={props.update} /> */}
        <input ref="count" type="number" onChange={this.props.update} />
        <input ref="person" type="text" onChange={this.props.update} />
      </div>
    )
  }
}

App.propTypes = {
  // count: React.PropTypes.number.isRequired
  count(props, propName, component){
    if(!(propName in props)){
      return new Error(`missing ${propName}`)
    }
    if(props[propName] < 0){
      return new Error(`${propName} cannot be less than 0`)
    }
  }
}

// default value of count if no count is passed in
App.defaultProps = {
  count: 4
}

export default App
