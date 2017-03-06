import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      count: 4
    }
  }

  update(e){
    this.setState( {count: e.target.value} )
  }

  render() {
    let count = this.props.count
    return (
      <div>
        <h1>Welcome to PermaBand! We have {this.state.count} guild mates</h1>
        {/* <input type="number" onChange={this.update.bind(this)} /> */}
        <Counter update={this.update.bind(this)} />
      </div>
    )
  }
}

// const App = () => <h1>Welcome to PermaBand</h1>
const Counter = (props) =>
  <input type="number" onChange={props.update} />

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
