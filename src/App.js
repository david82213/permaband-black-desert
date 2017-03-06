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
        <input type="number" onChange={this.update.bind(this)} />
      </div>
    )
  }
}

// const App = () => <h1>Welcome to PermaBand</h1>

App.propTypes = {
  count: React.PropTypes.number.isRequired
}

// default value of count if no count is passed in
App.defaultProps = {
  count: 4
}

export default App
