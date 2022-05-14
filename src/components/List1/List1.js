import React from "react";
import Item from '../Item/Item';

class List1 extends React.Component {
  shouldComponentUpdate(currProps) {
    //console.log(currProps.item.length, this.props.items.length);
    return this.props.items.length !== currProps.items.length
  }
  
  render() {
    console.log('render List1');
    return (
      <ul>
        {this.props.items.map(element => {
          return <Item key={element.id} value={element.item}/>
        })}
      </ul>
    )
  }
}

export default List1;