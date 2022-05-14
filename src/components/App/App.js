import faker from '@faker-js/faker';
import React from 'react';
import { v4 } from 'uuid';
import List1 from '../List1/List1';
import List2 from '../List2/List2';
import './App.css';

class App extends React.Component {
  state = {
    items: [],
    flag: true,
    value: ''
  }
  constructor(props) {
    super(props);

    for(let i = 0; i < 10000; i++) {
      this.state.items.push({
        id: v4(),
        item: faker.name.findName()
      })
    }
  }

  handleAddItemToStart() {
    const newItem = faker.name.findName();

    this.setState({
      items: [
        {
          item: newItem,
          id: v4()
        },
        ...this.state.items
      ]
    })
  }
  handleAddItemToEnd() {
    const newItem = faker.name.findName();

    this.setState({
      items: [
        ...this.state.items,
        {
          item: newItem,
          id: v4()
        },
      ]
    })
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({ flag: !this.state.flag})}>
          Change
        </button>

        <button onClick={this.handleAddItemToStart.bind(this)}>
          Add item to start
        </button>

        <button onClick={this.handleAddItemToEnd.bind(this)}>
          Add item to end
        </button>
        <p>
          <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        </p>

        {this.state.flag
        ? <List1 items={this.state.items} />
        : <List2 items={this.state.items} />
        }

      </div>
    )
  }
}

export default App;
